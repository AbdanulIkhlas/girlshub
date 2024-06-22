import React from "react";
import Navbar from "../components/fragments/Navbar";
import LandingPageHome from "../components/layouts/LandingPageHome";

const LandingPage = () => {
  return (
    <div className="font-ubuntu pb-[500px]">
      <Navbar />
      {/* SECTION HOME */}
      <section id="home" className="md:px-[0px] lg:px-[120px]">
        <LandingPageHome />
      </section>
    </div>
  );
};

export default LandingPage;
