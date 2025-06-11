import ProjectsList from "@/components/page/projects-page/ProjectsList";
import PageHeader from "@/components/wrappers/PageHeader";
import PageWrapper from "@/components/wrappers/PageWrapper";
import { Metadata } from "next";
import ProjectListSchema from "@/lib/schemas/ProjectListSchema";

export const metadata: Metadata = {
  title: "Ahmed Lukman | Projects",
  description:
    "A showcase of projects and work completed by Ahmed Lukman, highlighting skills and achievements.",
};

const ProjectsPage = () => {
  return (
    <PageWrapper className="2xl:max-w-5xl">
      <ProjectListSchema />
      <PageHeader>My Projects</PageHeader>
      <ProjectsList />
    </PageWrapper>
  );
};

export default ProjectsPage;
