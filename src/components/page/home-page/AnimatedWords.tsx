import { WEB_QUALITIES } from "@/lib/data"
import SectionWrapper from "../../wrappers/SectionWrapper"
import { FlipWords } from "./FlipWords"

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
