import React from "react";
import { Button, Chip, Link, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { Project } from "@/lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faCalendarAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Status } from "@/lib/constants";

const ProjectOverview = ({
  project: {
    description,
    image,
    site,
    source,
    techStack,
    metrics,
    title,
    status,
  },
}: {
  project: Project;
}) => {

  const renderStatus = (status: Status) => {
    return (
      <>
        {status === Status.Completed && (
          <Chip color="success" className="text-white">Completed</Chip>
        )}
        {status === Status.Pending && (
          <Chip color="warning" className="text-white">{status}</Chip>
        )}
        {status === Status.Cancelled && (
          <Chip color="danger" className="text-white">{status}</Chip>
        )}
      </>
    );
  };

  const isSitePortfolio = site === "https://portfolio-ahmedlukman.vercel.app";
  return (
    <section className="flex gap-14 justify-between mt-10">
      <div className="basis-1/2 relative">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-contain animate-slideInFromLeft"
        />
      </div>
      <div className="flex flex-col basis-1/2 justify-between gap-8">
        <div className="flex flex-col gap-1 animate-slideInFromBottom">
          <h2 className="text-xl font-bold">
            <span className="purple-gradient-text">Description</span>
          </h2>
          <p className="text-slate-300">{description}</p>
        </div>
        <div className="flex flex-col gap-3 opacity-0 animate-slideInFromBottom delay-500">
          <h2 className="text-xl font-bold">
            <span className="purple-gradient-text">Tech Stack</span>
          </h2>
          <AnimatedTooltip items={techStack} />
        </div>
        <div className="flex flex-col gap-3 opacity-0 animate-slideInFromBottom delay-1000">
          <h2 className="text-xl font-bold">
            <span className="purple-gradient-text">Metrics</span>
          </h2>
          <AnimatedTooltip items={metrics} />
        </div>
        <div className="flex justify-between opacity-0 animate-slideInFromBottom delay-1500">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold">
              <span className="purple-gradient-text">Start Date</span>
            </h2>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-slate-300"
              />
              <time className="text-slate-300">2024-9-5</time>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold">
              <span className="purple-gradient-text">End Date</span>
            </h2>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-slate-300"
              />
              <time className="text-slate-300">2024-11-7</time>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold">
              <span className="purple-gradient-text">Status</span>
            </h2>
            {renderStatus(status)}
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <Button
            className="text-white hover:text-black flex-grow opacity-0 animate-slideInFromLeft delay-2000"
            isExternal
            variant="ghost"
            as={Link}
            href={source}
            endContent={<FontAwesomeIcon icon={faGithub} />}
          >
            Source code
          </Button>
          <Tooltip
            color="secondary"
            offset={15}
            content={isSitePortfolio ? "Already viewing this site" : ""}
            isDisabled={!isSitePortfolio}
          >
            <Button
              isExternal
              disabled={isSitePortfolio}
              className=" flex-grow opacity-0 animate-slideInFromRight delay-2000 hover:!opacity-80"
              as={Link}
              href={isSitePortfolio ? undefined : site}
              endContent={<FontAwesomeIcon icon={faGlobe} />}
            >
              Explore site
            </Button>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
