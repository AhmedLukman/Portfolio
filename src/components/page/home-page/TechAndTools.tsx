import React from "react";
import SectionHeader from "../../wrappers/SectionHeader";
import { AnimatedTooltip } from "../../ui/AnimatedTooltip";
import SectionWrapper from "../../wrappers/SectionWrapper";
import { BACKEND_TECHS, DEV_TOOLS, FRONT_END_TECHS } from "@/lib/data";

const TechAndTools = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Technologies & Tools</SectionHeader>
      <div className="flex flex-col gap-6">
        <h3 className="text-slate-200 text-lg lg:text-xl -mb-2">Front End</h3>
        <AnimatedTooltip items={FRONT_END_TECHS} />
        <h3 className="text-slate-200 text-lg lg:text-xl -mb-2">Back End</h3>
        <AnimatedTooltip items={BACKEND_TECHS} />
        <h3 className="text-slate-200 text-lg lg:text-xl -mb-2">Dev Tools</h3>
        <AnimatedTooltip items={DEV_TOOLS} />
      </div>
    </SectionWrapper>
  );
};

export default TechAndTools;
