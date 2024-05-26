import "./SubpageStyles.css";
import SubpagesData from "./SubpagesData";
import React, { useState } from "react";
import ExperienceContainer from "./ExperienceContainer";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
// import { parsePath } from "react-router-dom";

const Subpage = (props) => {
  // const subpagesData = SubpagesData;
  let filteredData = SubpagesData;
  // let filteredData = reversedData;
  // .reverse("endDate")
  // const type = "part-time";
  // let cnt = 0;
  if (props.heading === "All Experiences") {
    filteredData = SubpagesData;
    // cnt++;
  } else if (props.heading === "Currently Working") {
    filteredData = SubpagesData.filter((data) => data.type.includes("Current"));
    // cnt++;
  } else {
    filteredData = SubpagesData.filter((data) =>
      data.type.includes("Part-time")
    );
    // cnt++;
  }
  filteredData.sort((a, b) => b["endDate"] - a["endDate"]);
  // if (cnt === 1) {
  // filteredData = filteredData.sort("endDate");
  // }
  // console.log(filteredData);
  // const filteredData = subpagesData.filter((data) => data.type === props.type);

  // const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(props.collapsed);
  const handleHeadingClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="subpage-container">
      <div className="collapse-header">
        <h1>{props.heading}</h1>
        {isExpanded ? (
          <BsFillArrowUpCircleFill
            className="collapse-arrow"
            onClick={handleHeadingClick}
            size={30}
            style={{ color: "#fff", margin: "1rem 0 auto" }}
          />
        ) : (
          <BsFillArrowDownCircleFill
            className="collapse-arrow"
            onClick={handleHeadingClick}
            size={30}
            style={{ color: "#fff", margin: "1rem 0 auto" }}
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
              <ExperienceContainer
                key={index}
                title={value.title}
                time={value.time}
                company={value.company}
                location={value.location}
                text={value.text}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Subpage;
