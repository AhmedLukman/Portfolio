import PageHeader from "@/components/ui/PageHeader";
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
      <PageHeader>
        My Projects
      </PageHeader>
      <ProjectsList />
    </PageWrapper>
  );
};

export default ProjectsPage;
