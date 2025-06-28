import Script from "next/script"

export default function WebsiteSchema() {
  return (
    <Script id="schema-website" type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Ahmed Lukman Portfolio",
          "url": "https://ahmedlukman.dev",
          "description": "Modern, experienced full stack developer creating beautiful, high-performance, responsive web applications.",
          "inLanguage": "en",
          "publisher": {
            "@type": "Person",
            "name": "Ahmed Lukman",
            "url": "https://ahmedlukman.dev"
          }
        }
      `}
    </Script>
  )
}
