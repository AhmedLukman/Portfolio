import SectionHeader from "../../wrappers/SectionHeader"
import SectionWrapper from "../../wrappers/SectionWrapper"
import RecognitionList from "./RecognitionList"

const Recognition = () => {
  return (
    <SectionWrapper>
      <SectionHeader id="recognition" className="text-center">
        Recognition
      </SectionHeader>
      <RecognitionList />
    </SectionWrapper>
  )
}

export default Recognition
