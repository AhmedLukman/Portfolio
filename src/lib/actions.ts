"use server";

import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export const sendEmail = async (
  formState: { errors: { form: string } },
  formData: FormData
) => {
  const name = formData.get("name") as string;
  const resEmail = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validate form inputs
  if (!name || !resEmail || !message) {
    return {
      errors: {
        form: "One or more fields is incorrect, please try again.",
      },
    };
  }

  // Retrieve email credentials from environment variables
  const email = process.env.EMAIL;
  const pass = process.env.PASS;

  // Set up nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass,
    },
  });

  const mailOptions: SMTPTransport.MailOptions = {
    from: email,
    to: email,
    subject: `Portfolio Contact Form Submission from ${name}`,
    text: message,
    html: `
        <div style="max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
          <header style="background-color: #657786; padding: 20px; border-radius: 10px;  border-bottom-left-radius: 0; border-bottom-right-radius: 0;">
                <h1 style="margin: 0; color: #fff; font-size: 20px;">Contact</h1>
          </header>
          <main style="padding: 20px; padding-top: 25px; padding-bottom: 25px; background-color: #fff;">
                <p><strong style="color: #262c35; padding-left: 20px;">Name:</strong> ${name}</p>
                <p><strong style="color: #262c35; padding-left: 20px;">Email:</strong> ${resEmail}</p>
                <strong style="color: #262c35; padding-left: 20px;">Message:</strong>
                <p style="padding-left: 20px; margin-top: 0">
                ${message}
                </p>
          </main>
        </div>
    `,
    replyTo: resEmail,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      errors: {
        form: "Something went wrong, please try again.",
      },
    };
  }

  return {
    errors: {
      form: "success",
    },
  };
};
