import React from "react";
import { PAGE_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import SideNavLinkButton from "./SideNavLinkButton";

const SideNavLinks = () => {
  return (
    <nav className="flex flex-col justify-between gap-10 -mt-5">
      <div className="flex flex-col gap-3">
        <h2 className="text-white">Pages</h2>
        <ul className="flex flex-col gap-3">
          {PAGE_LINKS.map((link) => (
            <SideNavLinkButton key={link.path} link={link} />
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-white">Socials</h2>
        <ul className="flex flex-col gap-3">
          {SOCIAL_LINKS.map((link) => (
            <SideNavLinkButton key={link.path} link={link} isSocial />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideNavLinks;