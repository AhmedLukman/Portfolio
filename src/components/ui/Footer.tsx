"use client"

import { SOCIAL_LINKS } from "@/lib/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@heroui/button"
import { Link } from "@heroui/link"

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-2 pb-10">
      <div>
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
            <FontAwesomeIcon size="xl" className="text-body" icon={link.icon} />
          </Button>
        ))}
      </div>
      <p>&copy; {new Date().getFullYear()} Ahmed Lukman.</p>
    </footer>
  )
}

export default Footer
