import Script from "next/script";

export default function PersonSchema() {
  return (
    <Script id="schema-person" type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ahmed Lukman",
          "url": "https://ahmedlukman.dev",
          "jobTitle": "Full Stack Developer",
          "sameAs": [
            "https://www.linkedin.com/in/ahmedlukman",
            "https://www.github.com/ahmedlukman"
          ],
          "knowsAbout": ["React", "Next.js", "JavaScript", "TypeScript", "UI/UX Design", "Tailwind CSS", "Web Development", "Front-end Development"],
          "description": "Modern, experienced full stack developer creating beautiful, high-performance, responsive web applications.",
          "contactPoint": {
            "@type": "ContactPoint",
            "url": "https://ahmedlukman.dev/contact",
            "contactType": "professional"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Strathmore University"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://ahmedlukman.dev"
          }
        }
      `}
    </Script>
  );
}