import "./SkillsStyles.css";
import "../ComponentsIndex.css";
import React, { useState } from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import SkillsData from "./SkillsData";

const Skills = () => {
  const filteredData = SkillsData;
  const [isExpanded, setIsExpanded] = useState(true);
  const handleHeadingClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="component-container">
      <div className="skills" id="Skills">
        <div className="collapse-header">
          <h1>Skills</h1>
          {isExpanded ? (
            <BsFillArrowUpCircleFill
              className="collapse-arrow"
              onClick={handleHeadingClick}
              size={30}
              style={{ color: "#eee", margin: "1rem 0 auto" }}
            />
          ) : (
            <BsFillArrowDownCircleFill
              className="collapse-arrow"
              onClick={handleHeadingClick}
              size={30}
              style={{ color: "#eee", margin: "1rem 0 auto" }}
            />
          )}
        </div>
        {isExpanded && (
          <div
            className={
              isExpanded ? "collapsible expanded" : "collapsible collapsed"
            }
            // style={{ maxHeight: isExpanded ? "100%" : "0" }}
          >
            {filteredData.map((value, index) => {
              return (
                <div key={index} className="skills-container">
                  <div className="skills-type">
                    <h2>{value.type}</h2>
                  </div>
                  <div className="skills-details">
                    <p>
                      <ul>
                        {value.skills.map((val, index) => {
                          return <li key={index}>{val}</li>;
                        })}
                      </ul>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
