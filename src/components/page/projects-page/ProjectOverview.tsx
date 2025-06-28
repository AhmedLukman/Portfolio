import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { convertDate } from "@/lib/utils";
import { Project } from "@/lib/types";
import { PORTFOLIO_SITE } from "@/lib/constants";
import { LinkPreview } from "./LinkPreview";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import StatusChip from "./StatusChip";

const ProjectOverview = ({
  project: {
    overview: { description, site, source, title, status, startDate, endDate },
    deviceImage,
    techStack,
    metrics,
  },
}: {
  project: Project;
}) => {
  const isSitePortfolio = site === PORTFOLIO_SITE;
  return (
    <section className="flex flex-col lg:mt-10 lg:flex-row lg:gap-5 xl:mt-12 2xl:gap-10">
      <div className="relative aspect-square basis-1/2 lg:aspect-auto">
        <Image
          src={deviceImage}
          alt={title}
          sizes="(min-width: 1540px) 492px, (min-width: 1280px) 438px, (min-width: 1040px) calc(26.36vw + 66px), (min-width: 980px) 816px, (min-width: 780px) calc(72.78vw + 117px), calc(100vw - 55px)"
          fill
          priority
          className="animate-slideInFromLeft object-contain object-top"
        />
      </div>
      <div className="flex basis-1/2 flex-col justify-between gap-10">
        <div className="flex animate-slideInFromBottom flex-col gap-1">
          <h2 className="text-xl font-semibold">
            <span className="purple-gradient">Description</span>
          </h2>
          <p className="text-slate-300">{description}</p>
        </div>
        <div className="flex animate-slideInFromBottom flex-col gap-3 opacity-0 delay-500">
          <h2 className="text-xl font-semibold">
            <span className="purple-gradient">Tech Stack</span>
          </h2>
          <AnimatedTooltip items={techStack} />
        </div>
        <div className="flex animate-slideInFromBottom flex-col gap-3 opacity-0 delay-1000">
          <h2 className="text-xl font-semibold">
            <span className="purple-gradient">Metrics</span>
          </h2>
          <AnimatedTooltip items={metrics} />
        </div>
        <div className="flex animate-slideInFromBottom justify-between opacity-0 delay-1500">
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
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">
              <span className="purple-gradient">Status</span>
            </h2>
            <StatusChip status={status} />
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <LinkPreview url={source} className="flex-grow font-bold">
            <Button
              className="w-full animate-slideInFromLeft text-white opacity-0 delay-2000 hover:text-black"
              variant="ghost"
              endContent={<FontAwesomeIcon icon={faGithub} />}
            >
              Source code
            </Button>
          </LinkPreview>
          {isSitePortfolio && (
            <Tooltip
              color="secondary"
              offset={15}
              content="Already viewing this site"
            >
              <Button
                className="flex-grow animate-slideInFromRight opacity-0 delay-2000"
                endContent={<FontAwesomeIcon icon={faGlobe} />}
                disabled
              >
                Explore site
              </Button>
            </Tooltip>
          )}
          {!isSitePortfolio && (
            <LinkPreview url={site} className="flex-grow font-bold">
              <Button
                className="w-full animate-slideInFromRight opacity-0 delay-2000 hover:!opacity-80"
                endContent={<FontAwesomeIcon icon={faGlobe} />}
              >
                Explore site
              </Button>
            </LinkPreview>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
