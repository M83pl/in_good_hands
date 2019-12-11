import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeThreeColumns from "./HomeThreeColums/HomeThreeColumns";
import SimpleSteps from "./SimpleSteps/SimpleSteps";
import AboutUs from "./AboutUs/AboutUs";
import WhoWeHelp from "./WhoWeHelp/WhoWeHelp";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumns />
      <SimpleSteps />
      <AboutUs />
      <WhoWeHelp />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
