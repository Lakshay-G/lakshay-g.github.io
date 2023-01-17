import "./ContactSectionStyles.css";
import "../ComponentsIndex.css";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactSection = () => {
  return (
    <div className="component-container">
      <div className="contact-section" id="Connect-With-Me">
        <h2>Connect with me</h2>
        <p>
          Hi friends, feel free to reach out to me. My socials are listed below,
          and there is a contact form as well. Any feedbacks, comments or
          messages are welcomed :&#41;
        </p>
        <div className="contact-socials">
          {/* <a
          href="https://www.facebook.com/lakshay.goel.146/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook
            size={30}
            style={{ color: "#101010", marginRight: "1rem" }}
          />
        </a>
        <a
          href="https://www.instagram.com/goel_lakshay01/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram
            size={30}
            style={{ color: "#101010", marginRight: "1rem" }}
          />
        </a> */}
          <a
            href="https://www.linkedin.com/in/l2goel/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              size={30}
              style={{ color: "#101010", marginRight: "1rem" }}
            />
          </a>
          <a
            href="https://github.com/Lakshay-G"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              size={30}
              style={{ color: "#101010", marginRight: "1rem" }}
            />
          </a>
          <a href="mailto:l2goel@uwaterloo.ca?subject=Hello&body=Hi%20there">
            <HiMail
              size={30}
              style={{ color: "#101010", marginRight: "1rem" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
