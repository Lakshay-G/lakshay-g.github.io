import "./ExperienceSubpagesStyles.css";
import "../ComponentsIndex.css";

import React, { useState } from "react";
import Subpage from "./Subpage";
import Modal from "../Modal";
// import { Link } from "react-router-dom";

const ExperienceSubpages = () => {
  const headings = ["All Experiences", "Currently Working", "Part-Time"];
  const [selectedHeading, setSelectedHeading] = useState(headings[0]);
  const handleClick = (index) => {
    setSelectedHeading(headings[index]);
  };

  const [isExpand, setIsExpand] = useState(false);
  const handleExpand = (value) => {
    setIsExpand(value);
  };
  // let collapse = false;

  return (
    <div
      className="subpages-container component-container"
      id="Experience"
      // style={{ border: `1px solid pink` }}
    >
      <ul className="subpage-navbar">
        {headings.map((heading, index) => (
          <div className="modal-overlay">
            <li
              key={heading}
              onClick={() => {
                handleClick(index);
                // collapse = true;
                handleExpand(true);
              }}
              style={
                selectedHeading === headings[index]
                  ? { backgroundColor: "#eee" }
                  : {}
              }
              //   className="modal"
            ></li>
            <Modal modalTitle={headings[index]} x={-2} y={0} />
          </div>
        ))}
      </ul>

      {selectedHeading === headings[0] && (
        <Subpage heading={headings[0]} collapsed={isExpand} />
      )}
      {selectedHeading === headings[1] && (
        <Subpage heading={headings[1]} collapsed={isExpand} />
      )}
      {selectedHeading === headings[2] && (
        <Subpage heading={headings[2]} collapsed={isExpand} />
      )}
    </div>
  );
};

export default ExperienceSubpages;
