import SideNavLinks from "./SideNavLinks";
import SideNavHeader from "./SideNavHeader";
import SideNavFooter from "./SideNavFooter";

const SideNavContent = () => {
  return (
    <nav>
      <SideNavHeader />
      <SideNavLinks />
      <SideNavFooter />
    </nav>
  );
};

export default SideNavContent;