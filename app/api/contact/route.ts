import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import ContactEmailTemplate from "@/components/emails/ContactEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  inquiryType: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Send email to business
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "devane.tirtosemito@indefdesign.com",
      subject: `New Inquiry from ${validatedData.name}`,
      react: ContactEmailTemplate(validatedData),
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: "inDEF Design <onboarding@resend.dev>",
      to: validatedData.email,
      subject: "We received your inquiry",
      react: ContactConfirmationTemplate(validatedData.name),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send inquiry" },
      { status: 500 }
    );
  }
}

function ContactConfirmationTemplate(name: string) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2>Thank you, {name}!</h2>
      <p>We received your inquiry and will get back to you soon.</p>
      <p>Best regards,<br />inDEF Design & Construction</p>
    </div>
  );
}
