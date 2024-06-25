import { Status } from "./constants";

export type Project = {
  title: string;
  description: string;
  image: string;
  route: string;
  site: string;
  source: string;
  status: typeof Status[keyof typeof Status];
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
