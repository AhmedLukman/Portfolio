import Script from "next/script"

type Props = {
  name: string
  description: string
  url: string
  image?: string
  datePublished?: string
  codeRepository: string
  applicationCategory?: "WebApplication" | "DeveloperApplication"
}

export default function ProjectSchema({
  name,
  description,
  url,
  image,
  datePublished,
  codeRepository,
  applicationCategory = "WebApplication",
}: Props) {
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
    applicationCategory,
    operatingSystem: "All",
  }

  return (
    <Script id="schema-project" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}
