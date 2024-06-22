import React from "react";
import ButtonCustom from "../ui/ButtonCustom";
import MiniCard from "../fragments/MiniCard";

const LandingPageHome = () => {
  return (
    <div className="mt-12 font-ubuntu md:flex md:relative md:h-[380px] md:mt-20 lg:h-[470px]">
      {/* section kiri, text */}
      <section className="w-full md:w-[50%] lg:ps-[65px]">
        <h1 className="text-[27px] text-center font-bold text-bigText px-10 lg:text-left lg:text-[48px]">
          Empowering Young Women Everywhere
        </h1>
        <h3 className="text-center text-textColor px-[55px] mt-4 text-[14px] md:px-[70px] lg:text-left lg:text-[19px] lg:px-0 lg:ps-[40px] lg:pe-[300px]">
          Boost Your Business Brand Awareness With Us
        </h3>
        <div className="relative z-50 flex flex-col items-center justify-center mt-7 lg:flex-row lg:mt-24 lg:gap-6 lg:justify-start lg:pl-10">
          <a href="#">
            <ButtonCustom customClassName="bg-gradient-to-right text-white cursor-pointer">
              Join Now
            </ButtonCustom>
          </a>
          <a href="#">
            <ButtonCustom customClassName="border border-borderPink50 text-bigText mt-4 lg:mt-0 ">
              Collaboration
            </ButtonCustom>
          </a>
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
              customClassName={`absolute z-50 top-0 right-40 w-[160px] lg:right-[280px] lg:top-[-55px] lg:w-[230px]`}
            />
            <MiniCard
              useImage={false}
              title="1000,000 Happy Clients"
              rating="4.9"
              reviews="15k Reviews"
              customClassName={`absolute z-50 top-40 right-44 w-[160px] mt-4 lg:right-[400px] lg:top-[280px] lg:w-[190px]`}
            />
            <img
              src="./image/frame-home-1.png"
              alt="frame 1"
              className="absolute z-40 top-0 right-0 w-[120px] lg:w-[150px] lg:top-[-25px] lg:right-[50px]"
            />
            <img
              src="./image/frame-home-2.png"
              alt="frame 2"
              className="absolute z-40 top-14 right-[170px] w-[140px] lg:w-[200px] lg:top-[70px] lg:right-[357px]"
            />
            <img
              src="./image/photo-home-section.png"
              alt="photo"
              className="absolute z-50 top-7 right-8 w-[200px] h-[200px] bg-white rounded-full shadow-photoShadow lg:w-[380px] lg:h-[380px] lg:right-16 lg:top-0"
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
          className="absolute left-0 bottom-0 z-20 lg:w-full"
        />
        <img
          src="./image/rectangle-right.png"
          alt="rectangle right"
          className="absolute right-0 bottom-0 z-10 md:w-[500px] lg:w-[800px]"
        />
      </section>
    </div>
  );
};

export default LandingPageHome;
