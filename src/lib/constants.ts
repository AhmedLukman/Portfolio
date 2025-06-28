import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {
  faCode,
  faContactBook,
  faHouse,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"

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
]

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
]

export const initialFormState = {
  name: "",
  recipientEmail: "",
  message: "",
} as const

export const ProjectStatus = {
  completed: "Completed",
  pending: "Pending",
} as const

export type TProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]

export const PORTFOLIO_SITE = "https://www.ahmedlukman.dev"
