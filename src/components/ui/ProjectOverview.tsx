import React from "react";
import { Button, Link, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { Project } from "@/lib/types";

const ProjectOverview = ({
  project: { description, image, site, source, techStack, metrics },
}: {
  project: Project
}) => {
  const isSitePortfolio = site === "https://portfolio-ahmedlukman.vercel.app";
  return (
    <section className="flex gap-14 justify-between mt-10">
      <div className="basis-1/2 relative">
        <Image src={image} alt="" fill priority className="object-contain" />
      </div>
      <div className="flex flex-col basis-1/2 justify-between gap-8">
        <div className="flex flex-col gap-1">
          <h2 className="text-slate-200 text-xl font-bold">Description</h2>
          <TextGenerateEffect words={description} />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-slate-200 text-xl font-bold">Tech Stack</h2>
          <AnimatedTooltip items={techStack} />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-slate-200 text-xl font-bold">Metrics</h2>
          <AnimatedTooltip
            items={metrics}
          />
        </div>
        <div className="flex gap-5 mt-5">
          <Button
            className="text-white hover:text-black flex-grow"
            isExternal
            variant="ghost"
            as={Link}
            href={source}
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
              className=" flex-grow"
              as={Link}
              href={isSitePortfolio ? undefined : site}
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
