import React from "react";
import Image from "next/image";
import { FlipWords } from "@/components/ui/FlipWords";
import GradientBorder from "@/components/ui/GradientBorder";
import { TECH_STACK, WEB_QUALITIES } from "@/lib/constants";
import { Tooltip } from "@nextui-org/react";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl flex h-screen py-20 flex-col">
      <section>
        <h1 className="text-3xl text-slate-200 text-center font-bold tracking-wide mb-1">
          Ahmed Lukman{" "}
          <span className="purple-gradient-text">| Full Stack Developer</span>
        </h1>
        <GradientBorder />
        <p className=" text-slate-300 mt-8">
          I&apos;m a self-taught developer with a Distinction in Business
          Information Technology Diploma. I excel academically, hold numerous
          certifications from courses and boot-camps, and have been featured in
          national media. My commitment to continuous learning and educating
          drives my passion as a programmer.
        </p>
      </section>

      <section className="mt-10 space-y-5">
        <h2 className=" text-xl text-slate-200 font-bold">Tech Stack</h2>
        <AnimatedTooltip items={TECH_STACK} />
      </section>

      <section className="mt-auto">
        <p className=" text-slate-400 text-2xl">Let&apos;s build </p>
        <FlipWords className="text-white text-2xl" words={WEB_QUALITIES} />
      </section>
    </div>
  );
}
