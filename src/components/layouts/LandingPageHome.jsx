import React from "react";
import { Link } from "react-router-dom";
import ButtonCustom from "../ui/ButtonCustom";
import MiniCard from "../fragments/MiniCard";

const LandingPageHome = () => {
  return (
    <div className="mt-12 font-ubuntu md:flex md:relative md:h-[380px] md:mt-20">
      {/* section kiri, text */}
      <section className="w-full md:w-[50%]">
        <h1 className="text-[27px] text-center font-bold text-bigText px-10">
          Empowering Young Women Everywhere
        </h1>
        <h3 className="text-center text-textColor px-[50px] mt-4 text-[14px] md:px-[70px]">
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
      </section>
      {/* section kanann, gambar */}
      <section className="w-full md:w-[50%]">
        <section className="relative min-h-[300px]  mt-14 px-2 md:mt-0">
          <div className="absolute w-[95.5%] min-h-[300px] z-40 ">
            <MiniCard
              useImage={true}
              title="100% Business Growth"
              rating="4.9"
              reviews="1520 Reviews"
              customClassName={`absolute z-50 top-0 right-40 w-[160px]`}
            />
            <MiniCard
              useImage={false}
              title="1000,000 Happy Clients"
              rating="4.9"
              reviews="15k Reviews"
              customClassName={`absolute z-50 top-40 right-44 w-[160px] mt-4`}
            />
            <img
              src="./image/frame-home-1.png"
              alt="frame 1"
              className="absolute z-40 top-0 right-0 w-[120px]"
            />
            <img
              src="./image/frame-home-2.png"
              alt="frame 2"
              className="absolute z-40 top-14 right-[170px] w-[140px]"
            />
            <img
              src="./image/photo-home-section.png"
              alt="photo"
              className="absolute z-50 top-7 right-8 w-[200px] h-[200px] bg-white rounded-full shadow-photoShadow"
            />
          </div>
          {/* rectangle mobile*/}
          <div className="absolute w-[95.5%] min-h-[300px] z-30 bottom-0 md:hidden">
            <img
              src="./image/rectangle-left.png"
              alt="rectangle left"
              className="absolute left-0 bottom-0 z-20"
            />
            <img
              src="./image/rectangle-right.png"
              alt="rectangle right"
              className="absolute right-0 bottom-0 z-10"
            />
          </div>
        </section>
      </section>
      {/* rectangle dekstop*/}
      <section className="hidden absolute w-full min-h-[300px] z-30 bottom-0 md:block">
        <img
          src="./image/rectangle-left.png"
          alt="rectangle left"
          className="absolute left-0 bottom-0 z-20"
        />
        <img
          src="./image/rectangle-right.png"
          alt="rectangle right"
          className="absolute right-0 bottom-0 z-10 md:w-[500px]"
        />
      </section>
    </div>
  );
};

export default LandingPageHome;
