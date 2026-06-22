import { faMessage } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
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
          <Link
            href="/contact"
            className="button button--md button--tertiary h-10 min-w-20 rounded-xl bg-zinc-300 font-normal text-black transition duration-150 hover:bg-zinc-300 hover:opacity-80 active:bg-zinc-300 data-[hovered=true]:bg-zinc-300 data-[hovered=true]:opacity-80 data-[pressed=true]:bg-zinc-300 md:h-10 [&>svg]:mx-0"
          >
            Contact me
            <FontAwesomeIcon icon={faMessage} />
          </Link>
        </footer>
      </BackgroundGradient>
    </SectionWrapper>
  )
}

export default CallToAction
