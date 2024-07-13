import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faContactBook,
  faHouse,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export const PAGE_LINKS = [
  {
    name: "Home",
    path: "/",
    icon: faHouse,
  },
  {
    name: "About",
    path: "/about",
    icon: faInfoCircle,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: faCode,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: faContactBook,
  },
];

export const SOCIAL_LINKS = [
  {
    name: "Github",
    icon: faGithub,
    path: "https://www.github.com/ahmedlukman",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    path: "https://www.linkedin.com/in/ahmedlukman",
  },
];

export const initialFormState = {
  name: "",
  email: "",
  message: "",
  db: "",
};

export enum Status {
  Completed = "Completed",
  Pending = "Pending",
  Cancelled = "Cancelled",
}

export enum JobType {
  FullTime = "Full Time",
  PartTime = "Part Time",
  Contract = "Contract",
  Internship = "Internship",
}