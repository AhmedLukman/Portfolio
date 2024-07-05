import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BorderContainer } from "./MovingBorder";
import ListItemWrapper from "./ListItemWrapper";
import SectionHeader from "./SectionHeader";
import { Project } from "@/lib/types";

const Features = ({ project: { features } }: { project: Project }) => {
  return (
    <section className="mt-20">
      <SectionHeader className="text-center">Features</SectionHeader>
      <ul className="text-slate-300 grid grid-cols-2 gap-5 mt-10">
        {features.map((feature, index) => (
          <ListItemWrapper key={index} index={index}>
            <BorderContainer
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.5rem"
              style={{
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.5rem* 0.96)`,
              }}
              className="flex-1 bg-gradient-to-r from-slate-800 via-purple-900/50 to-slate-800 border-slate-800"
            >
              <div className="flex gap-3 items-center w-full p-5">
                <FontAwesomeIcon size="xl" icon={faCircleCheck} />
                <p className="text-white">{feature}</p>
              </div>
            </BorderContainer>
          </ListItemWrapper>
        ))}
      </ul>
    </section>
  );
};

export default Features;
