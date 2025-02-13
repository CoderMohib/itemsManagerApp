import SiderBarFooter from "../Molecules/SideBarFooter";
import SiderBarHeader from "../Molecules/SidebarHeader";
import NavMenu from "../Molecules/NavMenu";
import { useState, useEffect } from "react";

export default function SideBar() {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div>

      <div className={`sidebar`}>
       <button className="toggle-btn" onClick={()=>{setIsOpen(true)}}><i className="ri-menu-line"></i></button>
        <SiderBarHeader />
        <NavMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        <SiderBarFooter />
      </div>
    </div>
  );
}
