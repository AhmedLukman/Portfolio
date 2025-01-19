import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Link } from "@nextui-org/link";

const Introduction = () => {
  return (
    <section className="flex md:flex-row justify-between mt-20 gap-5 md:gap-0 flex-col-reverse">
      <div className="md:basis-1/2 self-center">
        <p className=" text-slate-300">
          I&apos;m a{" "}
          <strong className="purple-gradient font-normal"> modern developer </strong>
          with a distinguished Diploma in Business Information Technology{" "}
          <FontAwesomeIcon icon={faMedal} /> Beyond academic excellence, I
          possess a rich tapestry of{" "}
          <Link
            showAnchorIcon
            underline="always"
            isExternal
            href="/about#certifications"
            color="foreground"
          >
            certifications
          </Link>{" "}
          from top-tier courses and boot-camps, alongside{" "}
          <Link
            showAnchorIcon
            underline="always"
            isExternal
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
          sizes="(min-width: 768px) 50vw, 100vw"
          fill
          src="/assets/images/man-near-computer.svg"
          alt="Animated picture of a white male sitting on a desk that has a computer"
        />
      </div>
    </section>
  );
};

export default Introduction;
