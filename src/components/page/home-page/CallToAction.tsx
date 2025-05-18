import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";
import { Button } from "@heroui/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import SectionWrapper from "../../wrappers/SectionWrapper";

const CallToAction = () => {
  return (
    <SectionWrapper className="min-[768px]:mt-20">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black/70 flex flex-col items-center gap-3">
        <h3 className="text-xl font-bold text-center">
          Let&apos;s Work Together
        </h3>
        <p className="text-lg text-center mb-2 max-w-prose">
          Excited to start a new project? Collaborate on an existing one? Or
          just have a chat? Get in touch today!
        </p>
        <footer className="flex justify-center">
          <Button
            as={Link}
            href="/contact"
            role="link"
            endContent={<FontAwesomeIcon icon={faMessage} />}
          >
            Contact me
          </Button>
        </footer>
      </BackgroundGradient>
    </SectionWrapper>
  );
};

export default CallToAction;
