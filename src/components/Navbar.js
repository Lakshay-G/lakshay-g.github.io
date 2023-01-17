import "./NavbarStyles.css";
import React from "react";
import GoToTop from "./GoToTop";
import { Link, useLocation } from "react-router-dom";
import { MdWork } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { MdContactMail } from "react-icons/md";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li className="icon">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <AiFillHome size={20} style={{ color: "#fff" }} />
            <span className="icon-name">Home</span>
          </Link>
        </li>
        <li className="icon">
          <Link
            to="/experience"
            className={location.pathname === "/experience" ? "active" : ""}
          >
            <MdWork size={20} style={{ color: "#fff" }} />
            <span className="icon-name">Experience</span>
          </Link>
        </li>
        <li className="icon">
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            <SiAboutdotme size={20} style={{ color: "#fff" }} />
            <span className="icon-name">About</span>
          </Link>
        </li>
        <li className="icon">
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            <MdContactMail size={20} style={{ color: "#fff" }} />
            <span className="icon-name">Contact</span>
          </Link>
        </li>
        {/* <li>
          <GoToTop />
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
