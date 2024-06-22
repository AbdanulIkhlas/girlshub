import React, { useState, useEffect } from "react";
import SecondText from "../ui/Text/SecondText";
import HeadTitle from "../ui/Text/HeadTitle";
import Testimoni from "../../data/Testimoni";
import CardTestimoni from "../fragments/CardTestimoni";

const LandingPageTestimoni = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisibleCards, setNumVisibleCards] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNumVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setNumVisibleCards(2);
      } else {
        setNumVisibleCards(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Testimoni.length);
    }, 7000); // Ganti kartu setiap 6 detik

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleTestimoni = [];
  for (let i = 0; i < numVisibleCards; i++) {
    visibleTestimoni.push(Testimoni[(currentIndex + i) % Testimoni.length]);
  }

  return (
    <div className="w-full mt-10">
      <section className="px-5">
        <SecondText>Testimoni,</SecondText>
        <HeadTitle customClassName="text-left mt-2 pe-[100px] lg:pe-[800px]">
          Apa yang Klien katakan tentang kami
        </HeadTitle>
      </section>
      <section className="relative w-full h-[300px] px-5 mt-10 flex justify-center items-center lg:gap-6">
        {visibleTestimoni.map((testimoni, index) => (
          <CardTestimoni
            key={testimoni.id}
            image={testimoni.image}
            company={testimoni.company}
            testimoni={testimoni.testimoni}
            isVisible={index === 0} // Hanya kartu pertama yang terlihat sepenuhnya
          />
        ))}
      </section>
    </div>
  );
};

export default LandingPageTestimoni;
