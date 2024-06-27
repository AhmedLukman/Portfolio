import GradientBorder from "@/components/ui/GradientBorder";
import PageWrapper from "@/components/ui/PageWrapper";
import ProjectsList from "@/components/ui/ProjectsList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ahmed Lukman | Projects",
  description:
    "A showcase of projects and work completed by Ahmed Lukman, highlighting skills and achievements.",
};

const ProjectsPage = () => {
  return (
    <PageWrapper>
      <h1 className="text-3xl text-slate-200 text-center font-bold tracking-wide mb-1">
        My Projects
      </h1>
      <GradientBorder className="max-w-xl mx-auto" />
      <ProjectsList />
    </PageWrapper>
  );
};

export default ProjectsPage;
