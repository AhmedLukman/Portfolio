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
    overview: {
      description,
      image,
      site,
      source,
      title,
      status,
      startDate,
      endDate,
    },
    techStack,
    metrics,
  },
}: {
  project: Project;
}) => {
  const isSitePortfolio = site === PORTFOLIO_SITE;
  return (
    <section className="flex flex-col lg:gap-5 2xl:gap-10 lg:flex-row lg:mt-10 xl:mt-12">
      <div className="basis-1/2 relative aspect-square lg:aspect-auto">
        <Image
          src={image}
          alt={title}
          sizes="(min-width: 1540px) 492px, (min-width: 1280px) 438px, (min-width: 1040px) calc(26.36vw + 66px), (min-width: 980px) 816px, (min-width: 780px) calc(72.78vw + 117px), calc(100vw - 55px)"
          fill
          priority
          className="object-contain object-top animate-slideInFromLeft"
        />
      </div>
      <div className="flex flex-col basis-1/2 justify-between gap-10">
        <div className="flex flex-col gap-1 animate-slideInFromBottom">
          <h2 className="text-xl purple-gradient font-semibold">Description</h2>
          <p className="text-slate-300">{description}</p>
        </div>
        <div className="flex flex-col gap-3 opacity-0 animate-slideInFromBottom delay-500">
          <h2 className="text-xl purple-gradient font-semibold">Tech Stack</h2>
          <AnimatedTooltip items={techStack} />
        </div>
        <div className="flex flex-col gap-3 opacity-0 animate-slideInFromBottom delay-1000">
          <h2 className="text-xl purple-gradient font-semibold">Metrics</h2>
          <AnimatedTooltip items={metrics} />
        </div>
        <div className="flex justify-between opacity-0 animate-slideInFromBottom delay-1500">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold purple-gradient">
              Start Date
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
            <h2 className="text-xl purple-gradient font-semibold">End Date</h2>
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
            <h2 className="text-xl purple-gradient font-semibold">Status</h2>
            <StatusChip status={status} />
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <LinkPreview url={source} className="font-bold flex-grow">
            <Button
              className="text-white w-full hover:text-black  opacity-0 animate-slideInFromLeft delay-2000"
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
                className="flex-grow opacity-0 animate-slideInFromRight delay-2000"
                endContent={<FontAwesomeIcon icon={faGlobe} />}
                disabled
              >
                Explore site
              </Button>
            </Tooltip>
          )}
          {!isSitePortfolio && (
            <LinkPreview url={site} className="font-bold flex-grow">
              <Button
                className="  w-full opacity-0 animate-slideInFromRight delay-2000 hover:!opacity-80"
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
