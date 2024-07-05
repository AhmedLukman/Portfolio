import { Project } from "@/lib/types";
import React from "react";
import { CanvasRevealEffect } from "./CanvasRevealEffect";
import CaseStudyCard from "./CaseStudyCard";
import SectionHeader from "./SectionHeader";
import { cn } from "@nextui-org/react";

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
            des={study.description}
          >
            <CanvasRevealEffect
              animationSpeed={4}
              containerClassName={cn(
                "rounded-3xl overflow-hidden",
                study.bgColor
              )}
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
