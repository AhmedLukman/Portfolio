import {
  faExclamationTriangle,
  faLightbulb,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { JobType, Status } from "./constants";
import { Project } from "./types";

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
export const PROJECTS: Project[] = [
  {
    overview: {
      title: "Cinemania",
      description:
        "Discover and interact in a world of movies and TV shows at your fingertips! Dive into synopsis, rating and more in cinemania today!",
      image: "/assets/images/cinemania-laptop.png",
      site: "https://cinemania-ahmedlukman.vercel.app",
      status: Status.Pending,
      source: "https://github.com/AhmedLukman/Cinemania",
      startDate: "2024-06",
    },
    image: "/assets/images/cinemania.png",
    route: "/projects/cinemania",
    slug: "cinemania",
    features: [
      "Protects user data with cutting-edge encryption and security protocols.",
      "Comprehensive details for each movie, TV show, and person, including cast, crew, trailers, reviews, and ratings.",
      "A real-time feed of trending, popular and upcoming films, ensuring users are always up-to-date with the latest content.",
      "Secure login and registration with options for social media authentication to streamline the sign-up process.",
      "Optimized performance to ensure quick loading times for all pages and content, providing a smooth user experience.",
      "Allow users to create and manage favorite collections for quick access.",
      "Advanced search functionality with multiple filters (genre, year, rating, etc.) to help users find exactly what they’re looking for.",
      "A platform for users to leave reviews, fostering a community of movie and TV enthusiasts.",
      "Easy, engaging and interactive user interface.",
      "A fully responsive design that provides a seamless experience across desktops, tablets, and mobile devices.",
      "Accessible and adheres to the best practices of modern web development.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Despite the abundance of streaming platforms like Netflix, users often struggle to find a centralized hub that provides detailed, real-time information on a wide array of films and celebrities across multiple sources in an efficient manner. These platforms usually focus on streaming, leaving a gap for users who want comprehensive details regarding the industry and an interactive community experience that goes beyond streaming alone.",
      },
      {
        ...solutionCaseStudy,
        description:
          "Leveraging the TMDB API to build a web app that offer an all-encompassing entertainment hub including detailed information on movies, TV shows, and celebrities. It provides users with a holistic view of the entertainment landscape that transcends the limitations of individual streaming platforms.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "Cinemania revolutionizes the way users discover and interact with entertainment content by providing a unique, all-in-one entertainment hub. This comprehensive approach boosts user engagement and satisfaction, positioning Cinemania as the premier platform for entertainment enthusiasts. Users experience reduced search times and increased satisfaction, making content discovery more efficient and enjoyable.",
      },
    ],
    techStack: [
      {
        alt: "Next Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "React Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        alt: "HTML5",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        alt: "CSS3",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
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
    overview: {
      title: "Portfolio",
      description:
        "My personal portfolio website where I showcase who I am, my diverse skills, innovative projects and more. Dive into it to see how I transform ideas into digital masterpieces!",
      image: "/assets/images/portfolio.png",
      site: "https://portfolio-ahmedlukman.vercel.app",
      source: "https://github.com/AhmedLukman/Portfolio",
      status: Status.Completed,
      startDate: "2024-06",
      endDate: "2024-07",
    },
    image: "/assets/images/portfolio.png",
    route: "/projects/portfolio",
    slug: "portfolio",
    features: [
      "Enjoy a responsive and seamless browsing experience across all devices.",
      "Top-notch SEO practices boosting visibility thus easy discovery in search engines.",
      "Effortlessly find what you are looking for with intuitive and user-friendly navigation.",
      "Dedicated contact form functionality and social media links for easy reach.",
      "Clean, stylish, and visually appealing custom design.",
      "Accessible and adheres to the best practices of modern web development.",
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
        alt: "Next Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "React Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        alt: "HTML5",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        alt: "CSS3",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
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
        score: "95",
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
    overview: {
      title: "Digital Learning",
      description:
        "A website meant to inspire a revamp of @ilabafrica's official website. Utilizes Next JS and TypeScript.",
      site: "https://digital-learning-ahmedlukman.vercel.app/",
      source: "https://github.com/AhmedLukman/digital-learning",
      image: "/assets/images/digitalLearning-laptop.png",
      status: Status.Cancelled,
      startDate: "2023-03",
      endDate: "2023-04",
    },
    image: "/assets/images/digitalLearning.png",
    route: "/projects/digital-learning",
    slug: "digital-learning",
    features: [
      "Ensures a responsive and seamless user experience across all devices.",
      "Offers an easy-to-navigate interface for enhanced user engagement.",
      "Fast loading time providing a smooth user experience.",
      "Accessible and adheres to the best practices of modern web development.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "@iLabAfrica's Digital Learning website lacked modern features and a user-friendly interface, resulting in a suboptimal user experience and engagement.",
      },
      {
        ...solutionCaseStudy,
        description:
          "Develop a revamped website using modern technologies, incorporating modern design principles to create an intuitive and engaging user experience and establish a more professional online presence.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "Although the initial design did not meet all the requirements due to specific preferences for 3D effects, the project showcased my commitment to learning and improving my skills, setting the stage for future projects.",
      },
    ],
    techStack: [
      {
        alt: "Next Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "React Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        alt: "HTML5",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        alt: "CSS3",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
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
        score: "89",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "96",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "82",
      },
    ],
  },
  {
    overview: {
      title: "Next Auth Prisma Training",
      description:
        "I explored and mastered the use of Next Auth v5 for authentication, together with prisma as an ORM to efficiently authenticate and store data in an online database.",
      image: "/assets/images/napt-laptop.png",
      site: "https://next-auth-prisma-training.vercel.app",
      source: "https://github.com/AhmedLukman/next_auth_prisma_training",
      status: Status.Completed,
      startDate: "2024-05",
      endDate: "2024-06",
    },
    image: "/assets/images/napt.png",
    route: "/projects/next-auth-prisma-training",
    slug: "next-auth-prisma-training",
    features: [
      "Protects user data with cutting-edge encryption and security protocols.",
      "Seamlessly authenticate users via popular platforms like Google and Github.",
      "Ensures a responsive and seamless user experience across all devices.",
      "Offers an easy-to-navigate interface for enhanced user engagement.",
      "Delivers instant feedback and updates ensuring users are highly informed.",
      "Accessible and adheres to the best practices of modern web development.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "The need to know how to implement secure user authentication using cutting-edge technologies for web applications.",
      },
      {
        ...solutionCaseStudy,
        description:
          "Implemented a robust authentication system that streamlined user login and registration processes. Integrating Prisma ensured efficient data handling, allowing seamless storage and retrieval of user authentication data in an online database. ",
      },
      {
        ...outcomeCaseStudy,
        description:
          "Mastered Next Auth v5 and Prisma which empowered me to develop reliable, secure and efficient authentication workflows for web applications, paving the way for future projects requiring similar functionalities.",
      },
    ],
    techStack: [
      {
        alt: "Next Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "React Js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        alt: "HTML5",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        alt: "CSS3",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
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

export const MASTERY = [
  {
    title: "Front-End",
    description:
      "Expert in creating beautiful, high-performance, responsive, and user-friendly web applications.",
    src: "/assets/images/frontend.jpg",
  },
  {
    title: "Back-End",
    description:
      "Skilled in developing robust, scalable, and secure server-side applications.",
    src: "/assets/images/backend.jpg",
  },
  {
    title: "UI/UX",
    description:
      "Focused on creating intuitive, engaging, and visually captivating user interfaces that enhance user experience.",
    src: "/assets/images/design.jpg",
  },
];

export const EXPERIENCE = [
  {
    title: "Full Stack Developer",
    type: JobType.Internship,
    description:
      "Front End Web and Mobile Developer, collaborated adeptly with UI/UX designers and engineers to craft clean, high-performance full-stack web solutions. Key contributions to projects like Adapta, SSAMS, Digital Learning, and Next Events. Recognized as the Lead Intern, entrusted with independent design responsibilities due to a trusted sense of aesthetic.",
    company: "@iLabAfrica",
    startDate: "2023-03",
    endDate: "2023-08",
  },
  {
    title: "Next JS Developer",
    type: JobType.Internship,
    description:
      "Developed aesthetically pleasing UI components for the web, integrating dynamic features such as drag and drop, and seamlessly incorporated APIs using Next JS and Express. Recognized for achieving high performance and receiving praise for design excellence.",
    company: "Trinetium DMCC",
    startDate: "2022-8",
    endDate: "2022-10",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Diploma in Business Information Technology",
    organization: "Strathmore Institute",
    date: "2023",
    file: "Diploma_Certificate",
    description:
      "Graduated with distinction and honored as the Best Student in the course. Mastered fundamental Business concepts and advanced Information Technology topics. Developed a robust foundation in programming, database management, data structures, networking, and web development, making me a well-rounded and highly capable professional ready to tackle complex challenges in the tech industry.",
  },
  {
    title: "Front End Developer - HTML",
    organization: "Great Learning Academy",
    date: "2023",
    file: "HTML",
    description:
      "Equipped me with the foundational skills to create well-structured and accessible websites, setting a strong base for advanced front-end development.",
  },
  {
    title: "Front End Developer - CSS",
    organization: "Great Learning Academy",
    date: "2023",
    file: "CSS",
    description:
      "Specialized in CSS to create visually appealing and responsive web designs. Mastered modern styling techniques, ensuring sleek and professional website aesthetics.",
  },
  {
    title: "Introduction to JavaScript",
    organization: "Great Learning Academy",
    date: "2023",
    file: "JS",
    description:
      "Acquired foundational JavaScript skills, enabling dynamic and interactive web content. Developed a solid understanding of core concepts, setting the stage for advanced programming and application development.",
  },
  {
    title: "React JS Tutorial",
    organization: "Great Learning Academy",
    date: "2023",
    file: "REACT",
    description:
      "Gained expertise in building efficient and dynamic web applications by utilizing React's component-based architecture and state management.",
  },
  {
    title: "Web Development",
    organization: "SoloLearn",
    date: "2023",
    file: "Web_Development",
    description:
      "Completed a comprehensive web development course on SoloLearn, mastering essential skills in HTML, CSS, and JavaScript. Developed proficiency in front-end, ready to tackle real-world web projects with confidence.",
  },
];
