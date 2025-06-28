import { EXPERIENCE } from "@/lib/data"
import ExperienceItem from "./ExperienceItem"

const ExperienceList = () => {
  return (
    <div className="relative w-full">
      {/* Timeline center line - hidden on mobile */}
      <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-slate-500 lg:block"></div>

      <ul className="space-y-12">
        {EXPERIENCE.map((item, index) => (
          <ExperienceItem key={index} item={{ ...item, index }} />
        ))}
      </ul>
    </div>
  )
}

export default ExperienceList
