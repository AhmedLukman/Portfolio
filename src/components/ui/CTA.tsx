import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";
import { Button, Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_LINKS } from "@/lib/constants";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

const CTA = () => {
  return (
    <section className="mt-24">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black/70 flex flex-col items-center gap-3">
        <header>
          <h2 className="text-xl text-slate-200 font-bold text-center">
            Let&apos;s Work Together
          </h2>
        </header>
        <p className="text-lg text-slate-300 text-center mb-2 max-w-prose">
          Excited to start a new project? Collaborate on an existing one? Or
          just have a chat? Get in touch today!
        </p>
        <footer className="flex w-full">
          <div className="basis-1/3" />
          <div className="flex basis-1/3 justify-center">
            <Button as={Link} href="/contact" endContent={<FontAwesomeIcon icon={faMessage} />}>
              Contact me
            </Button>
          </div>
          <div className="basis-1/3 flex justify-end gap-1.5">
            {SOCIAL_LINKS.map((link) => (
              <Button
                key={link.name}
                variant="light"
                as={Link}
                href={link.path}
                isExternal
                isIconOnly
                aria-label={link.name}
              >
                <FontAwesomeIcon
                  size="xl"
                  className="text-slate-200"
                  icon={link.icon}
                />
              </Button>
            ))}
          </div>
        </footer>
      </BackgroundGradient>
    </section>
  );
};

export default CTA;
