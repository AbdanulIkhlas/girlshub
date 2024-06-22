import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const MenuOnNavbar = () => {
  return (
    <div>
      <ul className="font-ubuntu flex text-textColor flex-col gap-4 md:flex-row md:text-base md:gap-8 md:w-full">
        <li className="w-full  py-4 px-10 hover:bg-slate-200 md:py-0 md:px-0 md:hover:bg-white">
          <a href="#">
            <div className="flex gap-6">
              <img src="./svg/collaboration-icon.svg" className="md:hidden" />
              <p className="pe-2">Collaboration</p>
            </div>
          </a>
        </li>
        <li className="w-full py-4 px-10 hover:bg-slate-200 md:py-0 md:px-0 md:hover:bg-white">
          <a href="#">
            <div className="flex gap-6">
              <img src="./svg/join-talent-icon.svg" className="md:hidden" />
              <p className="md:w-[90px]">Join Talent</p>
            </div>
          </a>
        </li>
        <li className="w-full py-4 px-10 hover:bg-slate-200 md:py-0 md:px-0 md:hover:bg-white">
          <LinkScroll
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="flex gap-6 cursor-pointer">
              <img src="./svg/about-us-icon.svg" className="md:hidden" />
              <p>About Us</p>
            </div>
          </LinkScroll>
        </li>
      </ul>
    </div>
  );
};

export default MenuOnNavbar;
