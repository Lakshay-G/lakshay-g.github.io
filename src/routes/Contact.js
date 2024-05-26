import React from "react";
import ContactSection from "../components/ContactComponents/ContactSection";
import Form from "../components/ContactComponents/Form";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import ScrollToTop from "../components/ScrollToTop";

const Contact = () => {
  const sections = {
    section: ["Connect-With-Me", "Contact-Form", "Footer"],
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
      <HeroImage
        heading="Contact."
        text="Let's have a chat"
        link="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <ContactSection />
      <Form />
      <Navbar />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
