"use server";

import nodemailer from "nodemailer";

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

  const mailOptions = {
    from: email,
    to: email,
    subject: `Contact Form Submission from ${name}`,
    text: message,
    html: message,
    replyTo: resEmail, 
  };

  // Attempt to send the email
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
      form: "no error",
    },
  };
};
