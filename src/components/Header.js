import "./HeaderStyles.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsToggleOn } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Modal from "./Modal";

const Header = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="left">
        <div className="logo">
          <Link to="/">
            <h1>Lakshay.</h1>
          </Link>
        </div>
      </div>
      <div className="right ">
        <div className="modal-overlay">
          <Modal
            modalTitle="Dark and Light mode still under progress!!"
            x={-4}
            y={3}
          />
          <BsToggleOn size={40} style={{ color: "#eee" }} />
        </div>
        {/* <div className="modal-overlay">
          <Modal modalTitle="Function still under progress!!" x={-4} y={3} />
          <CgProfile size={40} style={{ color: "#eee" }} />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
