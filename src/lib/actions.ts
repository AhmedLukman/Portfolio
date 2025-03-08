"use server";

import { DB_STATE, initialFormState } from "./constants";
import { Resend } from "resend";
import { z } from "zod";
import { EmailTemplate } from "../components/page/contact-page/EmailTemplate";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  recipientEmail: z.string().min(1, "Email is required").email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  db: z.enum([DB_STATE.SUCCESS, DB_STATE.ERROR]).optional(),
});

type ContactForm = z.infer<typeof contactFormSchema>;

export const sendEmail = async (
  _: unknown,
  formData: FormData
): Promise<ContactForm> => {
  const name = formData.get("name");
  const recipientEmail = formData.get("recipientEmail");
  const message = formData.get("message");

  const { success, data, error } = contactFormSchema.safeParse({
    name,
    recipientEmail,
    message,
  });

  if (!success) {
    return {
      ...initialFormState,
      name: error.flatten().fieldErrors.name?.[0] ?? "",
      recipientEmail: error.flatten().fieldErrors.recipientEmail?.[0] ?? "",
      message: error.flatten().fieldErrors.message?.[0] ?? "",
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: process.env.MY_EMAIL as string,
      subject: `Contact form submission from ${data.name}`,
      react: await EmailTemplate(data),
      replyTo: data.recipientEmail,
      text: `Contact form submission from ${data.name}. Please view this email in an HTML-compatible email client.`,
    });
    return {
      ...initialFormState,
      db: DB_STATE.SUCCESS,
    };
  } catch (error) {
    console.error(error);
    return {
      ...initialFormState,
      db: DB_STATE.ERROR,
    };
  }
};
