import { PROJECTS, RECOGNITIONS } from "./data"
import { SOCIAL_LINKS } from "./constants"

export const convertDate = (date: Date): string => {
  // Check if date is valid
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date: ${date}`)
  }

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  }

  return date.toLocaleDateString("en-US", options)
}

export const getExternalLinkProps = (isExternal: boolean) => {
  return isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}
}

export const getAllExternalLinks = () => {
  return [
    ...SOCIAL_LINKS.map((link) => link.path),
    ...RECOGNITIONS.map((link) => link.url),
    ...PROJECTS.map((project) => project.overview.source),
    ...PROJECTS.map((project) => project.overview.site),
  ]
}
