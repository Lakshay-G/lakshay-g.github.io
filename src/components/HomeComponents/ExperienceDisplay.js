import React from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceData from "./ExperienceData";
import "./ExperienceCardStyle.css";
import { Link } from "react-router-dom";

const ExperienceDisplay = () => {
  const lastThreeData = ExperienceData.slice(-3).reverse();
  let counter = 0;
  return (
    <div className="experience-section" id="Experience">
      <div className="experience-heading">
        <h1>Recent Experience</h1>
      </div>
      <div className="experience-display">
        {lastThreeData.map((value, index) => {
          counter++;
          return (
            <div className="project-card-arrow">
              <ExperienceCard
                key={index}
                title={value.title}
                time={value.time}
                view={value.view}
                company={value.company}
              />
              {counter < 3 ? <div className="arrow"></div> : ""}
            </div>
          );
        })}
      </div>
      <Link to="/experience" className="btn btn-rounded">
        View More
      </Link>
    </div>
  );
};

export default ExperienceDisplay;
