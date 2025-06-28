import { PAGE_LINKS, SOCIAL_LINKS } from "@/lib/constants"
import SideNavLinkButton from "./SideNavLinkButton"

const SideNavLinks = () => {
  return (
    <div className="flex h-full flex-col justify-evenly">
      <div className="flex flex-col gap-3">
        <h3 className="text-white">Pages</h3>
        <ul className="flex flex-col gap-3">
          {PAGE_LINKS.map((link) => (
            <li key={link.path}>
              <SideNavLinkButton link={link} />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-white">Socials</h3>
        <ul className="flex flex-col gap-3">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.path}>
              <SideNavLinkButton link={link} isSocial />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideNavLinks
