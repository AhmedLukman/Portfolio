import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Introduction = () => {
  return (
    <section>
      <div className="flex justify-between mt-14 h-64">
        <div className="basis-1/2 flex items-center animate-slideInFromLeft">
          <p className=" text-slate-300">
            I&apos;m a{" "}
            <span className="purple-gradient-text">modern developer </span>
            with a distinction <FontAwesomeIcon icon={faMedal} /> in Diploma in
            Business Information Technology. I excel academically, hold numerous
            certifications from courses and boot-camps, and have been featured
            in national media. My commitment to continuous learning and problem
            solving drives my passion as a programmer.
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
      </div>
    </section>
  );
};

export default Introduction;
