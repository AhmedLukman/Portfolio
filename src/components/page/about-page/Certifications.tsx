import SectionHeader from "../../wrappers/SectionHeader"
import SectionWrapper from "../../wrappers/SectionWrapper"
import CertificationsList from "./CertificationsList"

const Certifications = () => {
  return (
    <SectionWrapper>
      <SectionHeader id="certifications" className="text-center">
        Certifications &amp; Achievements
      </SectionHeader>
      <CertificationsList />
    </SectionWrapper>
  )
}

export default Certifications
