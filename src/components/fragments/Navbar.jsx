import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import UILogo from "../ui/UILogo";
import MenuOnNavbar from "./MenuOnNavbar";

const Navbar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleMenuClick = () => {
    setSidebarVisible(false);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarVisible]);

  return (
    <div>
      <header className="w-full font-ubuntu px-5 py-5">
        {/* view mobile */}
        <section className="flex gap-1 items-center md:hidden">
          <img
            src="./svg/hamburger-icon.svg"
            alt="icon sidebar"
            onClick={toggleSidebar}
            className="cursor-pointer"
          />
          <UILogo />
          <Sidebar
            isVisible={isSidebarVisible}
            sidebarRef={sidebarRef}
            onMenuClick={handleMenuClick}
          />
        </section>

        {/* view desktop */}
        <section className="hidden md:flex gap-4 items-center lg:px-20 lg:gap-14">
          <UILogo />
          <section>
            <MenuOnNavbar onMenuClick={handleMenuClick} />
          </section>
        </section>
      </header>
    </div>
  );
};

export default Navbar;
