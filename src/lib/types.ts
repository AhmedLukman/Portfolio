import { Status } from "./constants";
import { z } from "zod";
import { contactFormSchema } from "./schemas";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

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
  caseStudy: {
    title: string;
    description: string;
    icon: IconDefinition;
    colors: number[][];
    dotSize?: number;
    bgColor: string;
  }[];
};

export type ContactForm = z.infer<typeof contactFormSchema>;