import React from "react";
import SecondText from "../ui/Text/SecondText";
import HeadTitle from "../ui/Text/HeadTitle";
import TextParagraf from "../ui/Text/TextParagraf";
import CardSolution from "../fragments/CardSolution";
import Solution from "../../data/Solution";

const LandingPageSolution = () => {
  return (
    <div className="lg:flex lg:justify-between lg:items-start">
      <section className="flex items-center mt-10 lg:w-[40%] lg:flex-col">
        <div className="w-full ">
          <SecondText>Solusi Kami</SecondText>
          <HeadTitle customClassName="pe-8 my-3 lg:pe-32">
            Kami Menyederhanakan Cara Kerja Agensi
          </HeadTitle>
          <TextParagraf customClassName="pe-[10px] lg:pe-40">
            GirlsHub menyediakan platform dimana UMKM dapat langsung terhubung
            dengan influencer
          </TextParagraf>
        </div>
        <img
          src="./image/frame-solution-1.png"
          alt="frame 1"
          className="hidden w-[77px] mr-2 pt-6 lg:block lg:mt-3 lg:w-[100px] "
        />
        <img
          src="./image/frame-solution-2.png"
          alt="frame 1"
          className="w-[57px] mr-2 pt-6 lg:hidden lg:mt-3 lg:w-[100px] "
        />
      </section>
      {/* SECTION CARDS */}
      <section
        className="mt-10 grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-4 
      lg:w-[55%] lg:pt-10"
      >
        {Solution.map((item) => (
          <CardSolution
            key={item.id}
            title={item.title}
            image={item.image}
            content={item.content}
          />
        ))}
      </section>
    </div>
  );
};

export default LandingPageSolution;
