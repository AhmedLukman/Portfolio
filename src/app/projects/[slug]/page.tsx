import ProjectOverview from "@/components/page/projects-page/ProjectOverview";
import PageHeader from "@/components/wrappers/PageHeader";
import PageWrapper from "@/components/wrappers/PageWrapper";
import { PROJECTS } from "@/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;
  const project = PROJECTS.find((project) => project.slug === slug);
  if (!project) notFound();
  return {
    title: `Ahmed Lukman | ${project.overview.title}`,
    description: project.overview.description,
  };
};

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = PROJECTS.find((project) => project.slug === slug);
  if (!project) notFound();
  return (
    <PageWrapper className="2xl:max-w-5xl">
      <PageHeader>{project.overview.title}</PageHeader>
      <ProjectOverview project={project} />
    </PageWrapper>
  );
};

export default ProjectDetailsPage;
