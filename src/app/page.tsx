import React from "react";
import Image from "next/image";
import { FlipWords } from "@/components/ui/FlipWords";
import GradientBorder from "@/components/ui/GradientBorder";
import { TECH_STACK, WEB_QUALITIES } from "@/lib/constants";
import { Tooltip } from "@nextui-org/react";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import PageWrapper from "@/components/ui/PageWrapper";
import Testimonials from "@/components/ui/Testimonials";
import CTA from "@/components/ui/CTA";

export default function Home() {
  return (
    <PageWrapper>
      <section>
        <h1 className="text-3xl text-slate-200 text-center font-bold tracking-wide mb-1">
          Ahmed Lukman{" "}
          <span className="purple-gradient-text">| Full Stack Developer</span>
        </h1>
        <GradientBorder className="max-w-2xl mx-auto" />
        <div className="flex justify-between mt-14 h-64">
          <div className="basis-1/2 flex items-center animate-slideInFromLeft">
            <p className=" text-slate-300">
              I&apos;m a{" "}
              <span className="purple-gradient-text">modern developer </span>
              with a distinction <FontAwesomeIcon icon={faMedal} /> in Diploma
              in Business Information Technology. I excel academically, hold
              numerous certifications from courses and boot-camps, and have been
              featured in national media. My commitment to continuous learning
              and problem solving drives my passion as a programmer.
            </p>
          </div>
          <div className="relative basis-1/2 animate-slideInFromRight">
            <Image
              priority
              fill
              src="/assets/images/me.svg"
              alt="Animated picture of a white male sitting on a desk that has a computer"
            />
          </div>
        </div>
      </section>

      <section className="mt-20 space-y-6">
        <h2 className=" text-xl text-slate-200 font-bold">Tech Stack</h2>
        <AnimatedTooltip items={TECH_STACK} />
      </section>

      <Testimonials />

      <section className="mt-24">
        <p className=" text-slate-400 text-2xl">Let&apos;s build </p>
        <FlipWords className="text-white text-2xl" words={WEB_QUALITIES} />
      </section>

      <CTA />
    </PageWrapper>
  );
}
