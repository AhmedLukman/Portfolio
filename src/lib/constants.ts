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

export const WEB_QUALITIES = [
  "Performant",
  "Responsive",
  "Aesthetic",
  "Functional",
  "Accessible",
];

export const TECH_STACK = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    alt: "HTML5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    alt: "CSS3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
    alt: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "React Js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    alt: "Next Js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
  },
  {
    src: "/assets/images/authjs.svg",
    alt: "Auth Js",
  },
  {
    src: "/assets/images/zod.svg",
    alt: "Zod",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    alt: "Tailwind CSS",
  },
  {
    src: "/assets/images/nextui.png",
    alt: "Next UI",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    alt: "Figma",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    alt: "GitHub",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    alt: "Prisma",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    alt: "Supabase",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    alt: "PostgreSQL",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    alt: "MongoDB",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    alt: "VSCode",
  },
  {
    src: "https://img.icons8.com/ios/100/ffffff/chatgpt.png",
    alt: "Chatgpt",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    alt: "Vercel",
  },
];

export enum Status {
  Completed = "Completed",
  Pending = "Pending",
  Cancelled = "Cancelled",
}

export const PROJECTS = [
  {
    title: "Cinemania",
    description:
      "Discover and interact in a world of movies and TV shows at your fingertips! Dive into synopsis, rating and more in cinemania today!",
    image: "/assets/images/cinemania.png",
    route: "/projects/cinemania",
    site: "https://cinemania-ahmedlukman.vercel.app/movie",
    source: "https://github.com/AhmedLukman/Cinemania",
    status: Status.Completed,
    slug: "cinemania",
    techStack: [
      {
        alt: "Next Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        alt: "Auth Js",
        src: "/assets/images/authjs.svg",
      },
      {
        alt: "Prisma",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      },
      {
        alt: "PostgreSQL",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "90",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "100",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "100",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "100",
      },
    ],
  },
  {
    title: "Portfolio",
    description:
      "My personal portfolio website, where I showcase my diverse skills, innovative projects, and my detailed CV.",
    image: "/assets/images/portfolio.png",
    route: "/projects/portfolio",
    site: "https://portfolio-ahmedlukman.vercel.app",
    source: "https://github.com/AhmedLukman/Portfolio",
    status: Status.Pending,
    slug: "portfolio",
    techStack: [
      {
        alt: "Next Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "100",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "100",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "100",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "100",
      },
    ],
  },
  {
    title: "Next Auth Prisma Training",
    description:
      "I explored and mastered the use of Next Auth v5 for authentication, together with prisma as an ORM to efficiently authenticate and store data in an online database.",
    image: "/assets/images/napt.png",
    route: "/projects/next-auth-prisma-training",
    site: "https://next-auth-prisma-training.vercel.app",
    source: "https://github.com/AhmedLukman/next_auth_prisma_training",
    status: Status.Completed,
    slug: "next-auth-prisma-training",
    techStack: [
      {
        alt: "Next Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        alt: "Auth Js",
        src: "/assets/images/authjs.svg",
      },
      {
        alt: "Supabase",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      },
      {
        alt: "Prisma",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "100",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "100",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "100",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "100",
      },
    ],
  },
  {
    title: "Sample 1",
    description:
      "I explored and mastered the use of Next Auth v5 for authentication, together with prisma as an ORM to efficiently authenticate and store data in an online database.",
    image: "/assets/images/portfolio.png",
    route: "/projects/next-auth-prisma-training",
    site: "https://next-auth-prisma-training.vercel.app",
    source: "https://github.com/AhmedLukman/next_auth_prisma_training",
    status: Status.Completed,
    slug: "next-auth-prisma-training",
    techStack: [
      {
        alt: "Next Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        alt: "Auth Js",
        src: "/assets/images/authjs.svg",
      },
      {
        alt: "Supabase",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      },
      {
        alt: "Prisma",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "100",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "100",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "100",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "100",
      },
    ],
  },
  {
    title: "Sample 2",
    description:
      "I explored and mastered the use of Next Auth v5 for authentication, together with prisma as an ORM to efficiently authenticate and store data in an online database.",
    image: "/assets/images/portfolio.png",
    route: "/projects/next-auth-prisma-training",
    site: "https://next-auth-prisma-training.vercel.app",
    source: "https://github.com/AhmedLukman/next_auth_prisma_training",
    status: Status.Completed,
    slug: "next-auth-prisma-training",
    techStack: [
      {
        alt: "Next Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        alt: "Auth Js",
        src: "/assets/images/authjs.svg",
      },
      {
        alt: "Supabase",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      },
      {
        alt: "Prisma",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "100",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "100",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "100",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "100",
      },
    ],
  },
  {
    title: "Sample 3",
    description:
      "I explored and mastered the use of Next Auth v5 for authentication, together with prisma as an ORM to efficiently authenticate and store data in an online database.",
    image: "/assets/images/cinemania.png",
    route: "/projects/next-auth-prisma-training",
    site: "https://next-auth-prisma-training.vercel.app",
    source: "https://github.com/AhmedLukman/next_auth_prisma_training",
    status: Status.Completed,
    slug: "next-auth-prisma-training",
    techStack: [
      {
        alt: "Next Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        alt: "Auth Js",
        src: "/assets/images/authjs.svg",
      },
      {
        alt: "Supabase",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      },
      {
        alt: "Prisma",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "100",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "100",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "100",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "100",
      },
    ],
  },
  {
    title: "Sample 4",
    description:
      "I explored and mastered the use of Next Auth v5 for authentication, together with prisma as an ORM to efficiently authenticate and store data in an online database.",
    image: "/assets/images/portfolio.png",
    route: "/projects/next-auth-prisma-training",
    site: "https://next-auth-prisma-training.vercel.app",
    source: "https://github.com/AhmedLukman/next_auth_prisma_training",
    status: Status.Completed,
    slug: "next-auth-prisma-training",
    techStack: [
      {
        alt: "Next Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        alt: "Auth Js",
        src: "/assets/images/authjs.svg",
      },
      {
        alt: "Supabase",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      },
      {
        alt: "Prisma",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "100",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "100",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "100",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "100",
      },
    ],
  },
  {
    title: "Sample 5",
    description:
      "I explored and mastered the use of Next Auth v5 for authentication, together with prisma as an ORM to efficiently authenticate and store data in an online database.",
    image: "/assets/images/napt.png",
    route: "/projects/next-auth-prisma-training",
    site: "https://next-auth-prisma-training.vercel.app",
    source: "https://github.com/AhmedLukman/next_auth_prisma_training",
    status: Status.Completed,
    slug: "next-auth-prisma-training",
    techStack: [
      {
        alt: "Next Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        alt: "Auth Js",
        src: "/assets/images/authjs.svg",
      },
      {
        alt: "Supabase",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      },
      {
        alt: "Prisma",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "100",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "100",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "100",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "100",
      },
    ],
  },
  {
    title: "Sample 6",
    description:
      "I explored and mastered the use of Next Auth v5 for authentication, together with prisma as an ORM to efficiently authenticate and store data in an online database.",
    image: "/assets/images/portfolio.png",
    route: "/projects/next-auth-prisma-training",
    site: "https://next-auth-prisma-training.vercel.app",
    source: "https://github.com/AhmedLukman/next_auth_prisma_training",
    status: Status.Completed,
    slug: "next-auth-prisma-training",
    techStack: [
      {
        alt: "Next Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        alt: "Auth Js",
        src: "/assets/images/authjs.svg",
      },
      {
        alt: "Supabase",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      },
      {
        alt: "Prisma",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "100",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "100",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "100",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "100",
      },
    ],
  },
];
