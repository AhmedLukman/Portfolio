import React from "react";
import Image from "next/image";
import { FlipWords } from "@/components/ui/FlipWords";
import GradientBorder from "@/components/ui/GradientBorder";
import { TECH_STACK, WEB_QUALITIES } from "@/lib/constants";

export default function Home() {

  return (
    <div className="mx-auto max-w-2xl flex h-full py-20 flex-col">
      <section>
        <h1 className="text-3xl text-slate-200 text-center font-bold tracking-wide mb-1">
          Ahmed Lukman | Full Stack Developer
        </h1>
        <GradientBorder />
        <p className=" text-slate-400 mt-8">
          I&apos;m a self-taught developer with a Distinction in Business
          Information Technology Diploma. I excel academically, hold numerous
          certifications from courses and boot-camps, and have been featured in
          national media. My commitment to continuous learning and educating
          drives my passion as a programmer.
        </p>
      </section>

      <section className="mt-10 space-y-5">
        <h2 className=" text-xl text-slate-200 font-bold">Tech Stack</h2>
        <div className="flex items-center gap-5 flex-wrap">
          {TECH_STACK.map((tech) => (
            <Image
              key={tech.src}
              alt={tech.alt}
              width={32}
              height={32}
              src={tech.src}
            />
          ))}
        </div>
      </section>
      
      <section className="mt-auto">
        <p className=" text-slate-400 text-2xl">Let&apos;s build </p>
        <FlipWords className="text-white text-2xl" words={WEB_QUALITIES} />
      </section>
    </div>
  );
}
