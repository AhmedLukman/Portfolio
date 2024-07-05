import CaseStudy from "@/components/ui/CaseStudy";
import Features from "@/components/ui/Features";
import GradientBorder from "@/components/ui/GradientBorder";
import ProjectOverview from "@/components/ui/ProjectOverview";
import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const project = PROJECTS.find((project) => project.slug === params.slug);

  if (!project) notFound();

  return {
    title: `Ahmed Lukman | ${project.title}`,
    description: project.description,
  };
};

const ProjectDetailsPage = ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const project = PROJECTS.find((project) => project.slug === slug);
  if (!project) notFound();
  return (
    <div className="px-14 py-10">
      <h1 className="text-3xl text-slate-200 text-center font-bold tracking-wide mb-1">
        {project.title}
      </h1>
      <GradientBorder className="max-w-xl mx-auto" />
      <ProjectOverview project={project} />
      <CaseStudy project={project} />
      <Features />
    </div>
  );
};

export default ProjectDetailsPage;
