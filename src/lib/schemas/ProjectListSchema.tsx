import Script from "next/script";
import { PROJECTS } from "../data";

export default function ProjectListSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ahmed Lukman's Projects",
    description: "A collection of web development projects and case studies.",
    numberOfItems: PROJECTS.length,
    itemListElement: PROJECTS.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.overview.title,
        description: project.overview.description,
        url: `https://ahmedlukman.dev/projects/${project.slug}`,
        ...(project.overview.image && {
          image: project.overview.image.src,
        }),
        author: {
          "@type": "Person",
          name: "Ahmed Lukman",
        },
        applicationCategory: "WebApplication",
      },
    })),
  };

  return (
    <Script id="schema-project-list" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
}
