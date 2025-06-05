import { StaticImageData } from "next/image";
import { TProjectStatus } from "./constants";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export type Project = {
  overview: {
    title: string;
    description: string;
    image: StaticImageData;
    site: string;
    source: string;
    status: TProjectStatus;
    startDate: Date;
    endDate?: Date;
  };
  image: StaticImageData;
  route: string;
  slug: string;
  techStack: {
    alt: string;
    src: string;
  }[];
  metrics: {
    alt: string;
    src: string;
    score: number;
  }[];
  features: string[];
  caseStudy: {
    title: string;
    description: string;
    icon: IconDefinition;
    colors: number[][];
    dotSize?: number;
    bgColor: string;
  }[];
};