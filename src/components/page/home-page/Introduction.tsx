import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Introduction = () => {
  return (
    <section className="flex justify-between mt-14 h-64">
      <div className="basis-1/2 flex items-center animate-slideInFromLeft">
        <p className=" text-slate-300">
          I&apos;m a <strong className="purple-gradient-text"> modern developer </strong>
          with a distinguished Diploma in Business Information Technology{" "}
          <FontAwesomeIcon icon={faMedal} /> . Beyond academic excellence, I
          possess a rich tapestry of certifications from top-tier courses and
          boot-camps, alongside recognition in national media. My unwavering
          dedication to mastering new skills and solving complex problems fuels
          my passion for programming, making me an ideal candidate anywhere.
        </p>
      </div>
      <div className="relative basis-1/2 animate-slideInFromRight">
        <Image
          priority
          fill
          src="/assets/images/me.svg"
          alt="Animated picture of a white male sitting on a desk that has a computer"
        />
      </div>
    </section>
  );
};

export default Introduction;
