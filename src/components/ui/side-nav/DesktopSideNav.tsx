import SideNavContent from "./SideNavContent"

const DesktopSideNav = () => {
  return (
    <aside className="z-10 hidden basis-3/12 rounded-md px-10 py-4 shadow shadow-gray-800 lg:block xl:p-10 2xl:basis-2/12">
      <SideNavContent />
    </aside>
  )
}

export default DesktopSideNav
