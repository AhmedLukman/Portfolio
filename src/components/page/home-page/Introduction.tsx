import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Link } from "@heroui/link";
import SectionWrapper from "../../wrappers/SectionWrapper";
import NextLink from "next/link";
import ManNearComputerImage from "/public/assets/images/man-near-computer.svg";

const Introduction = () => {
  return (
    <SectionWrapper className="flex md:flex-row justify-between gap-5 space-y-0 md:gap-0 flex-col-reverse">
      <div className="md:basis-1/2 self-center">
        <p>
          I&apos;m a{" "}
          <strong className="purple-gradient"> modern developer </strong>
          with a distinguished Diploma in Business Information Technology{" "}
          <FontAwesomeIcon icon={faMedal} /> Beyond academic excellence, I
          possess a rich tapestry of{" "}
          <Link
            as={NextLink}
            underline="always"
            href="/about#certifications"
            color="foreground"
          >
            certifications
          </Link>{" "}
          from top-tier courses and boot-camps, alongside{" "}
          <Link
            underline="always"
            as={NextLink}
            href="/about#recognition"
            color="foreground"
          >
            recognition
          </Link>{" "}
          in various platforms, including national media. My unwavering
          dedication to mastering new skills and solving complex problems fuels
          my passion for programming, making me an ideal candidate anywhere.
        </p>
      </div>
      <div className="relative md:basis-1/2 h-52 md:h-64">
        <Image
          priority
          fill
          src={ManNearComputerImage}
          alt="Developer sitting on a desk that has a computer"
        />
      </div>
    </SectionWrapper>
  );
};

export default Introduction;
