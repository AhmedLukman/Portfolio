import SideNavHeader from "./SideNavHeader";
import SideNavLinks from "./SideNavLinks";
import SideNavFooter from "./SideNavFooter";

const SideNav = () => {
  return (
    <aside className=" basis-2/12 flex flex-col justify-between p-10 bg-black/15 rounded-md">
      <SideNavHeader />
      <SideNavLinks />
      <SideNavFooter />
    </aside>
  );
};

export default SideNav;
