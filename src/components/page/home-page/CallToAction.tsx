import HeroButton from "@/components/ui/HeroButton"
import { faMessage } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SectionWrapper from "../../wrappers/SectionWrapper"
import { BackgroundGradient } from "./BackgroundGradient"

const CallToAction = () => {
  return (
    <SectionWrapper className="min-[768px]:mt-20!">
      <BackgroundGradient className="flex flex-col items-center gap-3 rounded-[22px] bg-black/70 p-4 sm:p-10">
        <h3 className="text-center text-xl font-bold">
          Let&apos;s Work Together
        </h3>
        <p className="mb-2 max-w-prose text-center text-lg">
          Excited to start a new project? Collaborate on an existing one? Or
          just have a chat? Get in touch today!
        </p>
        <footer className="flex justify-center">
          <HeroButton
            href="/contact"
            role="link"
            endContent={<FontAwesomeIcon icon={faMessage} />}
          >
            Contact me
          </HeroButton>
        </footer>
      </BackgroundGradient>
    </SectionWrapper>
  )
}

export default CallToAction
