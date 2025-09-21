import AuthJS from "public/assets/images/backend/authjs.svg"
import Elixir from "public/assets/images/backend/elixir.svg"
import PostgreSQL from "public/assets/images/backend/postgresql.svg"
import Prisma from "public/assets/images/backend/prisma.svg"
import Resend from "public/assets/images/backend/resend.svg"
import Supabase from "public/assets/images/backend/supabase.svg"
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
import { AnimatedTooltip } from "../../ui/AnimatedTooltip"
import SectionHeader from "../../wrappers/SectionHeader"
import SectionWrapper from "../../wrappers/SectionWrapper"

const FRONT_END_TECHS = [
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

const BACKEND_TECHS = [
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

const DEV_TOOLS = [
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

const TechAndTools = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Technologies & Tools</SectionHeader>
      <div className="flex flex-col gap-6">
        <h3 className="-mb-2 text-lg lg:text-xl">Front-end</h3>
        <AnimatedTooltip items={FRONT_END_TECHS} />
        <h3 className="-mb-2 text-lg lg:text-xl">Back-end</h3>
        <AnimatedTooltip items={BACKEND_TECHS} />
        <h3 className="-mb-2 text-lg lg:text-xl">Dev Tools</h3>
        <AnimatedTooltip items={DEV_TOOLS} />
      </div>
    </SectionWrapper>
  )
}

export default TechAndTools
