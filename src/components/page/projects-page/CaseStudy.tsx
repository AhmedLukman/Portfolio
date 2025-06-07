import SectionHeader from "@/components/wrappers/SectionHeader";
import CaseStudyCard from "./CaseStudyCard";
import { Project } from "@/lib/types";
import { CanvasRevealEffect } from "./CanvasRevealEffect";
import { cn } from "@heroui/theme";

const CaseStudy = ({ project: { caseStudy } }: { project: Project }) => {
  return (
    <section className="mt-20">
      <SectionHeader className="text-center">Case Study</SectionHeader>
      <div className="mt-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
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
  );
};

export default CaseStudy;
