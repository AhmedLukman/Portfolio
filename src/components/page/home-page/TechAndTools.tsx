import { BACKEND_TECHS, DEV_TOOLS, FRONT_END_TECHS } from "@/lib/data"
import { AnimatedTooltip } from "../../ui/AnimatedTooltip"
import SectionHeader from "../../wrappers/SectionHeader"
import SectionWrapper from "../../wrappers/SectionWrapper"

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
