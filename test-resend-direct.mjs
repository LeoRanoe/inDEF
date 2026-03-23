import { Resend } from "resend";

const resend = new Resend("re_JLCWtSbG_LUwymgi9LqsKdFT3ah5LyvAY");

try {
  const result = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "lranoesendjojo@gmail.com",
    subject: "Test: New Inquiry from Test User",
    html: "<h2>New Inquiry from inDEF Website</h2><p><strong>Name:</strong> Test User</p><p><strong>Email:</strong> devtirto@gmail.com</p><p><strong>Phone:</strong> +597 874 3028</p><p><strong>Type:</strong> General Inquiry</p><p><strong>Message:</strong> This is a test message from the contact form.</p>",
  });
  console.log("Email 1 sent:", JSON.stringify(result, null, 2));

  const result2 = await resend.emails.send({
    from: "inDEF Design <onboarding@resend.dev>",
    to: "lranoesendjojo@gmail.com",
    subject: "We received your inquiry",
    html: "<h2>Thank you, Test User!</h2><p>We received your inquiry and will get back to you soon.</p><p>Best regards,<br />inDEF Design & Construction</p>",
  });
  console.log("Email 2 sent:", JSON.stringify(result2, null, 2));
} catch (e) {
  console.error("Error:", e.message, e);
}
