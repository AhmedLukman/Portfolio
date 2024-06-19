'use client'

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Link, cn } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";

const SideNavLinkButton = ({
  link,
  isSocial = false,
}: {
  link: { name: string; path: string; icon: IconDefinition };
  isSocial?: boolean;
}) => {
  const pathname = usePathname();
  return (
    <Button
      key={link.path}
      startContent={
        <FontAwesomeIcon
          className={cn("!text-slate-400 group-hover:!text-white h-4 mr-1", {
            "!text-white": pathname === link.path,
          })}
          icon={link.icon}
        />
      }
      endContent={
        isSocial && (
          <FontAwesomeIcon
            className="group-hover:block hidden ml-auto"
            icon={faArrowUpRightFromSquare}
          />
        )
      }
      as={Link}
      href={link.path}
      variant={pathname === link.path ? "solid" : "light"}
      color="secondary"
      className={cn("!text-slate-400 group hover:!text-white justify-start", {
        "hover:!opacity-100 shadow-md shadow-gray-900 !bg-transparent bg-gradient-to-b from-purple-700/20 to-purple-500/20 !pointer-events-none !text-white":
          pathname === link.path,
      })}
      isExternal={isSocial}
    >
      {link.name}
    </Button>
  );
};

export default SideNavLinkButton;
