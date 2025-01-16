import { FRONT_END_TECHS, BACKEND_TECHS, DEV_TOOLS } from "@/app/lib/data";
import React from "react";
import SectionHeader from "../../wrappers/SectionHeader";
import { AnimatedTooltip } from "../../ui/AnimatedTooltip";
import SectionWrapper from "../../wrappers/SectionWrapper";

const TechAndTools = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Technologies & Tools</SectionHeader>
      <h3 className="text-slate-200 text-lg lg:text-xl">Front End</h3>
      <AnimatedTooltip items={FRONT_END_TECHS} />
      <h3 className="text-slate-200 text-lg lg:text-xl">Back End</h3>
      <AnimatedTooltip items={BACKEND_TECHS} />
      <h3 className="text-slate-200 text-lg lg:text-xl">Dev Tools</h3>
      <AnimatedTooltip items={DEV_TOOLS} />
    </SectionWrapper>
  );
};

export default TechAndTools;
