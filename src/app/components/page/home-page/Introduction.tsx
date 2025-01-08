import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Introduction = () => {
  return (
    <section className="flex md:flex-row justify-between mt-20 gap-5 md:gap-0 flex-col-reverse">
      <div className="md:basis-1/2 self-center">
        <p className=" text-slate-300">
          I&apos;m a{" "}
          <strong className="purple-gradient"> modern developer </strong>
          with a distinguished Diploma in Business Information Technology{" "}
          <FontAwesomeIcon icon={faMedal} /> Beyond academic excellence, I
          possess a rich tapestry of certifications from top-tier courses and
          boot-camps, alongside recognition in national media. My unwavering
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
