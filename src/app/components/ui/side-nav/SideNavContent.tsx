import SideNavLinks from "./SideNavLinks";
import SideNavHeader from "./SideNavHeader";
import SideNavFooter from "./SideNavFooter";

const SideNavContent = () => {
  return (
    <nav className="flex flex-col justify-between h-full">
      <SideNavHeader />
      <SideNavLinks />
      <SideNavFooter />
    </nav>
  );
};

export default SideNavContent;