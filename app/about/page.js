import React from "react";
import Nav from "../components/Header";
import IntroContainer from "../components/IntroContainer";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: "#00030A" }}>
      <Nav />
      <IntroContainer />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default AboutPage;
