"use server";

import "server-only";

import { initialFormState } from "./constants";
import { Resend } from "resend";
import { z } from "zod";
import { EmailTemplate } from "../components/page/contact-page/EmailTemplate";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  recipientEmail: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .trim(),
  message: z.string().min(1, "Message is required").trim(),
  db: z.enum(["success", "error"]).optional(),
});

type ContactForm = z.infer<typeof contactFormSchema>;

export const sendEmail = async (
  _: unknown,
  formData: FormData,
): Promise<ContactForm> => {
  const parsedFormData = Object.fromEntries(formData);
  const { success, data, error } = contactFormSchema.safeParse(parsedFormData);

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
      db: "success",
    };
  } catch (error) {
    console.error(error);
    return {
      ...initialFormState,
      db: "error",
    };
  }
};
