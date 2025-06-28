import SideNavFooter from "./SideNavFooter"
import SideNavHeader from "./SideNavHeader"
import SideNavLinks from "./SideNavLinks"

const SideNavContent = () => {
  return (
    <nav className="flex h-full flex-col justify-between">
      <SideNavHeader />
      <SideNavLinks />
      <SideNavFooter />
    </nav>
  )
}

export default SideNavContent
