import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import ItemWrapper from "../../wrappers/ItemWrapper";
import { CardBody, CardContainer, CardItem } from "./3DCard";
import StatusIcon from "./StatusIcon";
import SectionWrapper from "@/components/wrappers/SectionWrapper";

const ProjectsList = () => {
  return (
    <SectionWrapper>
      <ul className="justify-between w-full grid grid-cols-1 md:grid-cols-2">
        {PROJECTS.map(
          (
            { overview: { title, description, status }, image, route },
            index
          ) => (
            <ItemWrapper key={title} index={index}>
              <CardContainer>
                <CardBody className="  relative group/card shadow-[0_8px_16px_rgb(0_0_0/0.3)] border border-white/[0.1] w-[21rem] xl:w-[26rem] h-auto rounded-xl p-6   ">
                  <Link href={route} className="block">
                    <CardItem
                      translateZ="70"
                      className="text-xl font-bold w-full text-slate-200 flex justify-between items-center"
                    >
                      <h2>{title}</h2>
                      <StatusIcon status={status} />
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
                        className=" object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={title}
                      />
                    </CardItem>
                  </Link>
                </CardBody>
              </CardContainer>
            </ItemWrapper>
          )
        )}
      </ul>
    </SectionWrapper>
  );
};

export default ProjectsList;
