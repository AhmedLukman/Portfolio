import Script from "next/script";

type ProjectSchemaProps = {
  name: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  codeRepository: string;
};

export default function ProjectSchema({
  name,
  description,
  url,
  image,
  datePublished,
  codeRepository,
}: ProjectSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: name,
    description: description,
    url: url,
    ...(image && { image }),
    ...(datePublished && { datePublished }),
    author: {
      "@type": "Person",
      name: "Ahmed Lukman",
    },
    codeRepository,
    applicationCategory: "WebApplication",
    operatingSystem: "All",
  };

  return (
    <Script id="schema-project" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
}
