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
  const isActive = pathname === link.path;
  return (
    <Button
      key={link.path}
      startContent={
        <FontAwesomeIcon
          className={cn(
            "!text-slate-400 group-hover:!text-white !transition-all !duration-200 h-4 mr-1",
            {
              "!text-white": isActive,
            }
          )}
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
      variant={isActive ? "solid" : "light"}
      color="secondary"
      className={cn(
        "!text-slate-400 group hover:!text-white hover:!bg-[#262c35] !ml-0 hover:!ml-5 !transition-all !duration-200 w-full justify-start",
        {
          "hover:!opacity-100 shadow shadow-gray-800 bg-[#262c35] hover:!ml-0 border border-gray-800 from-purple-700/20 to-purple-500/20 !text-white":
            isActive,
        }
      )}
      isExternal={isSocial}
    >
      {link.name}
    </Button>
  );
};

export default SideNavLinkButton;
