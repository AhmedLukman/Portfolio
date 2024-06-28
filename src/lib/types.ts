import { Status } from "./constants";
import { z } from "zod";
import { contactFormSchema } from "./schemas";

export type Project = {
  title: string;
  description: string;
  image: string;
  route: string;
  site: string;
  source: string;
  status: (typeof Status)[keyof typeof Status];
  slug: string;
  techStack: {
    alt: string;
    src: string;
  }[];
  metrics: {
    alt: string;
    src: string;
    score: string;
  }[];
};

export type ContactForm = z.infer<typeof contactFormSchema>;

export type ContactFormState = {
  errors: {
    name: string;
    email: string;
    message: string;
    db: string;
  };
};
