import SideNavContent from "./SideNavContent";

const DesktopSideNav = () => {
  return (
    <aside className="basis-2/12 hidden lg:block px-10 py-4 xl:p-10 shadow shadow-gray-800 rounded-md z-10">
      <SideNavContent />
    </aside>
  );
}

export default DesktopSideNav