import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Project } from "@/lib/types";
import SectionHeader from "@/components/wrappers/SectionHeader";
import ListItemWrapper from "@/components/wrappers/ListItemWrapper";
import { BorderContainer } from "./BorderContainer";

const Features = ({ project: { features } }: { project: Project }) => {
  return (
    <section className="mt-20">
      <SectionHeader className="text-center">Features</SectionHeader>
      <ul className="text-slate-300 grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {features.map((feature, index) => (
          <ListItemWrapper key={index} index={index}>
            <BorderContainer
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.5rem"
              className="flex-1 rounded-[calc(1.5rem* 0.96)] min-h-20 bg-gradient-to-r from-slate-800 via-purple-900/50 to-slate-800 border-slate-800"
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
