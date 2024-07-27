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
          GirlsHub adalah platform yang memberdayakan perempuan muda melalui
          berbagai peluang digital, seperti influencer, model, dan content
          creator. Kami menyediakan wadah untuk mengembangkan karir, menjalin
          kolaborasi, dan memperluas jangkauan audiens. Dengan fokus pada
          kreativitas dan pemberdayaan, GirlsHub membantu wanita muda mencapai
          potensi penuh mereka dalam dunia digital.
        </TextParagraf>
      </section>
    </div>
  );
};

export default LandingPageAbout;
