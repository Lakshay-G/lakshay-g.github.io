import "./EducationStyles.css";
import "../ComponentsIndex.css";
import EducationData from "./EducationData";
import React, { useState } from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

const Education = () => {
  const filteredData = EducationData.sort(
    (a, b) => b["endDate"] - a["endDate"]
  );
  const [isExpanded, setIsExpanded] = useState(false);
  const handleHeadingClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="component-container">
      <div className="education" id="Education">
        <div className="collapse-header">
          <h1>Education</h1>
          {isExpanded ? (
            <BsFillArrowUpCircleFill
              className="collapse-arrow"
              onClick={handleHeadingClick}
              size={30}
              style={{ color: "#101010", margin: "1rem 0 auto" }}
            />
          ) : (
            <BsFillArrowDownCircleFill
              className="collapse-arrow"
              onClick={handleHeadingClick}
              size={30}
              style={{ color: "#101010", margin: "1rem 0 auto" }}
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
                <div key={index} className="edu-container">
                  <div className="edu-info">
                    <div className="edu-school">
                      <h4>{value.school}</h4>
                      <p>{value.location}</p>
                    </div>
                    <div className="edu-degree">
                      <h2>{value.degree}</h2>
                      <p>{value.duration}</p>
                    </div>
                  </div>
                  <div className="edu-details">
                    <p>
                      <ul>
                        {value.text.map((value, index) => {
                          return <li key={index}>{value}</li>;
                        })}
                        {/* <li>hello</li> */}
                      </ul>
                    </p>
                  </div>

                  <div className="edu-hr"></div>
                  <div className="edu-vertical-timeline"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
