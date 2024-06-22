import React from "react";

const CardTestimoni = ({ company, image, testimoni, isVisible }) => {
  return (
    <div
      className={`relative transition-opacity  mx-2 ${
        isVisible ? "animate-fadeIn" : "animate-fadeOut"
      }`}
    >
      <div className="w-full border-[0.5px] border-[#1b1b2814] rounded-xl bg-[#f0f0f0] shadow-firstShadow">
        <section className="relative flex justify-center rounded-xl py-1 mx-auto mt-[-30px] bg-[#FBFBFB] w-[200px] border-[0.5px] border-[#1b1b2814] shadow-lg">
          <img
            src={`./image/${image}`}
            alt="testimoni image"
            className="w-[44px] h-[44px]"
          />
          <img
            src="./svg/half-circle.svg"
            alt="half circle"
            className="absolute top-[3px] right-[74px]"
          />
        </section>
        <section className="p-5">
          <img src="./svg/kutip.svg" alt="kutip" />
          <p className="text-[12px] text-left text-textColor md:text-[14px] lg:text-[16px]">
            {testimoni}
          </p>
          <h3 className="text-[14px] font-bold text-bigText mt-4 text-center md:text-[16px] lg:text-[18px]">
            {company}
          </h3>
        </section>
      </div>
    </div>
  );
};

export default CardTestimoni;
