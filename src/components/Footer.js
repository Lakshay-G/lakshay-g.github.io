import "./FooterStyles.css";
import React from "react";

import {
  FaFacebook,
  FaGithub,
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

            <a href="mailto:l2goel@uwaterloo.ca?subject=Hello&body=Hi%20there">
              <div>
                <h4 className="email">
                  <FaMailBulk size={20} style={{ marginRight: "2rem" }} />
                  l2goel@uwaterloo.ca
                </h4>
              </div>
            </a>
          </div>
          <div className="right">
            <h4>About Myself</h4>
            <p>
              This is Lakshay Goel! Hi, I'm a student at University of Waterloo.
            </p>
            <div className="social">
              <a
                href="https://github.com/Lakshay-G"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={30}
                  className="social-indiv"
                  style={{ marginRight: "1rem" }}
                />
              </a>
              {/* <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={30}
                  className="social-indiv"
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a> */}
              <a
                href="https://www.linkedin.com/in/l2goel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={30}
                  className="social-indiv"
                  style={{ marginRight: "1rem" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
