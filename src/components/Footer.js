import "./FooterStyles.css";
import React from "react";

import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer" id="Footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <div>
                <p>Waterloo, ON, Canada</p>
                <p>New Delhi, India</p>
              </div>
            </div>

            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                +1 519 722 6828
              </h4>
            </div>

            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                l2goel@uwaterloo.ca
              </h4>
            </div>
          </div>
          <div className="right">
            <h4>About Myself</h4>
            <p>
              This is Lakshay Goel! Hi, I'm a student at University of Waterloo.
            </p>
            <div className="social">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
