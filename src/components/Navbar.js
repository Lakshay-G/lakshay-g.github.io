import "./NavbarStyles.css";
import React from "react";
import GoToTop from "./GoToTop";
import { Link, useLocation } from "react-router-dom";
import { MdWork } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { MdContactMail } from "react-icons/md";
import { FaHome, FaUser, FaEnvelope, FaEnvelopeOpen } from "react-icons/fa";
import { FaHouse, FaHouseChimney, FaBriefcase } from "react-icons/fa6";
import { GiChest, GiOpenChest } from "react-icons/gi";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li className="icon">
          <Link
            to="/"
            className={`navbar-item ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            {location.pathname === "/" ? (
              <FaHouseChimney
                size={24}
                style={{
                  color: "rgba(243, 106, 33, 1)",
                }}
              />
            ) : (
              <FaHouse
                size={24}
                style={{
                  color: "#fff",
                }}
              />
            )}
            <span className="icon-name">Home</span>
          </Link>
        </li>
        <li className="icon">
          <Link
            to="/experience"
            className={`navbar-item ${
              location.pathname === "/experience" ? "active" : ""
            }`}
          >
            {location.pathname === "/experience" ? (
              <GiOpenChest
                size={24}
                style={{
                  color: "rgba(243, 106, 33, 1)",
                }}
              />
            ) : (
              <FaBriefcase
                size={24}
                style={{
                  color: "#fff",
                }}
              />
            )}
            <span className="icon-name">Experience</span>
          </Link>
        </li>
        <li className="icon">
          <Link
            to="/about"
            className={`navbar-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <SiAboutdotme
              size={24}
              style={{
                color:
                  location.pathname === "/about"
                    ? "rgba(243, 106, 33, 1)"
                    : "#fff",
                borderBottom:
                  location.pathname === "/about"
                    ? "2px solid rgba(243, 106, 33, 1)"
                    : "",
              }}
            />
            <span className="icon-name">About</span>
          </Link>
        </li>
        <li className="icon">
          <Link
            to="/contact"
            className={`navbar-item ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            {location.pathname === "/contact" ? (
              <FaEnvelopeOpen
                size={24}
                style={{
                  color: "rgba(243, 106, 33, 1)",
                }}
              />
            ) : (
              <FaEnvelope
                size={24}
                style={{
                  color: "#fff",
                }}
              />
            )}
            <span className="icon-name">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
