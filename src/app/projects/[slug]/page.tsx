import CaseStudy from "@/components/page/projects-page/CaseStudy";
import Features from "@/components/page/projects-page/Features";
import ProjectOverview from "@/components/page/projects-page/ProjectOverview";
import PageHeader from "@/components/wrappers/PageHeader";
import PageWrapper from "@/components/wrappers/PageWrapper";
import { PROJECTS } from "@/lib/data";
import ProjectSchema from "@/lib/schemas/ProjectSchema";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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
      <ProjectSchema
        name={project.overview.title}
        description={project.overview.description}
        url={`https://ahmedlukman.dev/projects/${project.slug}`}
        image={project.overview.image?.src}
        datePublished={project.overview.startDate?.toISOString?.()}
        codeRepository={project.overview.source}
      />
      <PageHeader>{project.overview.title}</PageHeader>
      <ProjectOverview project={project} />
      <CaseStudy project={project} />
      <Features project={project} />
    </PageWrapper>
  );
};

export default ProjectDetailsPage;
