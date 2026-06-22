import { faMedal } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import ManNearComputerImage from "public/assets/images/man-near-computer.svg"
import SectionWrapper from "../../wrappers/SectionWrapper"

const introLinkClassName =
  "inline-flex items-center font-normal text-body underline decoration-current underline-offset-4 transition-opacity hover:opacity-80 active:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"

const Introduction = () => {
  return (
    <SectionWrapper className="flex flex-col-reverse justify-between gap-5 space-y-0 md:flex-row md:gap-0">
      <div className="self-center md:basis-1/2">
        <p>
          I&apos;m a{" "}
          <strong className="purple-gradient"> modern developer </strong>
          with a distinguished Diploma in Business Information Technology{" "}
          <FontAwesomeIcon icon={faMedal} /> Beyond academic excellence, I
          possess a rich tapestry of{" "}
          <Link
            href="/about#certifications"
            className={introLinkClassName}
          >
            certifications
          </Link>{" "}
          from top-tier courses and boot-camps, alongside{" "}
          <Link
            href="/about#recognition"
            className={introLinkClassName}
          >
            recognition
          </Link>{" "}
          in various platforms, including national media. My unwavering
          dedication to mastering new skills and solving complex problems fuels
          my passion for programming, making me an ideal candidate anywhere.
        </p>
      </div>
      <div className="relative h-52 md:h-64 md:basis-1/2">
        <Image
          priority
          fill
          src={ManNearComputerImage}
          alt="Developer sitting on a desk that has a computer"
        />
      </div>
    </SectionWrapper>
  )
}

export default Introduction
