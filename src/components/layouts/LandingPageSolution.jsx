import React from "react";
import SecondText from "../ui/Text/SecondText";
import HeadTitle from "../ui/Text/HeadTitle";
import TextParagraf from "../ui/Text/TextParagraf";
import CardSolution from "../fragments/CardSolution";
import Solution from "../../data/Solution";

const LandingPageSolution = () => {
  return (
    <div>
      <section className="flex items-center mt-10">
        <div className="w-full ">
          <SecondText>Our Solution</SecondText>
          <HeadTitle customClassName="pe-8 my-3">
            Kami Menyederhanakan Cara Kerja Agensi
          </HeadTitle>
          <TextParagraf customClassName="pe-[10px]">
            GirlsHub menyediakan platform dimana UMKM dapat langsung terhubung
            dengan influencer
          </TextParagraf>
        </div>
        <img
          src="./image/frame-solution-1.png"
          alt="frame 1"
          className="w-[77px] mr-2 pt-6 "
        />
      </section>
      {/* SECTION CARDS */}
      <section className="mt-10 grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-4 border border-black">
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
