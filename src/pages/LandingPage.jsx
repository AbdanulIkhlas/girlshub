import React from "react";
import Navbar from "../components/fragments/Navbar";
import LandingPageHome from "../components/layouts/LandingPageHome";
import LandingPageBrands from "../components/layouts/LandingPageBrands";

const LandingPage = () => {
  return (
    <div className="font-ubuntu pb-[500px]">
      <Navbar />
      {/* SECTION HOME */}
      <section id="home" className="md:px-[0px] lg:px-[10px]">
        <LandingPageHome />
      </section>
      {/* SECTION BRANDS */}
      <section id="about">
        <LandingPageBrands />
      </section>
    </div>
  );
};

export default LandingPage;
