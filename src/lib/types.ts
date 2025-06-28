import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { StaticImageData } from "next/image"
import { TProjectStatus } from "./constants"

export type Project = {
  overview: {
    title: string
    description: string
    image: StaticImageData
    site: string
    source: string
    status: TProjectStatus
    startDate: Date
    endDate?: Date
  }
  image: StaticImageData
  deviceImage: StaticImageData
  route: string
  slug: string
  techStack: {
    name: string
    src: StaticImageData
  }[]
  metrics: {
    name: string
    icon: IconDefinition
    score: number
  }[]
  features: string[]
  caseStudy: {
    title: string
    description: string
    icon: IconDefinition
    colors: number[][]
    dotSize?: number
  }[]
}
