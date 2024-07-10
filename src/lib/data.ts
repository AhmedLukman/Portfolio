import {
  faExclamationTriangle,
  faLightbulb,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { Status } from "./constants";

export const WEB_QUALITIES = [
  "Performant",
  "Responsive",
  "Aesthetic",
  "Functional",
  "Accessible",
  "Semantic",
];

export const TECH_AND_TOOLS = [
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
    src: "/assets/images/aceternity.webp",
    alt: "Aceternity UI",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    alt: "Figma",
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
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg",
    alt: "ESLint",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    alt: "NPM",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    alt: "Git",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    alt: "GitHub",
  },
];

const problemCaseStudy = {
  title: "Problem",
  icon: faExclamationTriangle,
  colors: [
    [255, 166, 158],
    [221, 255, 247],
  ],
  bgColor: "bg-pink-900",
};

const solutionCaseStudy = {
  title: "Solution",
  icon: faLightbulb,
  bgColor: "bg-sky-600",
  colors: [[125, 211, 252]],
};

const outcomeCaseStudy = {
  title: "Outcome",
  icon: faThumbsUp,
  colors: [[125, 211, 252]],
  bgColor: "bg-emerald-800",
};

export const PROJECTS = [
  {
    title: "Cinemania",
    description:
      "Discover and interact in a world of movies and TV shows at your fingertips! Dive into synopsis, rating and more in cinemania today!",
    image: "/assets/images/cinemania.png",
    route: "/projects/cinemania",
    site: "https://cinemania-ahmedlukman.vercel.app",
    source: "https://github.com/AhmedLukman/Cinemania",
    status: Status.Pending,
    slug: "cinemania",
    features: [
      "Protects user data with cutting-edge encryption and security protocols.",
      "Ensures a responsive and seamless user experience across all devices.",
      "Offers an easy-to-navigate interface for enhanced user engagement",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Small retail businesses often struggle with managing their inventory efficiently, leading to stockouts or overstock situations. The existing manual inventory processes are time-consuming and prone to errors, resulting in lost sales and increased operational costs.",
      },
      {
        ...solutionCaseStudy,
        description:
          "Developed an automated inventory management system that integrates with the point-of-sale system to provide real-time inventory tracking and analytics.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "Reduced stockouts by 30% and overstock by 20%, saving an average of 15 hours per month in manual inventory management tasks.",
      },
    ],
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
    features: [
      "Protects user data with cutting-edge encryption and security protocols.",
      "Ensures a responsive and seamless user experience across all devices.",
      "Offers an easy-to-navigate interface for enhanced user engagement",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Small retail businesses often struggle with managing their inventory efficiently, leading to stockouts or overstock situations. The existing manual inventory processes are time-consuming and prone to errors, resulting in lost sales and increased operational costs.",
      },
      {
        ...solutionCaseStudy,
        description:
          "Developed an automated inventory management system that integrates with the point-of-sale system to provide real-time inventory tracking and analytics.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "Reduced stockouts by 30% and overstock by 20%, saving an average of 15 hours per month in manual inventory management tasks.",
      },
    ],
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
        src: "/assets/images/aceternity.webp",
        alt: "Aceternity UI",
      },
      {
        src: "/assets/images/nextui.png",
        alt: "Next UI",
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
    features: [
      "Protects user data with cutting-edge encryption and security protocols.",
      "Ensures a responsive and seamless user experience across all devices.",
      "Offers an easy-to-navigate interface for enhanced user engagement",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Small retail businesses often struggle with managing their inventory efficiently, leading to stockouts or overstock situations. The existing manual inventory processes are time-consuming and prone to errors, resulting in lost sales and increased operational costs.",
      },
      {
        ...solutionCaseStudy,
        description:
          "Developed an automated inventory management system that integrates with the point-of-sale system to provide real-time inventory tracking and analytics.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "Reduced stockouts by 30% and overstock by 20%, saving an average of 15 hours per month in manual inventory management tasks.",
      },
    ],
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
    features: [
      "Protects user data with cutting-edge encryption and security protocols.",
      "Ensures a responsive and seamless user experience across all devices.",
      "Offers an easy-to-navigate interface for enhanced user engagement",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Small retail businesses often struggle with managing their inventory efficiently, leading to stockouts or overstock situations. The existing manual inventory processes are time-consuming and prone to errors, resulting in lost sales and increased operational costs.",
      },
      {
        ...solutionCaseStudy,
        description:
          "Developed an automated inventory management system that integrates with the point-of-sale system to provide real-time inventory tracking and analytics.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "Reduced stockouts by 30% and overstock by 20%, saving an average of 15 hours per month in manual inventory management tasks.",
      },
    ],
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
    features: [
      "Protects user data with cutting-edge encryption and security protocols.",
      "Ensures a responsive and seamless user experience across all devices.",
      "Offers an easy-to-navigate interface for enhanced user engagement",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Small retail businesses often struggle with managing their inventory efficiently, leading to stockouts or overstock situations. The existing manual inventory processes are time-consuming and prone to errors, resulting in lost sales and increased operational costs.",
      },
      {
        ...solutionCaseStudy,
        description:
          "Developed an automated inventory management system that integrates with the point-of-sale system to provide real-time inventory tracking and analytics.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "Reduced stockouts by 30% and overstock by 20%, saving an average of 15 hours per month in manual inventory management tasks.",
      },
    ],
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
    features: [
      "Protects user data with cutting-edge encryption and security protocols.",
      "Ensures a responsive and seamless user experience across all devices.",
      "Offers an easy-to-navigate interface for enhanced user engagement",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Small retail businesses often struggle with managing their inventory efficiently, leading to stockouts or overstock situations. The existing manual inventory processes are time-consuming and prone to errors, resulting in lost sales and increased operational costs.",
      },
      {
        ...solutionCaseStudy,
        description:
          "Developed an automated inventory management system that integrates with the point-of-sale system to provide real-time inventory tracking and analytics.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "Reduced stockouts by 30% and overstock by 20%, saving an average of 15 hours per month in manual inventory management tasks.",
      },
    ],
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
    features: [
      "Protects user data with cutting-edge encryption and security protocols.",
      "Ensures a responsive and seamless user experience across all devices.",
      "Offers an easy-to-navigate interface for enhanced user engagement",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Small retail businesses often struggle with managing their inventory efficiently, leading to stockouts or overstock situations. The existing manual inventory processes are time-consuming and prone to errors, resulting in lost sales and increased operational costs.",
      },
      {
        ...solutionCaseStudy,
        description:
          "Developed an automated inventory management system that integrates with the point-of-sale system to provide real-time inventory tracking and analytics.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "Reduced stockouts by 30% and overstock by 20%, saving an average of 15 hours per month in manual inventory management tasks.",
      },
    ],
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
    features: [
      "Protects user data with cutting-edge encryption and security protocols.",
      "Ensures a responsive and seamless user experience across all devices.",
      "Offers an easy-to-navigate interface for enhanced user engagement",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Small retail businesses often struggle with managing their inventory efficiently, leading to stockouts or overstock situations. The existing manual inventory processes are time-consuming and prone to errors, resulting in lost sales and increased operational costs.",
      },
      {
        ...solutionCaseStudy,
        description:
          "Developed an automated inventory management system that integrates with the point-of-sale system to provide real-time inventory tracking and analytics.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "Reduced stockouts by 30% and overstock by 20%, saving an average of 15 hours per month in manual inventory management tasks.",
      },
    ],
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
    features: [
      "Protects user data with cutting-edge encryption and security protocols.",
      "Ensures a responsive and seamless user experience across all devices.",
      "Offers an easy-to-navigate interface for enhanced user engagement",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Small retail businesses often struggle with managing their inventory efficiently, leading to stockouts or overstock situations. The existing manual inventory processes are time-consuming and prone to errors, resulting in lost sales and increased operational costs.",
      },
      {
        ...solutionCaseStudy,
        description:
          "Developed an automated inventory management system that integrates with the point-of-sale system to provide real-time inventory tracking and analytics.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "Reduced stockouts by 30% and overstock by 20%, saving an average of 15 hours per month in manual inventory management tasks.",
      },
    ],
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

export const TESTIMONIALS = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age. It was the best of times, it was the worst of times, it was the age of wisdom, it was the age.",
    name: "Charles Dickens",
    title: "Google CEO",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms.",
    name: "William Shakespeare",
    title: "Software Developer",
  },
  {
    quote: "I am the master of my fate: I am the captain of my soul.",
    name: "William Ernest Henley",
    title: "Software Engineer",
  },
];

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
};
const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
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
];