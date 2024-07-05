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
