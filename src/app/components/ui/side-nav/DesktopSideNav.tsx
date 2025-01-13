import SideNavContent from "./SideNavContent";

const DesktopSideNav = () => {
  return (
    <aside className="basis-2/12 hidden lg:flex flex-col justify-between p-10 shadow shadow-gray-800 rounded-md z-10">
      <SideNavContent />
    </aside>
  );
}

export default DesktopSideNav