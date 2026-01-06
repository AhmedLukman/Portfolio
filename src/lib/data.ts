import {
  faExclamationTriangle,
  faLightbulb,
  faMedal,
  faPersonCane,
  faRocket,
  faSearch,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons"
import AuthJS from "public/assets/images/backend/authjs.svg"
import Elixir from "public/assets/images/backend/elixir.svg"
import PostgreSQL from "public/assets/images/backend/postgresql.svg"
import Prisma from "public/assets/images/backend/prisma.svg"
import Resend from "public/assets/images/backend/resend.svg"
import Supabase from "public/assets/images/backend/supabase.svg"
import CinemanieLaptop from "public/assets/images/cinemania-laptop.png"
import Cinemania from "public/assets/images/cinemania.png"
import DeviceDigitalLearning from "public/assets/images/device-digitallearning.png"
import DeviceMasterTracker from "public/assets/images/device-mastertracker.png"
import DeviceNextEvent from "public/assets/images/device-nextevent.png"
import DevicePortfolio from "public/assets/images/device-portfolio.png"
import DeviceWorldVisualizer from "public/assets/images/device-worldvisualizer.png"
import ChatGPT from "public/assets/images/devtools/chatgpt.svg"
import Claude from "public/assets/images/devtools/claude.svg"
import ESLint from "public/assets/images/devtools/eslint.svg"
import Git from "public/assets/images/devtools/git.svg"
import GitHub from "public/assets/images/devtools/github.svg"
import NPM from "public/assets/images/devtools/npm.svg"
import Prettier from "public/assets/images/devtools/prettier.svg"
import Vercel from "public/assets/images/devtools/vercel.svg"
import Vite from "public/assets/images/devtools/vite.svg"
import DigitalLearning from "public/assets/images/digitallearning.png"
import Framer from "public/assets/images/framer.svg"
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
import Kelvin from "public/assets/images/testimonials/kelvin.jpg"
import ThomsonReuters from "public/assets/images/thomsonreuters.png"
import ThreeJS from "public/assets/images/threejs.svg"
import Trae from "public/assets/images/trae.svg"
import Trinetium from "public/assets/images/trinetium.jpeg"
import WorldVisualizer from "public/assets/images/worldvisualizer.png"
import Yoonka from "public/assets/images/yoonka.jpeg"
import { PORTFOLIO_SITE, ProjectStatus } from "./constants"
import { Project } from "./types"

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
]

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

export const RECOGNITIONS = [
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
  {
    name: "Elixir",
    src: Elixir,
  },
]

export const DEV_TOOLS = [
  {
    name: "TRAE",
    src: Trae,
  },
  {
    name: "ChatGPT",
    src: ChatGPT,
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
    name: "Kelvin Ndambuki",
    designation: "ML Engineer at Jacaranda Health",
    quote:
      "From the very beginning, Ahmed stood out for his exceptional curiosity, discipline, and deep understanding of programming and algorithms. His specialization in full-stack software development has been nothing short of impressive — his current work reflects the same dedication, clarity, and problem-solving mindset that made him exceptional from the start.",
    src: Kelvin,
  },
]

export const EXPERIENCE = [
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
