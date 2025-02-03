import SiderBarFooter from "../Molecules/SideBarFooter";
import SiderBarHeader from "../Molecules/SidebarHeader";
import NavMenu from "../Molecules/NavMenu";

export default function SideBar() {
  return (
    <div className="sidebar">
      <SiderBarHeader />
      <NavMenu />
      <SiderBarFooter />
    </div>
  );
}
