import React from "react";
import Header from "../../Components/Header/Header";
import SectionOne from "../../Components/SectionOne/SectionOne";
import SectionTwo from "../../Components/SectionTwo/SectionTwo";
import SectionThree from "../../Components/SectionThree/SectionThree";
import SectionFour from "../../Components/SectionFour/SectionFour";
import SectionFive from "../../Components/SectionFive/SectionFive";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
};

export default Home;
