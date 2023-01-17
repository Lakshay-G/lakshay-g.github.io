import "./ContactPageStyles.css";
import React from "react";
import ContactSection from "./ContactSection";
import Form from "./Form";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <ContactSection />
      <div className="vertical-line"></div>
      <Form />
    </div>
  );
};

export default ContactPage;
