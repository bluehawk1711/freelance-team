import nodemailer from "nodemailer";

function getTransport() {
  const user = process.env.GMAIL_EMAIL;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error("GMAIL_EMAIL and GMAIL_APP_PASSWORD must be set");
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  });
}

function getFromAddress() {
  return process.env.GMAIL_EMAIL || "noreply@floattech.com";
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  const transport = getTransport();

  await transport.sendMail({
    from: getFromAddress(),
    to: getFromAddress(),
    replyTo: data.email,
    subject: `[Contact] ${data.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${data.name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${data.email}</td></tr>
        ${data.phone ? `<tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${data.phone}</td></tr>` : ""}
        <tr><td style="padding:8px;font-weight:bold">Subject</td><td style="padding:8px">${data.subject}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Message</td><td style="padding:8px;white-space:pre-wrap">${data.message}</td></tr>
      </table>
    `,
  });
}

export async function sendNewsletterNotification(email: string) {
  const transport = getTransport();

  await transport.sendMail({
    from: getFromAddress(),
    to: getFromAddress(),
    subject: "[Newsletter] New subscriber",
    html: `
      <h2>New Newsletter Subscription</h2>
      <p><strong>Email:</strong> ${email}</p>
    `,
  });
}
