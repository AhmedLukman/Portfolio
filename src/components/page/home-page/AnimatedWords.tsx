import SectionWrapper from "../../wrappers/SectionWrapper"
import { FlipWords } from "./FlipWords"

const WEB_QUALITIES = [
  "Performant",
  "Responsive",
  "Aesthetic",
  "Functional",
  "Accessible",
  "Semantic",
]

const AnimatedWords = () => {
  return (
    <SectionWrapper>
      <p className="text-2xl text-slate-400">
        Let&apos;s build <br />
        <FlipWords words={WEB_QUALITIES} />
      </p>
    </SectionWrapper>
  )
}

export default AnimatedWords
