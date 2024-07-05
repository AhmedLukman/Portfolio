import React from "react";
import { Status } from "@/lib/constants";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3DCard";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCheckCircle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@nextui-org/react";
import ListItemWrapper from "./ListItemWrapper";
import { PROJECTS } from "@/lib/data";

const ProjectsList = () => {
  // refactor renderStatus fn (ask gpt whre to put it)
  const renderStatus = (status: Status) => {
    return (
      <>
        {status === Status.Completed && (
          <Tooltip content={Status.Completed} color="success">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
          </Tooltip>
        )}
        {status === Status.Pending && (
          <Tooltip content={Status.Pending} color="warning">
            <FontAwesomeIcon
              title="Pending"
              icon={faClock}
              className="text-yellow-500"
            />
          </Tooltip>
        )}
        {status === Status.Cancelled && (
          <Tooltip content={Status.Cancelled} color="danger">
            <FontAwesomeIcon
              title="Cancelled"
              icon={faBan}
              className="text-red-500"
            />
          </Tooltip>
        )}
      </>
    );
  };

  return (
    <ul className="flex justify-between w-full mt-16 flex-wrap">
      {PROJECTS.map(({ title, description, image, route, status }, index) => (
        <ListItemWrapper key={title} index={index}>
          <CardContainer>
            <CardBody className="  relative group/card shadow-[0_8px_16px_rgb(0_0_0/0.3)] border border-white/[0.1] w-[22rem] md:w-[23rem] xl:w-[26rem] h-auto rounded-xl p-6   ">
              <Link href={route} className="block">
                <CardItem
                  translateZ="70"
                  className="text-xl font-bold w-full text-slate-200 flex justify-between items-center"
                >
                  <h2>{title}</h2>
                  {renderStatus(status)}
                </CardItem>
                <CardItem
                  as="div"
                  translateZ="60"
                  className="text-slate-400 w-full  flex items-center !line-clamp-3 justify-between text-sm mt-2"
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
              </Link>
            </CardBody>
          </CardContainer>
        </ListItemWrapper>
      ))}
    </ul>
  );
};

export default ProjectsList;
