import { PORTFOLIO_SITE } from "@/lib/constants"
import { PROJECTS } from "@/lib/data"
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: PORTFOLIO_SITE,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${PORTFOLIO_SITE}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${PORTFOLIO_SITE}/projects`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${PORTFOLIO_SITE}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${PORTFOLIO_SITE}/projects/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...baseRoutes, ...projectRoutes]
}
