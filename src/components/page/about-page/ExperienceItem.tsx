import { convertDate } from "@/lib/utils"
import { Card, Chip } from "@heroui/react"
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

type Props = {
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
  experienceCount: number
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
  experienceCount,
}: Props) => {
  const endOrCurrent = endDate ?? new Date()
  return (
    <li
      className={`relative flex lg:${index % 2 === 0 ? "justify-end" : "justify-start"} justify-center`}
    >
      {/* Timeline dot - hidden on mobile */}
      <div className="absolute top-1/2 left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-purple-600 lg:block"></div>

      {/* Mobile vertical connector between items - hidden on desktop */}
      {index < experienceCount - 1 && (
        <div className="absolute top-full left-1/2 h-12 w-0.5 -translate-x-1/2 transform bg-slate-500 lg:hidden"></div>
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
          <Card className="gap-0! overflow-hidden! rounded-[14px]! border border-slate-500 bg-transparent p-0! hover:shadow-lg hover:shadow-slate-800 hover:transition-shadow hover:duration-200">
            <Card.Header className="flex-row! flex-wrap items-start justify-between gap-2 p-3">
              <h3 className="purple-gradient! text-xl">{title}</h3>
              <Chip
                variant="secondary"
                className="inline-flex! h-7! w-fit! max-w-fit min-w-min justify-between rounded-full! border-2! border-zinc-300! bg-transparent! px-1! py-0! text-sm! font-normal! text-body!"
              >
                <Chip.Label className="flex-1! px-2! text-sm! font-normal! text-inherit!">
                  {type}
                </Chip.Label>
              </Chip>
            </Card.Header>
            <Card.Content className="p-3">
              <p>{description}</p>
            </Card.Content>
            <Card.Footer className="flex flex-wrap justify-between gap-2 p-3">
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
            </Card.Footer>
          </Card>
        </ItemWrapper>
      </div>
    </li>
  )
}

export default ExperienceItem
