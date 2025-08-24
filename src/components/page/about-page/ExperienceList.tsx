import IlabAfrica from "public/assets/images/ilabafrica.jpg"
import ThomsonReuters from "public/assets/images/thomsonreuters.png"
import Trinetium from "public/assets/images/trinetium.jpeg"
import Yoonka from "public/assets/images/yoonka.jpeg"
import ExperienceItem from "./ExperienceItem"

const EXPERIENCE = [
  {
    title: "Front-end Developer",
    type: "Part-Time",
    description: "To be updated",
    company: "Thomson Reuters",
    startDate: new Date(2024, 9),
    companyLogo: ThomsonReuters,
  },
  {
    title: "Front-end Developer",
    type: "Part-Time",
    description: "To be updated",
    company: "Yoonka",
    startDate: new Date(2024, 9),
    companyLogo: Yoonka,
  },
  {
    title: "Front-end Developer",
    type: "Internship",
    description:
      "Collaborated adeptly with UI/UX designers and fellow engineers to craft clean, high-performance front-end web solutions. Recognized as the Lead Intern, entrusted with independent design responsibilities due to a trusted sense of aesthetic.",
    company: "@iLabAfrica",
    startDate: new Date(2023, 1),
    endDate: new Date(2023, 7),
    companyLogo: IlabAfrica,
  },
  {
    title: "Front-end Developer",
    type: "Internship",
    description:
      "Developed visually appealing UI components for the web, integrating dynamic features such as drag and drop, and seamlessly incorporated APIs using Next.js and Express. Recognized for achieving high performance and receiving praise for design excellence.",
    company: "Trinetium DMCC",
    startDate: new Date(2022, 6),
    endDate: new Date(2022, 9),
    companyLogo: Trinetium,
  },
]

const ExperienceList = () => {
  return (
    <div className="relative w-full">
      {/* Timeline center line - hidden on mobile */}
      <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-slate-500 lg:block"></div>

      <ul className="space-y-12">
        {EXPERIENCE.map((item, index) => (
          <ExperienceItem
            experienceCount={EXPERIENCE.length}
            key={index}
            item={{ ...item, index }}
          />
        ))}
      </ul>
    </div>
  )
}

export default ExperienceList
