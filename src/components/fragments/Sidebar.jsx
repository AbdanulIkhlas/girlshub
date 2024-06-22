import React from "react";
import UILogo from "../ui/UILogo";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Sidebar = ({ isVisible, sidebarRef }) => {
  return (
    <div
      ref={sidebarRef}
      className={`absolute top-0 left-0 z-10 w-[80%] py-8 bg-white h-screen shadow-firstShadow transition-transform ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <UILogo customClassName="" />
      <h1 className="text-base mt-6 text-[#8391A1] font-jakartaSans px-4">
        MENU UTAMA
      </h1>
      <ul className="font-ubuntu mt-8 flex flex-col gap-4">
        <li className="w-full py-4 px-10 hover:bg-slate-200">
          <Link to="/">
            <div className="flex gap-6">
              <img src="./svg/collaboration-icon.svg" />
              <p>Collaboration</p>
            </div>
          </Link>
        </li>
        <li className="w-full py-4 px-10 hover:bg-slate-200">
          <Link to="/">
            <div className="flex gap-6">
              <img src="./svg/join-talent-icon.svg" />
              <p>Join Talent</p>
            </div>
          </Link>
        </li>
        <li className="w-full py-4 px-10 hover:bg-slate-200">
          <LinkScroll
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="flex gap-6">
              <img src="./svg/about-us-icon.svg" />
              <p>About Us</p>
            </div>
          </LinkScroll>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
