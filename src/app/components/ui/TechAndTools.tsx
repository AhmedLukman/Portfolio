import { TECH_AND_TOOLS } from "@/app/lib/data";
import React from "react";
import SectionHeader from "./SectionHeader";
import { AnimatedTooltip } from "./AnimatedTooltip";
import SectionWrapper from "../wrappers/SectionWrapper";

const TechAndTools = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Technologies & Tools</SectionHeader>
      <AnimatedTooltip items={TECH_AND_TOOLS} />
    </SectionWrapper>
  );
};

export default TechAndTools;
