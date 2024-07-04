import React from "react";
import Image from "next/image";
import { FlipWords } from "@/components/ui/FlipWords";
import { TECH_STACK, WEB_QUALITIES } from "@/lib/constants";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import PageWrapper from "@/components/ui/PageWrapper";
import Testimonials from "@/components/ui/Testimonials";
import CTA from "@/components/ui/CTA";
import Introduction from "@/components/page/home-page/Introduction";
import GradientBorder from "@/components/ui/GradientBorder";

export default function Home() {
  return (
    <PageWrapper>
      <h1 className="text-3xl text-slate-200 text-center font-bold tracking-wide mb-1">
        Ahmed Lukman{" "}
        <span className="purple-gradient-text">| Full Stack Developer</span>
      </h1>
      <GradientBorder className="max-w-2xl mx-auto" />

      <Introduction />

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
