"use client"

import { SOCIAL_LINKS } from "@/lib/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Ripple } from "m3-ripple"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-2 pb-10">
      <div>
        {SOCIAL_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="button button--icon-only button--md button--tertiary size-10 min-w-10 overflow-hidden rounded-xl bg-transparent transition duration-150 hover:bg-zinc-300/40 hover:opacity-80 active:bg-zinc-300/40 active:opacity-50 data-[hovered=true]:bg-zinc-300/40 data-[hovered=true]:opacity-80 md:size-10 [&>svg]:m-0"
          >
            <Ripple />
            <FontAwesomeIcon size="xl" className="text-body" icon={link.icon} />
          </Link>
        ))}
      </div>
      <p>&copy; {new Date().getFullYear()} Ahmed Lukman.</p>
    </footer>
  )
}

export default Footer
