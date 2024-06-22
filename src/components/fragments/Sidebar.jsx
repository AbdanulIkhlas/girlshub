import React from "react";
import UILogo from "../ui/UILogo";
import MenuOnNavbar from "./MenuOnNavbar";

const Sidebar = ({ isVisible, sidebarRef, onMenuClick }) => {
  return (
    <div
      ref={sidebarRef}
      className={`absolute top-0 left-0 z-[9999] w-[80%] py-8 bg-white h-screen shadow-firstShadow transition-transform ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <UILogo customClassName="" />
      <h1 className="text-base mt-6 text-[#8391A1] font-jakartaSans px-4">
        MENU UTAMA
      </h1>
      <section className="mt-8">
        <MenuOnNavbar onMenuClick={onMenuClick} />
      </section>
    </div>
  );
};

export default Sidebar;
