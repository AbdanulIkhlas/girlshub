import React from "react";
import HeadTitle from "../ui/Text/HeadTitle";
import SecondText from "../ui/Text/SecondText";
import TextParagraf from "../ui/Text/TextParagraf";

const LandingPageAbout = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5 md:flex-row md:gap-4 lg:items-start">
      <img
        src="./image/about-section.png"
        alt="image"
        className="w-[300px] lg:w-[470px]"
      />
      <section className="w-full px-6 mt-6 ">
        <SecondText>About,</SecondText>
        <HeadTitle customClassName="my-2 lg:my-6">Apa Itu Girlshub?</HeadTitle>
        <TextParagraf customClassName="lg:pe-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </TextParagraf>
      </section>
    </div>
  );
};

export default LandingPageAbout;
