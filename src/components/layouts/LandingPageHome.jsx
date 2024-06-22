import React from "react";
import ButtonCustom from "../ui/ButtonCustom";
import { Link } from "react-router-dom";

const LandingPageHome = () => {
  return (
    <div className="border border-black mt-12 font-ubuntu">
      <h1 className="text-[27px] text-center font-bold text-bigText px-10">
        Empowering Young Women Everywhere
      </h1>
      <h3 className="text-center text-textColor px-[50px] mt-4 text-[14px]">
        Boost Your Business Brand Awareness With Us
      </h3>
      <div className="flex flex-col items-center justify-center mt-7">
        <Link to="/">
          <ButtonCustom customClassName="bg-gradient-to-right text-white">
            Join Now
          </ButtonCustom>
        </Link>
        <Link to="/">
          <ButtonCustom customClassName="border border-borderPink50 text-bigText mt-4">
            Collaboration
          </ButtonCustom>
        </Link>
      </div>
    </div>
  );
};

export default LandingPageHome;
