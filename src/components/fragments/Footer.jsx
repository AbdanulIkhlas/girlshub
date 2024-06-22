import React from "react";
import { Link as LinkScroll } from "react-scroll";

const Footer = () => {
  return (
    <div className="relative border border-black bg-bigText pb-8 md:pb-4 lg:min-h-[300px]">
      <section className="relative z-50 p-8 flex flex-col gap-6 lg:flex-row">
        <div className="lg:w-[30%] lg:flex lg:justify-between">
          <img
            src="./image/logo-footer.png"
            alt="logo"
            className="w-28 md:mx-auto lg:w-[180px] lg:h-[92px]"
          />
          <img
            src="./image/garis.png"
            alt="logo"
            className="hidden lg:block w-[3px] h-[56px] mt-5"
          />
        </div>
        {/* flex view tablet */}
        <div className="md:flex md:gap-14 md:justify-center lg:w-full lg:justify-around lg:pr-20 lg:mt-8 ">
          <div className="text-white flex gap-20 mb-12 lg:w-[45%] lg:justify-around ">
            {/* PERUSAHAAN */}
            <div className="flex flex-col gap-2 lg:text-lg">
              <h1 className="mb-2 text-lg font-medium lg:text-2xl">
                Perusahaan
              </h1>
              <LinkScroll
                to="about"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                <p className="cursor-pointer">Tentang</p>
              </LinkScroll>
              <a href="#">Collaboration</a>
            </div>
            {/* JOIN TALENT */}
            <div className="flex flex-col gap-2 lg:text-lg">
              <h1 className="mb-2 text-lg font-medium lg:text-2xl">Gabung</h1>
              <a href="#">Join Talent</a>
            </div>
          </div>
          <div className="text-white flex gap-16 lg:w-[45%] lg:justify-around">
            {/* KONTAK */}
            <div className="flex flex-col gap-2 lg:text-lg">
              <h1 className="mb-2 text-lg font-medium lg:text-2xl">
                Hubungi Kami
              </h1>
              <LinkScroll
                to="contact"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                <p className="cursor-pointer">Bantuan</p>
              </LinkScroll>
            </div>
            {/* MEDIA SOSIAL */}
            <div className="flex flex-col gap-2">
              <h1 className="mb-2 text-lg font-medium lg:text-2xl">
                Media Sosial
              </h1>
              <div className="flex gap-2 lg:gap-4">
                <a href="#">
                  <img
                    src="./image/instagram.png"
                    alt="sosmed"
                    className="w-[28px] lg:w-[40px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="./image/tiktok.png"
                    alt="sosmed"
                    className="w-[28px] lg:w-[40px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="./image/youtube.png"
                    alt="sosmed"
                    className="w-[28px] lg:w-[40px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="absolute w-full min-h-[300px] z-30 bottom-0 md:block">
        <img
          src="./image/rectangle-contact-left.png"
          alt="rectangle left"
          className="absolute w-full h-[132px] left-0 bottom-0 z-20 lg:h-[202px]"
        />
        <img
          src="./image/rectangle-contact-right.png"
          alt="rectangle right"
          className="absolute w-full h-[169px] right-0 bottom-0 z-10 md:w-[500px] lg:w-[654px] lg:h-[260]"
        />
      </section>
    </div>
  );
};

export default Footer;
