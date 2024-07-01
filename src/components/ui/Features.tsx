import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BorderContainer } from "./MovingBorder";
import ProjectItemWrapper from "./ProjectItemWrapper";

const Features = () => {
  return (
    <section className="mt-20">
      <h2 className=" text-2xl text-center mb-10 text-slate-200 font-bold">
        Features
      </h2>
      <ol className="text-slate-300 grid grid-cols-2 gap-5">
        <ProjectItemWrapper index={0}>
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
              <p className="text-white">
                Protects user data with cutting-edge encryption and security protocols.
              </p>
            </div>
          </BorderContainer>
        </ProjectItemWrapper>
        <ProjectItemWrapper index={1}>
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
              <p className="text-white">
                Ensures a responsive and seamless user experience across all
                devices.
              </p>
            </div>
          </BorderContainer>
        </ProjectItemWrapper>
        <ProjectItemWrapper index={2}>
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
              <p className="text-white">
                Offers an easy-to-navigate interface for enhanced user
                engagement
              </p>
            </div>
          </BorderContainer>
        </ProjectItemWrapper>
        <ProjectItemWrapper index={3}>
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
              <p className="text-white">
                Delivers instant feedback and updates ensuring users are highly informed.
              </p>
            </div>
          </BorderContainer>
        </ProjectItemWrapper>
      </ol>
    </section>
  );
};

export default Features;
