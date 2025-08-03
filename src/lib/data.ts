import {
  faExclamationTriangle,
  faLightbulb,
  faMedal,
  faPersonCane,
  faRocket,
  faSearch,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons"
import { StaticImageData } from "next/image"
import { PORTFOLIO_SITE, ProjectStatus } from "./constants"
import { Project } from "./types"
import BackEndImage from "public/assets/images/backend.jpg"
import AuthJS from "public/assets/images/backend/authjs.svg"
import PostgreSQL from "public/assets/images/backend/postgresql.svg"
import Prisma from "public/assets/images/backend/prisma.svg"
import Resend from "public/assets/images/backend/resend.svg"
import Supabase from "public/assets/images/backend/supabase.svg"
import CinemanieLaptop from "public/assets/images/cinemania-laptop.png"
import Cinemania from "public/assets/images/cinemania.png"
import DesignImage from "public/assets/images/design.jpg"
import DeviceDigitalLearning from "public/assets/images/device-digitallearning.png"
import DeviceMasterTracker from "public/assets/images/device-mastertracker.png"
import DeviceNextEvent from "public/assets/images/device-nextevent.png"
import DevicePortfolio from "public/assets/images/device-portfolio.png"
import DeviceWorldVisualizer from "public/assets/images/device-worldvisualizer.png"
import ChatGPT from "public/assets/images/devtools/chatgpt.svg"
import Claude from "public/assets/images/devtools/claude.svg"
import Copilot from "public/assets/images/devtools/copilot.svg"
import ESLint from "public/assets/images/devtools/eslint.svg"
import Git from "public/assets/images/devtools/git.svg"
import GitHub from "public/assets/images/devtools/github.svg"
import NPM from "public/assets/images/devtools/npm.svg"
import Prettier from "public/assets/images/devtools/prettier.svg"
import Vercel from "public/assets/images/devtools/vercel.svg"
import Vite from "public/assets/images/devtools/vite.svg"
import VSCode from "public/assets/images/devtools/vscode.svg"
import DigitalLearning from "public/assets/images/digitallearning.png"
import Framer from "public/assets/images/framer.svg"
import FrontEndImage from "public/assets/images/frontend.jpg"
import AceternityUI from "public/assets/images/frontend/aceternity.webp"
import CSS from "public/assets/images/frontend/css.svg"
import HeroUI from "public/assets/images/frontend/heroui.svg"
import HTML5 from "public/assets/images/frontend/html5.svg"
import JavaScript from "public/assets/images/frontend/javascript.svg"
import Next from "public/assets/images/frontend/next.svg"
import React from "public/assets/images/frontend/react.svg"
import Svelte from "public/assets/images/frontend/svelte.svg"
import Tailwind from "public/assets/images/frontend/tailwind.svg"
import TypeScript from "public/assets/images/frontend/typescript.svg"
import Zod from "public/assets/images/frontend/zod.svg"
import GreatLearning from "public/assets/images/greatlearning.jpeg"
import IlabAfrica from "public/assets/images/ilabafrica.jpg"
import MasterTracker from "public/assets/images/mastertracker.png"
import NextEvent from "public/assets/images/nextevent.png"
import Portfolio from "public/assets/images/portfolio.png"
import SoloLearn from "public/assets/images/sololearn.jpeg"
import Strathmore from "public/assets/images/strathmore.jpeg"
import ThomsonReuters from "public/assets/images/thomsonreuters.png"
import ThreeJS from "public/assets/images/threejs.svg"
import Trinetium from "public/assets/images/trinetium.jpeg"
import WorldVisualizer from "public/assets/images/worldvisualizer.png"
import Yoonka from "public/assets/images/yoonka.jpeg"

export const FRONT_END_TECHS = [
  {
    name: "HTML5",
    src: HTML5,
  },
  {
    name: "CSS",
    src: CSS,
  },
  {
    name: "JavaScript",
    src: JavaScript,
  },
  {
    name: "React.js",
    src: React,
  },
  {
    name: "Next.js",
    src: Next,
  },
  {
    name: "Svelte",
    src: Svelte,
  },
  {
    name: "TypeScript",
    src: TypeScript,
  },
  {
    name: "Tailwind CSS",
    src: Tailwind,
  },
  {
    name: "HeroUI",
    src: HeroUI,
  },
  {
    name: "AceternityUI",
    src: AceternityUI,
  },
  {
    name: "Zod",
    src: Zod,
  },
]

export const BACKEND_TECHS = [
  {
    name: "Auth.js",
    src: AuthJS,
  },
  {
    name: "Prisma",
    src: Prisma,
  },
  {
    name: "Supabase",
    src: Supabase,
  },
  {
    name: "PostgreSQL",
    src: PostgreSQL,
  },
  {
    name: "Resend",
    src: Resend,
  },
]

export const DEV_TOOLS = [
  {
    name: "VSCode",
    src: VSCode,
  },
  {
    name: "ChatGPT",
    src: ChatGPT,
  },
  {
    name: "GitHub Copilot",
    src: Copilot,
  },
  {
    name: "Claude",
    src: Claude,
  },
  {
    name: "Vercel",
    src: Vercel,
  },
  {
    name: "ESLint",
    src: ESLint,
  },
  {
    name: "Prettier",
    src: Prettier,
  },
  {
    name: "NPM",
    src: NPM,
  },
  {
    name: "Git",
    src: Git,
  },
  {
    name: "GitHub",
    src: GitHub,
  },
  {
    name: "Vite",
    src: Vite,
  },
]

export const TESTIMONIALS = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age. It was the best of times, it was the worst of times, it was the age of wisdom, it was the age.",
    name: "Charles Dickens",
    designation: "Google CEO",
    src: "data:image/png;base64,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",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms.",
    name: "William Shakespeare",
    designation: "Software Developer",
    src: "data:image/jpeg;base64,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",
  },
  {
    quote: "I am the master of my fate: I am the captain of my soul.",
    name: "William Ernest Henley",
    designation: "Software Engineer",
    src: "data:image/png;base64,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",
  },
]

export const WEB_QUALITIES = [
  "Performant",
  "Responsive",
  "Aesthetic",
  "Functional",
  "Accessible",
  "Semantic",
]

export const MASTERY = [
  {
    title: "Front-end",
    description:
      "Expert in creating beautiful, high-performance, responsive, and user-friendly web applications.",
    src: FrontEndImage,
  },
  {
    title: "Back-end",
    description:
      "Skilled in developing robust, scalable, and secure server-side applications.",
    src: BackEndImage,
  },
  {
    title: "UI/UX",
    description:
      "Focused on creating intuitive, engaging, and visually captivating user interfaces that enhance user experience.",
    src: DesignImage,
  },
]

export const GLOBAL_WORLD_CONFIG = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
}
const colors = ["#06b6d4", "#3b82f6", "#6366f1"]
export const SAMPLE_ARCS = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
]

export const EXPERIENCE: {
  title: string
  type: "Full-Time" | "Part-Time" | "Contract" | "Internship"
  description: string
  company: string
  startDate: Date
  endDate?: Date
  companyLogo: StaticImageData
}[] = [
  {
    title: "Front-end Developer",
    type: "Part-Time",
    description: "To be updated",
    company: "Thomson Reuters",
    startDate: new Date(2024, 9),
    companyLogo: ThomsonReuters,
  },
  {
    title: "Front-end Developer",
    type: "Part-Time",
    description: "To be updated",
    company: "Yoonka",
    startDate: new Date(2024, 9),
    companyLogo: Yoonka,
  },
  {
    title: "Front-end Developer",
    type: "Internship",
    description:
      "Collaborated adeptly with UI/UX designers and fellow engineers to craft clean, high-performance front-end web solutions. Recognized as the Lead Intern, entrusted with independent design responsibilities due to a trusted sense of aesthetic.",
    company: "@iLabAfrica",
    startDate: new Date(2023, 1),
    endDate: new Date(2023, 7),
    companyLogo: IlabAfrica,
  },
  {
    title: "Front-end Developer",
    type: "Internship",
    description:
      "Developed visually appealing UI components for the web, integrating dynamic features such as drag and drop, and seamlessly incorporated APIs using Next.js and Express. Recognized for achieving high performance and receiving praise for design excellence.",
    company: "Trinetium DMCC",
    startDate: new Date(2022, 6),
    endDate: new Date(2022, 9),
    companyLogo: Trinetium,
  },
]

export const CERTIFICATIONS = [
  {
    title: "Diploma in Business Information Technology",
    organization: "Strathmore Institute",
    year: "2023",
    file: "Diploma_Certificate",
    description:
      "Graduated with distinction and honored as the Best Student in the course. Mastered fundamental Business concepts and advanced Information Technology topics. Developed a robust foundation in programming, database management, data structures, networking, and web development, making me a well-rounded and highly capable professional ready to tackle complex challenges in the tech industry.",
    logo: Strathmore,
  },
  {
    title: "Front-end Development - HTML",
    organization: "Great Learning Academy",
    year: "2023",
    file: "HTML",
    description:
      "Equipped me with the foundational skills to create well-structured and accessible websites, setting a strong base for advanced front-end development.",
    logo: GreatLearning,
  },
  {
    title: "Front-end Development - CSS",
    organization: "Great Learning Academy",
    year: "2023",
    file: "CSS",
    description:
      "Learned CSS fundamentals to build attractive websites that work well on all devices.",
    logo: GreatLearning,
  },
  {
    title: "Introduction to JavaScript",
    organization: "Great Learning Academy",
    year: "2023",
    file: "JS",
    description:
      "Acquired foundational JavaScript skills, enabling dynamic and interactive web content. Developed a solid understanding of core concepts, setting the stage for advanced programming and application development.",
    logo: GreatLearning,
  },
  {
    title: "React.js Tutorial",
    organization: "Great Learning Academy",
    year: "2023",
    file: "REACT",
    description:
      "Gained foundational knowledge in building efficient and dynamic web applications by utilizing React's component-based architecture and state management.",
    logo: GreatLearning,
  },
  {
    title: "Web Development",
    organization: "SoloLearn",
    year: "2023",
    file: "Web_Development",
    description:
      "Completed a comprehensive Web Development course, further strengthening my skills in HTML, CSS, and JavaScript and boosting my confidence in solving real-world challenges.",
    logo: SoloLearn,
  },
] as const

const problemCaseStudy = {
  title: "Problem",
  icon: faExclamationTriangle,
  colors: [[255, 166, 158]],
}

const solutionCaseStudy = {
  title: "Solution",
  icon: faLightbulb,
  colors: [[221, 255, 247]],
}

const outcomeCaseStudy = {
  title: "Outcome",
  icon: faThumbsUp,
  colors: [[125, 211, 252]],
}

export const PROJECTS: Project[] = [
  {
    overview: {
      title: "Master Tracker",
      description:
        "A comprehensive and efficient task management solution that helps users organize, categorize, and track their daily activities.",
      image: MasterTracker,
      site: "https://master-tracker-ahmedlukman.vercel.app",
      source: "https://github.com/AhmedLukman/master-tracker",
      status: ProjectStatus.completed,
      startDate: new Date(2023, 10),
      endDate: new Date(2023, 10),
    },
    image: MasterTracker,
    deviceImage: DeviceMasterTracker,
    route: "/projects/master-tracker",
    slug: "master-tracker",
    features: [
      "Intuitive task creation and management with seamless user experience.",
      "Advanced categorization system for better task organization and prioritization.",
      "Real-time search functionality to quickly locate specific tasks.",
      "One-click copy to clipboard feature for easy task sharing and reference.",
      "Persistent data storage using localStorage ensuring data availability across sessions.",
      "Fully responsive design optimized for desktop, tablet, and mobile devices.",
      "Form validation and comprehensive error handling for data accuracy.",
      "Beautiful and modern UI with smooth interactions.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        title: "Problem",
        description:
          "I wanted to create a simple task management app to practice my development skills while making something useful. The goal was to build a straightforward tool that could help track daily tasks and activities.",
      },
      {
        ...solutionCaseStudy,
        title: "Solution",
        description:
          "I developed Master Tracker using React.js and TypeScript for robust performance and type safety, implemented a basic categorization feature, integrated localStorage for data persistence, and created a responsive design using Tailwind CSS for optimal user experience across all devices.",
      },
      {
        ...outcomeCaseStudy,
        title: "Outcome",
        description:
          "Through building the app, I was able to strengthen my skills in React.js, TypeScript, and Tailwind CSS while also learning how to implement localStorage for data persistence.",
      },
    ],
    techStack: [
      {
        name: "React.js",
        src: React,
      },
      {
        name: "TypeScript",
        src: TypeScript,
      },
      {
        name: "Tailwind CSS",
        src: Tailwind,
      },
      {
        name: "JavaScript",
        src: JavaScript,
      },
      {
        name: "HTML5",
        src: HTML5,
      },
      {
        name: "CSS",
        src: CSS,
      },
    ],
    metrics: [
      {
        name: "Performance",
        icon: faRocket,
        score: 100,
      },
      {
        name: "Accessibility",
        icon: faPersonCane,
        score: 100,
      },
      {
        name: "Best Practices",
        icon: faMedal,
        score: 100,
      },
      {
        name: "SEO",
        icon: faSearch,
        score: 100,
      },
    ],
  },
  {
    overview: {
      title: "Cinemania",
      description:
        "Discover and interact in a world of movies and TV shows at your fingertips! Dive into synopsis, rating and more in cinemania today!",
      image: CinemanieLaptop,
      site: "https://cinemania-ahmedlukman.vercel.app",
      status: ProjectStatus.pending,
      source: "https://github.com/AhmedLukman/Cinemania",
      startDate: new Date(2024, 6),
    },
    image: Cinemania,
    deviceImage: Cinemania,
    route: "/projects/cinemania",
    slug: "cinemania",
    features: [
      "Protects user data with cutting-edge encryption.",
      "Comprehensive details for each film and actor.",
      "Real-time feed showing popular, trending and upcoming films.",
      "Secure login and registration system to ensure data privacy.",
      "Optimized performance to provide a smooth user experience.",
      "Create and manage favorite collections for quick access.",
      "Advanced search with multiple filters for efficient content discovery.",
      "Vibrant community engagement through a review section",
      "Easy, engaging and interactive user interface with intuitive navigation.",
      "Fully responsive design providing a seamless experience.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Despite the abundance of streaming platforms like Netflix, users often struggle to find a centralized hub that provides detailed, real-time information on a wide array of films and celebrities across multiple sources in an efficient manner. These platforms usually just focus on streaming.",
      },
      {
        ...solutionCaseStudy,
        description:
          "To leverage the TMDB API to build a web app that offer an all-encompassing entertainment hub including detailed information on movies, TV shows, and celebrities. It provides users with a holistic view of the entertainment landscape that transcends the limitations of individual streaming platforms.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "Cinemania transforms the entertainment discovery experience. This comprehensive approach boosts user engagement and satisfaction, positioning Cinemania as the premier platform for entertainment enthusiasts to discover efficiently.",
      },
    ],
    techStack: [
      {
        name: "Next.js",
        src: Next,
      },
      {
        name: "React.js",
        src: React,
      },
      {
        name: "HTML5",
        src: HTML5,
      },
      {
        name: "CSS",
        src: CSS,
      },
      {
        name: "TypeScript",
        src: TypeScript,
      },
      {
        name: "Tailwind CSS",
        src: Tailwind,
      },
      {
        name: "Auth.js",
        src: AuthJS,
      },
      {
        name: "Prisma",
        src: Prisma,
      },
      {
        name: "PostgreSQL",
        src: PostgreSQL,
      },
    ],
    metrics: [
      {
        name: "Performance",
        icon: faRocket,
        score: 90,
      },
      {
        name: "Accessibility",
        icon: faPersonCane,
        score: 100,
      },
      {
        name: "Best Practices",
        icon: faMedal,
        score: 100,
      },
      {
        name: "SEO",
        icon: faSearch,
        score: 100,
      },
    ],
  },
  {
    overview: {
      title: "Portfolio",
      description:
        "My personal portfolio website where I showcase my background, diverse skills, achievements, innovative projects and more.",
      image: Portfolio,
      site: PORTFOLIO_SITE,
      source: "https://github.com/AhmedLukman/Portfolio",
      status: ProjectStatus.pending,
      startDate: new Date(2024, 6),
    },
    image: Portfolio,
    deviceImage: DevicePortfolio,
    route: "/projects/portfolio",
    slug: "portfolio",
    features: [
      "Responsive and seamless browsing experience across all devices.",
      "Optimized SEO implementation enhancing online presence.",
      "Intuitive and user-friendly navigation.",
      "Contact form functionality and social media links for easy reach.",
      "Clean, stylish, and visually appealing custom design.",
      "Professional typography and color schemes enhancing readability.",
      "Optimized images and assets for fast loading times.",
      "A personalized AI chat that quickly and efficiently taps into my knowledge to provide helpful answers. (soon)",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "I needed a platform to showcase my diverse technical skills, innovative projects, and professional achievements that highlights my expertise and attracts potential employers or clients.",
      },
      {
        ...solutionCaseStudy,
        description:
          "I designed and developed a sleek, modern portfolio website using Next.js for its powerful performance and SEO capabilities, React for a dynamic user interface, UI libraries for beautiful and interactive animations.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "The website effectively showcases my skills and projects in a professional and engaging manner. It has received commendations for its performance, intuitive design and smooth navigation, reflecting my attention to detail and commitment to user experience.",
      },
    ],
    techStack: [
      {
        name: "Next.js",
        src: Next,
      },
      {
        name: "React.js",
        src: React,
      },
      {
        name: "JavaScript",
        src: JavaScript,
      },
      {
        name: "HTML5",
        src: HTML5,
      },
      {
        name: "CSS",
        src: CSS,
      },
      {
        name: "Tailwind CSS",
        src: Tailwind,
      },
      {
        name: "TypeScript",
        src: TypeScript,
      },
      {
        name: "Zod",
        src: Zod,
      },
      {
        name: "AceternityUI",
        src: AceternityUI,
      },
      {
        name: "HeroUI",
        src: HeroUI,
      },
      {
        name: "Resend",
        src: Resend,
      },
    ],
    metrics: [
      {
        name: "Performance",
        icon: faRocket,
        score: 100,
      },
      {
        name: "Accessibility",
        icon: faPersonCane,
        score: 100,
      },
      {
        name: "Best Practices",
        icon: faMedal,
        score: 100,
      },
      {
        name: "SEO",
        icon: faSearch,
        score: 100,
      },
    ],
  },
  {
    overview: {
      title: "Digital Learning",
      description:
        "A website meant to inspire a revamp of @ilabafrica's official website. Utilizes Next.js and TypeScript.",
      image: DigitalLearning,
      site: "https://digital-learning-ahmedlukman.vercel.app",
      status: ProjectStatus.cancelled,
      source: "https://github.com/ahmedlukman/digital-learning",
      startDate: new Date(2024, 7),
      endDate: new Date(2024, 8),
    },
    image: DigitalLearning,
    deviceImage: DeviceDigitalLearning,
    route: "/projects/digital-learning",
    slug: "digital-learning",
    features: [
      "Clean and engaging user interface with smooth animations.",
      "Fully responsive design ensuring seamless experience across all devices.",
      "High-performance application built with Next.js for optimal speed.",
      "Beautiful visual presentations with quality imagery.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Traditional educational platforms often lack engaging interfaces and fail to leverage modern web technologies effectively. Many learning platforms struggle with accessibility, responsiveness, and user engagement, creating barriers to effective digital education delivery.",
      },
      {
        ...solutionCaseStudy,
        description:
          "To Develop a cutting-edge digital learning platform using Next.js and modern web technologies. The solution was to focus on creating an engaging, accessible, and responsive educational experience that leverages ICT innovation to enhance teaching and learning effectiveness.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "The Digital Learning Platform was meant to transform educational content delivery with its modern approach to web-based learning.",
      },
    ],
    techStack: [
      {
        name: "Next.js",
        src: Next,
      },
      {
        name: "React.js",
        src: React,
      },
      {
        name: "TypeScript",
        src: TypeScript,
      },
      {
        name: "Tailwind CSS",
        src: Tailwind,
      },
      {
        name: "HTML5",
        src: HTML5,
      },
      {
        name: "CSS3",
        src: CSS,
      },
    ],
    metrics: [
      {
        name: "Performance",
        icon: faRocket,
        score: 100,
      },
      {
        name: "Accessibility",
        icon: faPersonCane,
        score: 89,
      },
      {
        name: "Best Practices",
        icon: faMedal,
        score: 78,
      },
      {
        name: "SEO",
        icon: faSearch,
        score: 82,
      },
    ],
  },
  {
    overview: {
      title: "World Visualizer",
      description:
        "An interactive 3D globe visualization tool for exploring world statistics through a beautiful and engaging experience.",
      image: WorldVisualizer,
      site: "https://world-visualizer-ahmedlukman.vercel.app",
      status: ProjectStatus.cancelled,
      source: "https://github.com/ahmedlukman/world-visualizer",
      startDate: new Date(2024, 7),
      endDate: new Date(2024, 8),
    },
    image: WorldVisualizer,
    deviceImage: DeviceWorldVisualizer,
    route: "/projects/world-visualizer",
    slug: "world-visualizer",
    features: [
      "Interactive and smooth auto-rotating 3D globe with realistic Earth textures and night sky background",
      "Click-to-explore functionality revealing detailed country information",
      "Comprehensive country data including demographics, economy, and geography",
      "Responsive modal interface with organized information cards",
      "Color-coded visualization based on data metrics and statistics",
      "Modern UI with NextUI components and Tailwind CSS styling",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Traditional world maps and static visualizations fail to engage users in exploring global data effectively. Educational institutions and researchers need an interactive platform that makes world statistics and country information more accessible and engaging for learning purposes.",
      },
      {
        ...solutionCaseStudy,
        description:
          "Developed an interactive 3D globe using React Globe.gl and Three.js that transforms static world data into an immersive experience. The application provides detailed country information through modal interfaces, making global statistics more accessible and engaging.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "World Visualizer was meant to revolutionize how users interact with global data by providing an intuitive, visually appealing platform for exploring world statistics.",
      },
    ],
    techStack: [
      {
        name: "React.js",
        src: React,
      },
      {
        name: "TypeScript",
        src: TypeScript,
      },
      {
        name: "Vite",
        src: Vite,
      },
      {
        name: "HeroUI",
        src: HeroUI,
      },
      {
        name: "Tailwind CSS",
        src: Tailwind,
      },
      {
        name: "Framer Motion",
        src: Framer,
      },
      {
        name: "Three.js",
        src: ThreeJS,
      },
    ],
    metrics: [
      {
        name: "Performance",
        icon: faRocket,
        score: 70,
      },
      {
        name: "Accessibility",
        icon: faPersonCane,
        score: 100,
      },
      {
        name: "Best Practices",
        icon: faMedal,
        score: 100,
      },
      {
        name: "SEO",
        icon: faSearch,
        score: 90,
      },
    ],
  },
  {
    overview: {
      title: "Next Event",
      description:
        "A platform meant to discover and manage events in a user-friendly and intuitive manner.",
      image: NextEvent,
      site: "https://next-event-ahmedlukman.vercel.app",
      source: "https://github.com/AhmedLukman/next-event",
      status: ProjectStatus.cancelled,
      startDate: new Date(2024, 4),
      endDate: new Date(2024, 5),
    },
    image: NextEvent,
    deviceImage: DeviceNextEvent,
    route: "/projects/next-events",
    slug: "next-events",
    features: [
      "Browse trending, physical, and virtual events.",
      "Detailed event pages with information like date, time, location, and price.",
      "Responsive design for seamless browsing on all devices.",
      "Event filtering and pagination.",
      "Integration with NextUI components for a modern UI.",
      "Image sliders for event display.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        title: "Problem",
        description:
          "There was a need for a modern, user-friendly platform to list and manage various types of events, making it easy for users to discover and attend them.",
      },
      {
        ...solutionCaseStudy,
        title: "Solution",
        description:
          "Developed a Next.js application leveraging React components, NextUI for styling, and react-slick for carousels, providing a dynamic and interactive event browsing experience.",
      },
      {
        ...outcomeCaseStudy,
        title: "Outcome",
        description:
          "This platform was meant tp provide a centralized hub for event discovery, enhancing user engagement through its intuitive design and comprehensive event details.",
      },
    ],
    techStack: [
      {
        name: "Next.js",
        src: Next,
      },
      {
        name: "React.js",
        src: React,
      },
      {
        name: "TypeScript",
        src: TypeScript,
      },
      {
        name: "Tailwind CSS",
        src: Tailwind,
      },
      {
        name: "HeroUI",
        src: HeroUI,
      },
    ],
    metrics: [
      {
        name: "Performance",
        icon: faRocket,
        score: 95,
      },
      {
        name: "Accessibility",
        icon: faPersonCane,
        score: 95,
      },
      {
        name: "Best Practices",
        icon: faMedal,
        score: 96,
      },
      {
        name: "SEO",
        icon: faSearch,
        score: 100,
      },
    ],
  },
]

type Recognition = {
  title: string
  url: string
}

export const RECOGNITIONS: Recognition[] = [
  {
    title:
      "14-year old Aga Khan Student develops an App that enables you to vote with your phone - Aga Khan Schools",
    url: "https://www.agakhanschools.org/Kenya/Kenya/Article/1093",
  },
  {
    title:
      "14 year old Kenyan boy develops app that allows you to vote on your phone | Pulselive Kenya",
    url: "https://www.pulselive.co.ke/articles/news/local/ahmed-lukman-14-year-old-kenyan-boy-develops-app-that-allows-you-to-vote-on-your-2024081609353682721",
  },
  {
    title: "AHMED LUKMAN Pitch on KCB Lions Den SN4 EP9",
    url: "https://youtu.be/KQzCSG4CtaU",
  },
  {
    title: "2019 Winners - Young Scientists Kenya",
    url: "https://ysk.co.ke/2019-winners/",
  },
  {
    title: "President Uhuru Kenyatta recognizes Ahmed Lukman Innovation",
    url: "https://youtu.be/K2TuzqGanqw?t=11",
  },
]
