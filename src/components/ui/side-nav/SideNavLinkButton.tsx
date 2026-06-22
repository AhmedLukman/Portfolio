"use client"

import { useNavigation } from "@/lib/contexts/NavigationContext"
import { getExternalLinkProps } from "@/lib/utils"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { cn } from "@heroui/react"
import { Ripple } from "m3-ripple"
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

  return (
    <Link
      role="link"
      href={link.path}
      className={cn(
        "button button--full-width button--md button--tertiary",
        "group h-10 min-w-20 w-full justify-start overflow-hidden rounded-xl bg-transparent! font-normal text-slate-400! transition-[margin,background]! duration-200! md:h-10 lg:hover:ml-5! lg:hover:bg-linear-to-b! lg:hover:from-[#653e80]! lg:hover:to-[#7a5299]! lg:hover:text-white! lg:hover:opacity-100!",
        "relative ml-0!",
        {
          "bg-linear-to-b from-[#653e80] to-[#7a5299] text-white! shadow-[0_8px_16px_rgb(0_0_0/0.3)] lg:ml-5!":
            isActive,
        },
      )}
      {...getExternalLinkProps(isSocial)}
    >
      <Ripple />
      <FontAwesomeIcon
        className={cn(
          "my-0! mr-1! ml-0! h-4! text-slate-400! transition-all! duration-200! group-hover:text-white!",
          { "text-white!": isActive },
        )}
        icon={link.icon}
      />
      {link.name}
      {isSocial && (
        <FontAwesomeIcon
          className="m-0! ml-auto! opacity-0! transition! duration-200! group-hover:opacity-100!"
          icon={faArrowUpRightFromSquare}
        />
      )}
    </Link>
  )
}

export default SideNavLinkButton
