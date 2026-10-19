import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip"
import {
  ClientTooltip,
  ClientTooltipArrow,
  ClientTooltipContent,
  ClientTooltipTrigger,
} from "@/components/ui/ClientTooltip"
import { RippleButton } from "@/components/ui/Ripple"
import { PORTFOLIO_SITE } from "@/lib/constants"
import { Project } from "@/lib/types"
import { convertDate } from "@/lib/utils"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faArrowUpRightFromSquare,
  faCalendarAlt,
  faCircleInfo,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { LinkPreview } from "./LinkPreview"
import StatusChip from "./StatusChip"

const ProjectOverview = ({
  project: {
    overview: {
      description,
      site,
      siteLabel = "Explore site",
      source,
      title,
      status,
      startDate,
      endDate,
    },
    deviceImage,
    techStack,
    metrics,
    applicationCategory,
  },
}: {
  project: Project
}) => {
  const isSitePortfolio = site === PORTFOLIO_SITE
  return (
    <section className="flex flex-col lg:mt-10 lg:flex-row lg:gap-5 xl:mt-12 2xl:gap-10">
      <div className="relative aspect-square basis-1/2 lg:aspect-auto">
        <Image
          src={deviceImage}
          alt={title}
          sizes="(min-width: 1540px) 492px, (min-width: 1280px) 438px, (min-width: 1040px) calc(26.36vw + 66px), (min-width: 980px) 816px, (min-width: 780px) calc(72.78vw + 117px), calc(100vw - 55px)"
          fill
          priority
          className="animate-slide-in-from-left object-contain object-top"
        />
      </div>
      <div className="flex basis-1/2 flex-col justify-between gap-10">
        <div className="flex animate-slide-in-from-bottom flex-col gap-1">
          <h2 className="text-xl font-semibold">
            <span className="purple-gradient">Description</span>
          </h2>
          <p className="text-slate-300">{description}</p>
        </div>
        <div className="flex animate-slide-in-from-bottom flex-col gap-3 opacity-0 animation-delay-500">
          <h2 className="text-xl font-semibold">
            <span className="purple-gradient">Tech Stack</span>
          </h2>
          <AnimatedTooltip items={techStack} />
        </div>
        {metrics.length > 0 && (
          <div className="flex animate-slide-in-from-bottom flex-col gap-3 opacity-0 animation-delay-1000">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <span className="purple-gradient">Metrics</span>
              <ClientTooltip delay={0}>
                <ClientTooltipTrigger className="inline-flex items-center">
                  <span className="inline-flex items-center">
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      size="2xs"
                      className="block text-slate-300"
                    />
                  </span>
                </ClientTooltipTrigger>
                <ClientTooltipContent
                  showArrow
                  className="h-auto! w-max! max-w-[calc(100vw-2rem)]! min-w-0! rounded-[13px]! bg-slate-300! px-2.5! py-1! text-sm! leading-5! font-normal! whitespace-nowrap! text-black!"
                >
                  <ClientTooltipArrow className="fill-slate-300! stroke-slate-300!" />
                  <span className="block! text-sm! leading-5! font-normal! whitespace-nowrap! text-black!">
                    Average lighthouse score across all pages of the site
                  </span>
                </ClientTooltipContent>
              </ClientTooltip>
            </h2>
            <AnimatedTooltip items={metrics} />
          </div>
        )}
        <div className="flex animate-slide-in-from-bottom flex-wrap justify-between opacity-0 animation-delay-1500 sm:flex-nowrap">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">
              <span className="purple-gradient">Start Date</span>
            </h2>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-slate-300"
              />
              <time
                dateTime={startDate.toISOString()}
                className="text-slate-300"
              >
                {convertDate(startDate)}
              </time>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">
              <span className="purple-gradient">End Date</span>
            </h2>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-slate-300"
              />
              <time
                dateTime={endDate?.toISOString()}
                className="text-slate-300"
              >
                {endDate ? convertDate(endDate) : "N/A"}
              </time>
            </div>
          </div>
          <div className="mt-10 flex w-full flex-col gap-1 sm:mt-0 sm:w-auto">
            <h2 className="text-xl font-semibold">
              <span className="purple-gradient">Status</span>
            </h2>
            <StatusChip status={status} />
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <LinkPreview url={source} className="grow font-bold">
            <RippleButton
              className="h-10! w-full min-w-20! animate-slide-in-from-left overflow-hidden rounded-[12px]! border-2! border-zinc-300! font-normal! text-white opacity-0 transition-all! duration-[250ms]! ease-[ease]! animation-delay-2000 hover:text-black"
              variant="ghost"
            >
              Source code
              <FontAwesomeIcon icon={faGithub} className="mx-0!" />
            </RippleButton>
          </LinkPreview>
          {isSitePortfolio && (
            <ClientTooltip delay={0}>
              <ClientTooltipTrigger className="grow">
                <span className="block">
                  <RippleButton
                    className="pointer-events-auto! h-10! w-full min-w-20! animate-slide-in-from-right cursor-pointer! overflow-hidden rounded-[12px]! bg-zinc-300! font-normal! text-black! opacity-0 transition-all! duration-[250ms]! ease-[ease]! animation-delay-2000"
                    isDisabled
                  >
                    Explore site
                    <FontAwesomeIcon icon={faGlobe} className="mx-0!" />
                  </RippleButton>
                </span>
              </ClientTooltipTrigger>
              <ClientTooltipContent
                offset={15}
                className="rounded-[13px]! px-2.5! py-1! text-sm! leading-5!"
              >
                <p>Already viewing this site</p>
              </ClientTooltipContent>
            </ClientTooltip>
          )}
          {!isSitePortfolio && (
            <LinkPreview url={site} className="grow font-bold">
              <RippleButton className="h-10! w-full min-w-20! animate-slide-in-from-right overflow-hidden rounded-[12px]! bg-zinc-300! font-normal! text-black! opacity-0 transition-all! duration-[250ms]! ease-[ease]! animation-delay-2000 hover:opacity-80!">
                {siteLabel}
                <FontAwesomeIcon
                  icon={
                    applicationCategory === "DeveloperApplication"
                      ? faArrowUpRightFromSquare
                      : faGlobe
                  }
                  className="mx-0!"
                />
              </RippleButton>
            </LinkPreview>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectOverview
