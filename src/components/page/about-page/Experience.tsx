import SectionHeader from "../../wrappers/SectionHeader"
import SectionWrapper from "../../wrappers/SectionWrapper"
import ExperienceList from "./ExperienceList"

const Experience = () => {
  return (
    <SectionWrapper>
      <SectionHeader className="text-center">Experience</SectionHeader>
      <ExperienceList />
    </SectionWrapper>
  )
}

export default Experience
