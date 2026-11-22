import SectionHeader from "../../wrappers/SectionHeader"
import SectionWrapper from "../../wrappers/SectionWrapper"
import ExperienceList from "./ExperienceList"

const Experience = () => {
  return (
    <SectionWrapper>
      <SectionHeader className="text-center">Experience</SectionHeader>
      <ExperienceList />
      <p className="mt-8 text-center">
        <a
          href="/Ahmed-Lukman-Software-Engineer-Resume.pdf"
          download
          className="underline underline-offset-4 hover:text-pink-300"
        >
          Download my resume
        </a>
      </p>
    </SectionWrapper>
  )
}

export default Experience
