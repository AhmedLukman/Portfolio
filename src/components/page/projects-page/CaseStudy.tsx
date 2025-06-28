import SectionHeader from "@/components/wrappers/SectionHeader"
import { Project } from "@/lib/types"
import { CanvasRevealEffect } from "./CanvasRevealEffect"
import CaseStudyCard from "./CaseStudyCard"

const CaseStudy = ({ project: { caseStudy } }: { project: Project }) => {
  return (
    <section className="mt-20">
      <SectionHeader className="text-center">Case Study</SectionHeader>
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        {caseStudy.map((study, index) => (
          <CaseStudyCard
            key={index}
            icon={study.icon}
            className={`animate-slideInFromBottom delay-${index * 500}`}
            title={study.title}
            description={study.description}
          >
            <CanvasRevealEffect
              animationSpeed={4}
              containerClassName="rounded-3xl overflow-hidden"
              colors={study.colors}
              dotSize={2}
            />
          </CaseStudyCard>
        ))}
      </div>
    </section>
  )
}

export default CaseStudy
