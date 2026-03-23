import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  inquiryType: z.string().min(1),
  message: z.string().min(10),
});

type ContactData = z.infer<typeof contactSchema>;

function renderBusinessEmail(data: ContactData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #f5f5f5;">
  <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <h2 style="color: #1a1a1a; margin-bottom: 20px;">New Inquiry from inDEF Website</h2>
    
    <div style="margin-bottom: 20px; border-bottom: 1px solid #e0e0e0; padding-bottom: 20px;">
      <p style="margin: 10px 0; color: #555;"><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p style="margin: 10px 0; color: #555;"><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}" style="color: #0066cc;">${escapeHtml(data.email)}</a></p>
      <p style="margin: 10px 0; color: #555;"><strong>Phone:</strong> <a href="tel:${escapeHtml(data.phone)}" style="color: #0066cc;">${escapeHtml(data.phone)}</a></p>
      <p style="margin: 10px 0; color: #555;"><strong>Inquiry Type:</strong> ${escapeHtml(data.inquiryType)}</p>
    </div>
    
    <div style="margin-bottom: 20px;">
      <p style="color: #555; font-weight: bold; margin-bottom: 10px;">Message:</p>
      <p style="color: #555; background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #d4af37; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
    </div>
    
    <p style="color: #999; font-size: 12px; margin-top: 30px;">This email was sent from your inDEF Design & Construction N.V. website contact form.</p>
  </div>
</body>
</html>
  `.trim();
}

function renderConfirmationEmail(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #f5f5f5;">
  <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <h2 style="color: #1a1a1a; margin-bottom: 20px;">Thank you, ${escapeHtml(name)}!</h2>
    <p style="color: #555; line-height: 1.6;">We received your inquiry and will get back to you soon.</p>
    <p style="color: #555; margin-top: 20px;">Best regards,<br/><strong>inDEF Design & Construction N.V.</strong></p>
  </div>
</body>
</html>
  `.trim();
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL ?? "devane.tirtosemito@indefdesign.com"; // set via CONTACT_RECIPIENT_EMAIL in .env.local

    console.log("[Contact API] Sending to:", recipientEmail);
    console.log("[Contact API] From:", "noreply@indefdesign.com");

    // Send email to business
    const { error: bizError } = await resend.emails.send({
      from: "Contact Form <noreply@indefdesign.com>",
      to: recipientEmail,
      subject: `New Inquiry from ${validatedData.name}`,
      html: renderBusinessEmail(validatedData),
    });

    if (bizError) {
      console.error("[Contact API] Business email error:", bizError);
      return NextResponse.json({ success: false, error: bizError.message }, { status: 500 });
    }

    console.log("[Contact API] Business email sent successfully");

    // Send confirmation email to user
    const { error: confirmError } = await resend.emails.send({
      from: "inDEF Design <noreply@indefdesign.com>",
      to: validatedData.email,
      subject: "We received your inquiry",
      html: renderConfirmationEmail(validatedData.name),
    });

    if (confirmError) {
      // Log but don't fail — inquiry was already received
      console.warn("[Contact API] Confirmation email error:", confirmError);
    } else {
      console.log("[Contact API] Confirmation email sent successfully");
    }

    console.log("[Contact API] Request completed successfully");
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("[Contact API] Validation error:", error.issues);
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    console.error("[Contact API] Unexpected error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send inquiry" },
      { status: 500 }
    );
  }
}
