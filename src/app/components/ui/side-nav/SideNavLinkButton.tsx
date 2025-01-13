"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { cn } from "@nextui-org/theme";
import { usePathname } from "next/navigation";

const SideNavLinkButton = ({
  link,
  isSocial = false,
}: {
  link: { name: string; path: string; icon: IconDefinition };
  isSocial?: boolean;
}) => {
  const pathname = usePathname();
  const isActive =
    link.path === "/" ? pathname === link.path : pathname.startsWith(link.path);
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
            className="ml-auto !opacity-0 group-hover:!opacity-100 !transition !duration-200"
            icon={faArrowUpRightFromSquare}
          />
        )
      }
      as={Link}
      href={link.path}
      variant={isActive ? "solid" : "light"}
      className={cn(
        "!text-slate-400 group lg:hover:!text-white lg:hover:!bg-[#7a5299] !ml-0 lg:hover:!ml-5 !transition-all !duration-200 w-full justify-start",
        {
          "lg:hover:!opacity-100 lg:!ml-5 shadow-[0_8px_16px_rgb(0_0_0/0.3)] bg-gradient-to-b from-[#653e80] to-[#7a5299] !text-white":
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
