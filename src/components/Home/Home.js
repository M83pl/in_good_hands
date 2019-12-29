import React from "react";
import HomeStart from "./HomeStart/HomeStart";
import HomeThreeColumns from "./HomeThreeColums/HomeThreeColumns";
import SimpleSteps from "./SimpleSteps/SimpleSteps";
import AboutUs from "./AboutUs/AboutUs";
import WhoWeHelp from "./WhoWeHelp/WhoWeHelp";
// import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <HomeStart />
      <HomeThreeColumns />
      <SimpleSteps />
      <AboutUs />
      <WhoWeHelp />
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
