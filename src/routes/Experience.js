import React from "react";
import Education from "../components/ExperienceComponents/Education";
import ExperienceSubpages from "../components/ExperienceComponents/ExperienceSubpages";
import Skills from "../components/ExperienceComponents/Skills";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import ScrollToTop from "../components/ScrollToTop";
// import "../components/ComponentsIndex.css";

const Experience = () => {
  const sections = {
    section: ["Skills", "Education", "Experience", "Footer"],
    modalX: [0.5, -2, -2, -3.25],
    modalY: [1, 1, 1, 1],
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
      <HeroImage
        heading="Experience."
        text="Some of my most recent work"
        link="https://images.unsplash.com/photo-1638029202288-451a89e0d55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <Skills />
      <Education />
      <ExperienceSubpages />
      <Navbar />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Experience;
