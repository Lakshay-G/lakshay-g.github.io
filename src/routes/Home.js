import React from "react";
import ExperienceDisplay from "../components/HomeComponents/ExperienceDisplay";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HomeComponents/HeroSection";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import ScrollToTop from "../components/ScrollToTop";
// import GoToTop from "../components/GoToTop";

const Home = () => {
  // const sections = ["Introduction", "Experience", "Footer"];
  const sections = {
    section: ["Introduction", "Experience", "Footer"],
    modalX: [0.5, -2, -3.25],
    modalY: [1, 1, 1],
  };
  return (
    <div>
      <Header />
      <ProgressBar
        num={sections.section.length}
        sections={sections.section}
        modalX={sections.modalX}
        modalY={sections.modalY}
      />
      <HeroSection />
      <ExperienceDisplay />
      <Navbar />
      {/* <GoToTop /> */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
