"use server";

import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { contactFormSchema } from "./schemas";
import { ContactFormState } from "./types";
import { initialFormState } from "./constants";

export const sendEmail = async (
  formState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> => {
  const name = formData.get("name");
  const recipientEmail = formData.get("email");
  const message = formData.get("message");

  const {success, data, error} = contactFormSchema.safeParse({
    name,
    email: recipientEmail,
    message,
  });
  if (!success) {
    return {
      errors: {
        ...initialFormState.errors,
        name: error.flatten().fieldErrors.name?.[0] ?? "",
        email: error.flatten().fieldErrors.email?.[0] ?? "",
        message: error.flatten().fieldErrors.message?.[0] ?? "",
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
    text: data.message,
    html: `
        <div style="max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
          <header style="background-color: #657786; padding: 20px; border-radius: 10px;  border-bottom-left-radius: 0; border-bottom-right-radius: 0;">
                <h1 style="margin: 0; color: #fff; font-size: 20px;">Contact</h1>
          </header>
          <main style="padding: 20px; padding-top: 25px; padding-bottom: 25px; background-color: #fff;">
                <p><strong style="color: #262c35; padding-left: 20px;">Name:</strong> ${name}</p>
                <p><strong style="color: #262c35; padding-left: 20px;">Email:</strong> ${recipientEmail}</p>
                <strong style="color: #262c35; padding-left: 20px;">Message:</strong>
                <p style="padding-left: 20px; margin-top: 0">
                ${message}
                </p>
          </main>
        </div>
    `,
    replyTo: data.email,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return {
      errors: {
        ...initialFormState.errors,
        db: "success",
      },
    };
  } catch (error) {
    return {
      errors: {
        ...initialFormState.errors,
        db: "Error sending email, please try again",
      },
    };
  }
};
