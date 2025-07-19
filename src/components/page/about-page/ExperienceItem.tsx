import { EXPERIENCE } from "@/lib/data"
import { convertDate } from "@/lib/utils"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card"
import { Chip } from "@heroui/chip"
import { formatDuration, intervalToDuration } from "date-fns"
import Image, { StaticImageData } from "next/image"
import ItemWrapper from "../../wrappers/ItemWrapper"

const calculateDuration = (start: Date, end: Date) => {
  const duration = intervalToDuration({
    start: start,
    end: end,
  })

  return formatDuration(duration, {
    format: ["years", "months"],
    delimiter: " ",
  })
}

type ExperienceItemProps = {
  item: {
    index: number
    title: string
    description: string
    company: string
    type: string
    startDate: Date
    endDate?: Date
    companyLogo: StaticImageData
  }
}

const ExperienceItem = ({
  item: {
    company,
    companyLogo,
    description,
    index,
    startDate,
    title,
    type,
    endDate,
  },
}: ExperienceItemProps) => {
  const endOrCurrent = endDate ?? new Date()
  return (
    <li
      className={`relative flex lg:${index % 2 === 0 ? "justify-end" : "justify-start"} justify-center`}
    >
      {/* Timeline dot - hidden on mobile */}
      <div className="absolute left-1/2 top-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-purple-600 lg:block"></div>

      {/* Mobile vertical connector between items - hidden on desktop */}
      {index < EXPERIENCE.length - 1 && (
        <div className="absolute left-1/2 top-full h-12 w-0.5 -translate-x-1/2 transform bg-slate-500 lg:hidden"></div>
      )}

      {/* Horizontal connector line - hidden on mobile */}
      <div
        className={`absolute top-1/2 h-0.5 w-[calc(9.5%-8px)] -translate-y-1/2 bg-slate-500 ${
          index % 2 === 0 ? "right-[50%]" : "left-[50%]"
        } hidden lg:block`}
      />

      {/* Card container - full width on mobile, alternating on desktop */}
      <div
        className={`w-full lg:w-[45%] ${index % 2 === 0 ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"}`}
      >
        <ItemWrapper as="div" index={index}>
          <Card className="border border-slate-500 bg-transparent hover:shadow-lg hover:shadow-slate-800 hover:transition-shadow hover:duration-200">
            <CardHeader
              as="header"
              className="flex flex-wrap justify-between gap-2"
            >
              <h3 className="purple-gradient! text-xl">{title}</h3>
              <Chip variant="bordered" className="text-body">
                {type}
              </Chip>
            </CardHeader>
            <CardBody as="p">{description}</CardBody>
            <CardFooter
              as="footer"
              className="flex flex-wrap justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <Image
                  alt={company}
                  src={companyLogo}
                  className="h-8 w-8 rounded-full"
                />
                <p className="">{company}</p>
              </div>
              <div className="text-sm text-body lg:mt-0">
                <time dateTime={startDate.toISOString()}>
                  {convertDate(startDate)}
                </time>{" "}
                <span>| </span>
                {endDate ? (
                  <time dateTime={endDate.toISOString()}>
                    {convertDate(endDate)}
                  </time>
                ) : (
                  <span>Present</span>
                )}
                <span className="ml-2 text-slate-400">
                  ({calculateDuration(startDate, endOrCurrent)})
                </span>
              </div>
            </CardFooter>
          </Card>
        </ItemWrapper>
      </div>
    </li>
  )
}

export default ExperienceItem
