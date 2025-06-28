import SideNavLinks from "./SideNavLinks";
import SideNavHeader from "./SideNavHeader";
import SideNavFooter from "./SideNavFooter";

const SideNavContent = () => {
  return (
    <nav className="flex h-full flex-col justify-between">
      <SideNavHeader />
      <SideNavLinks />
      <SideNavFooter />
    </nav>
  );
};

export default SideNavContent;
