import "./SubpageStyles.css";
import React from "react";

const ExperienceContainer = (props) => {
  // const [isExpanded, setIsExpanded] = useState(false);
  // const handleHeadingClick = () => {
  //   setIsExpanded(!isExpanded);
  // };
  // const paraText = Subpa

  return (
    <div className="exp-container">
      <div className="vertical-timeline"></div>
      {/* <div className="exp-info" onClick={handleHeadingClick}> */}
      <div className="exp-info">
        <div className="exp-company">
          <h4>{props.company}</h4>
          <p>{props.location}</p>
        </div>
        <div className="exp-job">
          <h2>{props.title}</h2>
          <p>{props.time}</p>
        </div>
      </div>
      <div className="exp-details">
        <p>
          <ul>
            {/* <li>{props.text[0]}</li>
            <li>{props.text[1]}</li>
            <li>{props.text[2]}</li>
            <li>{props.text[3]}</li> */}
            {props.text.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </p>
      </div>

      <div className="exp-hr"></div>
    </div>
  );
};

export default ExperienceContainer;
