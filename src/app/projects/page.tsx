import GradientBorder from "@/components/ui/GradientBorder";
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
    <div className="mx-auto max-w-4xl py-20">
      <h1 className="text-3xl text-slate-200 text-center font-bold tracking-wide mb-1">
        My Projects
      </h1>
      <div className="max-w-xl mx-auto">
        <GradientBorder />
      </div>
      <ProjectsList />
    </div>
  );
};

export default ProjectsPage;
