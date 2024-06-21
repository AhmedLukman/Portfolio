import React from "react";
import { PROJECTS } from "@/lib/constants";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3DCard";
import Link from "next/link";
import { AnimatedTooltip } from "./AnimatedTooltip";

const ProjectsList = () => {
  return (
    <ul className="flex justify-between w-full mt-10 flex-wrap">
      {PROJECTS.map(({ title, description, image, homepage, techStack }) => (
        <li key={title} className="z-10">
          <CardContainer>
            <CardBody className="  relative group/card shadow-[0_8px_16px_rgb(0_0_0/0.3)] border border-white/[0.1] w-[22rem] md:w-[23rem] xl:w-[26rem] h-auto rounded-xl p-6   ">
              <Link target="_blank" href={homepage} className="block">
                <CardItem
                  translateZ="70"
                  className="text-xl font-bold text-slate-200"
                >
                  {title}
                </CardItem>
                <CardItem
                  as="div"
                  translateZ="60"
                  className="text-slate-400 w-full  flex items-center justify-between text-sm mt-2"
                >
                  {description}
                </CardItem>
                <CardItem translateZ="99" className="group mt-4">
                  <Image
                    priority
                    src={image}
                    height={400}
                    width={650}
                    className=" object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={title}
                  />
                </CardItem>
                <CardItem className="flex mt-5" translateZ="100">
                  <AnimatedTooltip items={techStack} />
                </CardItem>
              </Link>
            </CardBody>
          </CardContainer>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
