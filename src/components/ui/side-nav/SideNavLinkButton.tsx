"use client"

import { useNavigation } from "@/lib/contexts/NavigationContext"
import { getExternalLinkProps } from "@/lib/utils"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@heroui/button"
import { cn } from "@heroui/theme"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

const SideNavLinkButton = ({
  link,
  isSocial = false,
}: {
  link: { name: string; path: string; icon: IconDefinition }
  isSocial?: boolean
}) => {
  const pathname = usePathname()
  const { closeMobileMenu } = useNavigation()

  const prevPathRef = useRef(pathname)

  useEffect(() => {
    // Only close if pathname actually changed (not on initial mount)
    if (prevPathRef.current !== pathname) {
      closeMobileMenu()
    }
    prevPathRef.current = pathname
  }, [pathname, closeMobileMenu])

  const isActive =
    link.path === "/" ? pathname === link.path : pathname.startsWith(link.path)

  const baseButtonClasses =
    "text-slate-400! group bg-transparent! w-full justify-start lg:hover:opacity-100!"
  const hoverClasses =
    "lg:hover:text-white! lg:hover:bg-linear-to-b! lg:hover:from-[#653e80]! lg:hover:to-[#7a5299]! ml-0! lg:hover:ml-5! transition-[margin,background]! duration-200!"
  const activeClasses =
    "lg:ml-5! shadow-[0_8px_16px_rgb(0_0_0/0.3)] bg-linear-to-b from-[#653e80] to-[#7a5299] text-white!"

  const iconClasses = cn(
    "text-slate-400! group-hover:text-white! transition-all! duration-200! h-4! mr-1",
    { "text-white!": isActive },
  )

  const externalIconClasses =
    "ml-auto opacity-0! group-hover:opacity-100! transition! duration-200!"

  return (
    <Button
      startContent={
        <FontAwesomeIcon className={iconClasses} icon={link.icon} />
      }
      endContent={
        isSocial && (
          <FontAwesomeIcon
            className={externalIconClasses}
            icon={faArrowUpRightFromSquare}
          />
        )
      }
      as={Link}
      role="link"
      href={link.path}
      className={cn(baseButtonClasses, hoverClasses, {
        [activeClasses]: isActive,
      })}
      {...getExternalLinkProps(isSocial)}
    >
      {link.name}
    </Button>
  )
}

export default SideNavLinkButton
