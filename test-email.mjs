import { Resend } from "resend";

const resend = new Resend("re_JLCWtSbG_LUwymgi9LqsKdFT3ah5LyvAY");

const testData = {
  name: "Test User",
  email: "devtirto@gmail.com",
  phone: "+597 874 3028",
  inquiryType: "General Inquiry",
  message: "This is a test message from the contact form to verify the Resend email service is working correctly.",
};

console.log("Sending business email to devane.tirtosemito@indefdesign.com ...");
const { data: d1, error: e1 } = await resend.emails.send({
  from: "Contact Form <noreply@indefdesign.com>",
  to: "devane.tirtosemito@indefdesign.com",
  subject: `New Inquiry from ${testData.name}`,
  html: `<h2>New Inquiry from inDEF Website</h2>
    <p><strong>Name:</strong> ${testData.name}</p>
    <p><strong>Email:</strong> ${testData.email}</p>
    <p><strong>Phone:</strong> ${testData.phone}</p>
    <p><strong>Inquiry Type:</strong> ${testData.inquiryType}</p>
    <p><strong>Message:</strong> ${testData.message}</p>`,
});

if (e1) {
  console.error("Business email FAILED:", e1.message);
} else {
  console.log("Business email SENT - id:", d1.id);
}

console.log("\nSending confirmation email to devtirto@gmail.com ...");
const { data: d2, error: e2 } = await resend.emails.send({
  from: "inDEF Design <noreply@indefdesign.com>",
  to: testData.email,
  subject: "We received your inquiry",
  html: `<h2>Thank you, ${testData.name}!</h2>
    <p>We received your inquiry and will get back to you soon.</p>
    <p>Best regards,<br/>inDEF Design & Construction</p>`,
});

if (e2) {
  console.error("Confirmation email FAILED:", e2.message);
} else {
  console.log("Confirmation email SENT - id:", d2.id);
}
