import SectionWrapper from "@/components/wrappers/SectionWrapper"
import { PROJECTS } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import ItemWrapper from "../../wrappers/ItemWrapper"
import { CardBody, CardContainer, CardItem } from "./3DCard"
import StatusIcon from "./StatusIcon"

const ProjectsList = () => {
  return (
    <SectionWrapper>
      <ul className="grid w-full grid-cols-1 justify-between md:grid-cols-2">
        {PROJECTS.map(
          (
            { overview: { title, description, status }, image, route },
            index,
          ) => (
            <ItemWrapper key={title} index={index}>
              <CardContainer>
                <CardBody className="group/card relative h-auto w-84 rounded-xl border border-white/10 p-6 shadow-[0_8px_16px_rgb(0_0_0/0.3)] xl:w-104">
                  <Link href={route} className="block">
                    <CardItem
                      translateZ="70"
                      className="flex w-full items-center justify-between text-xl font-bold text-slate-200"
                    >
                      <h2>{title}</h2>
                      <StatusIcon status={status} />
                    </CardItem>
                    <CardItem
                      as="div"
                      translateZ="60"
                      className="mt-2 line-clamp-3! flex w-full items-center justify-between text-sm text-slate-400"
                    >
                      {description}
                    </CardItem>
                    <CardItem translateZ="99" className="group mt-4">
                      <Image
                        priority
                        src={image}
                        className="h-48 rounded-xl group-hover/card:shadow-xl xl:h-56"
                        alt={title}
                      />
                    </CardItem>
                  </Link>
                </CardBody>
              </CardContainer>
            </ItemWrapper>
          ),
        )}
      </ul>
    </SectionWrapper>
  )
}

export default ProjectsList
