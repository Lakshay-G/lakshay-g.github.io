import React from "react";
import AboutSectionsTotal from "../components/AboutComponents/AboutSectionsTotal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import ScrollToTop from "../components/ScrollToTop";

const About = () => {
  const sections = {
    section: [
      "Introduction",
      "Work-Interests",
      "Sports",
      "Exploration",
      "Footer",
    ],
    modalX: [0.5, -1, -2, -2, -3.25],
    modalY: [1, 1, 1, 1, 1],
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
        heading="About."
        text="Learn more about me"
        link="https://images.unsplash.com/photo-1520361689044-9c2291d4fa12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
      />
      {/* About */}
      <AboutSectionsTotal />
      <Navbar />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
