import "./ExperienceCardStyle.css";
import React from "react";
// import { NavLink } from "react-router-dom";

const ExperienceCard = (props) => {
  return (
    <div className="experience-card">
      {/* <img src={props.imgsrc} alt="experience 1 - UI/UX" /> */}
      <div className="experience-info">
        <h2 className="experience-title">{props.title}</h2>
        <div className="pro-details">
          <h4>{props.company}</h4>
          <p>{props.time}</p>
          {/* <div className="pro-btns">
            <NavLink to="/experience" className="btn btn-rounded">
              View
            </NavLink>
            <NavLink to="www.youtube.com" className="btn btn-light btn-rounded">
              Source
            </NavLink>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
