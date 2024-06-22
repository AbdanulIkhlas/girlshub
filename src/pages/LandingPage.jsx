import React from "react";
import Navbar from "../components/fragments/Navbar";
import LandingPageHome from "../components/layouts/LandingPageHome";
import LandingPageBrands from "../components/layouts/LandingPageBrands";
import LandingPageAbout from "../components/layouts/LandingPageAbout";
import LandingPageSolution from "../components/layouts/LandingPageSolution";

const LandingPage = () => {
  return (
    <div className="font-ubuntu pb-[500px]">
      <Navbar />
      {/* SECTION HOME */}
      <section id="home" className="md:px-[0px] lg:px-[10px]">
        <LandingPageHome />
      </section>
      {/* SECTION BRANDS */}
      <section id="brand">
        <LandingPageBrands />
      </section>
      {/* SECTION ABOUT */}
      <section id="about" className="md:px-10 lg:px-24">
        <LandingPageAbout />
      </section>
      {/* SECTION SOLUTION */}
      <section id="solution" className="px-6 md:px-10 lg:px-24">
        <LandingPageSolution />
      </section>
    </div>
  );
};

export default LandingPage;
