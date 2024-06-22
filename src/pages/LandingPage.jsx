import React from "react";
import Navbar from "../components/fragments/Navbar";
import LandingPageHome from "../components/layouts/LandingPageHome";
import LandingPageBrands from "../components/layouts/LandingPageBrands";
import LandingPageAbout from "../components/layouts/LandingPageAbout";
import LandingPageSolution from "../components/layouts/LandingPageSolution";
import LandingPageContact from "../components/layouts/LandingPageContact";
import LandingPageTestimoni from "../components/layouts/LandingPageTestimoni";

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
      {/* SECTION CONTACT */}
      <section id="contact" className="mt-16 lg:px-5">
        <LandingPageContact />
      </section>
      {/* SECTION TESTIMONI */}
      <section id="testimoni" className="lg:px-24">
        <LandingPageTestimoni />
      </section>
    </div>
  );
};

export default LandingPage;
