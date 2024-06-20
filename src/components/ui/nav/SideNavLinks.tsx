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
            <li key={link.path}>
              <SideNavLinkButton link={link} />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-white">Socials</h2>
        <ul className="flex flex-col gap-3">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.path}>
              <SideNavLinkButton link={link} isSocial />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideNavLinks;
