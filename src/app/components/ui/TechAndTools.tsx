import { TECH_AND_TOOLS } from "@/app/lib/data";
import React from "react";
import SectionHeader from "./SectionHeader";
import { AnimatedTooltip } from "./AnimatedTooltip";

const TechAndTools = () => {
  return (
    <section className="mt-14 md:mt-20 space-y-8">
      <SectionHeader>Technologies & Tools</SectionHeader>
      <AnimatedTooltip items={TECH_AND_TOOLS} />
    </section>
  );
};

export default TechAndTools;
