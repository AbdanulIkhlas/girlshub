import React from "react";
import SecondText from "../ui/Text/SecondText";
import HeadTitle from "../ui/Text/HeadTitle";
import TextParagraf from "../ui/Text/TextParagraf";
import ButtonCustom from "../ui/ButtonCustom";

const LandingPageContact = () => {
  return (
    <div className="relative w-full min-h-[525px] bg-[#282C4B] lg:flex">
      {/* section img */}
      <section
        className="relative flex flex-col justify-center items-center py-10 z-40 w-full
      lg:w-[40%]"
      >
        <img
          src="./image/photo-contact-section.png"
          alt="photo contact"
          className="relative z-30 w-[246px] md:w-[380px] lg:mt-10 lg:ml-10"
        />
        <img
          src="./image/frame-contact-1.png"
          alt="frame 1"
          className="absolute z-20 right-10 top-12 w-[77px] md:right-44 md:w-[100px] lg:right-16 lg:top-32"
        />
        <img
          src="./image/frame-contact-2.png"
          alt="frame 1"
          className="absolute z-20 left-4 top-0 w-[307px] md:left-24 lg:left-14 lg:top-16"
        />
      </section>
      {/* section text */}
      <section className="relative z-40 px-10 w-full pb-10 lg:w-[60%] lg:mt-20">
        <SecondText customClassName="md:text-center lg:text-left">
          Any Question
        </SecondText>
        <HeadTitle customClassName=" text-white my-3 md:text-center lg:text-left lg:pe-60">
          Jika ada pertanyaan atau keluhan, hubungi kami di bawah ini.
        </HeadTitle>
        <TextParagraf customClassName="text-[#CED1E5] md:text-center lg:text-left lg:pe-[270px] lg:mt-7">
          Kamu dapat menghubungi kami di bawah ini dengan menekan tombol yang
          tersedia, kami siap melayani segala bentuk pertanyaan yang kamu ajukan
          kepada kami dengan senang hati
        </TextParagraf>
        <a
          href="https://wa.me/6287742262612"
          target="_blank"
          className="md:w-full md:flex md:justify-center lg:justify-start"
        >
          <ButtonCustom
            customClassName="bg-gradient-to-right border-2 border-slate-300 text-white cursor-pointer mt-8 ml-[-16px]
          md:ml-0 md:mt-10 md:mx-auto lg:mt-16"
          >
            Hubungi Kami
          </ButtonCustom>
        </a>
      </section>
      <section className="absolute w-full min-h-[300px] z-30 bottom-0 md:block">
        <img
          src="./image/rectangle-contact-left.png"
          alt="rectangle left"
          className="absolute w-full h-[132px] left-0 bottom-0 z-20 lg:h-[395px]"
        />
        <img
          src="./image/rectangle-contact-right.png"
          alt="rectangle right"
          className="absolute w-full h-[169px] right-0 bottom-0 z-10 md:w-[500px] lg:w-[636px] lg:h-[507px]"
        />
      </section>
    </div>
  );
};

export default LandingPageContact;
