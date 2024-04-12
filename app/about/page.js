import React from "react";
import Nav from "../components/Header";
import IntroContainer from "../components/IntroContainer";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: "#00030A" }}>
      <Nav />
      <IntroContainer />
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default AboutPage;
