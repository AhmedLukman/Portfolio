import { EXPERIENCE } from "@/lib/data";
import ExperienceItem from "./ExperienceItem";

const ExperienceList = () => {
  return (
    <div className="relative w-full">
      {/* Timeline center line - hidden on mobile */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-500 hidden lg:block"></div>

      <ul className="space-y-12">
        {EXPERIENCE.map((item, index) => (
          <ExperienceItem key={index} item={{ ...item, index }} />
        ))}
      </ul>
    </div>
  );
};

export default ExperienceList;
