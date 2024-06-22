import React from "react";
import Brands from "../../data/Brands";
import HeadTitle from "../ui/Text/HeadTitle";
import "../../style/CustomStyle.css";

const LandingPageBrands = () => {
  return (
    <div className="font-ubuntu overflow-hidden pb-6 lg:pb-10">
      <HeadTitle customClassName="text-center my-6">
        Dipercaya oleh brand dan agensi
      </HeadTitle>
      {/* LOGO BRANDS */}
      <div className="relative overflow-hidden w-full lg:mt-10">
        <div className="scroll-container flex gap-14 px-6 md:gap-20 lg:gap-40">
          {Brands.map((brand, index) => (
            <img
              key={index}
              src={`./image/${brand.image}`}
              alt={brand.name}
              className="w-[100px] inline-block mr-4 lg:w-[120px]"
            />
          ))}
          {Brands.map((brand, index) => (
            <img
              key={index + Brands.length}
              src={`./image/${brand.image}`}
              alt={brand.name}
              className="w-[100px] inline-block mr-4 lg:w-[120px]"
            />
          ))}
          {Brands.map((brand, index) => (
            <img
              key={index + Brands.length}
              src={`./image/${brand.image}`}
              alt={brand.name}
              className="w-[100px] inline-block mr-4 lg:w-[120px]"
            />
          ))}
          {Brands.map((brand, index) => (
            <img
              key={index + Brands.length}
              src={`./image/${brand.image}`}
              alt={brand.name}
              className="w-[100px] inline-block mr-4 lg:w-[120px]"
            />
          ))}
          {Brands.map((brand, index) => (
            <img
              key={index + Brands.length}
              src={`./image/${brand.image}`}
              alt={brand.name}
              className="w-[100px] inline-block mr-4 lg:w-[120px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPageBrands;
