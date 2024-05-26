import "./HeroSectionStyles.css";
import "../ComponentsIndex.css";
import React, { useState } from "react";

// import ProfilePic from "../../assets/25-Background-Removed.png";
// import ProfilePicCandid from "../../assets/26-Background-Removed.png";
import ProfilePic from "../../assets/my_image.png";
import { Link } from "react-router-dom";
import TypewriterEffect from "../Typewriter";
// import StarBackground from "./StarBackground";
// import Background from "../assets/background2.jpeg";

const HeroSection = () => {
  const positions = [
    "Physics Student.",
    "Data Scientist.",
    "Software Developer.",
  ];
  const [rightHovered, setRightHovered] = useState(false);
  return (
    <div className="">
      <div
        id="Introduction"
        className="hero-section"
        // ref={starBackgroundRef}
      >
        <div
          id="stars1"
          className={rightHovered ? "stars1-hovered" : " "}
        ></div>
        <div
          id="stars2"
          className={rightHovered ? "stars2-hovered" : " "}
        ></div>
        <div
          id="stars3"
          className={rightHovered ? "stars3-hovered" : " "}
        ></div>
        {/* <div
        id="stars3"
        style={
          rightHovered
            ? {
                animation: "animStar 20s linear, twinkle 10s",
                animationIterationCount: 1,
                animationFillMode: "forwards",
              }
            : {}
        }
      ></div> */}
        <div className="left">
          <h3>&lt; Hello World &gt;</h3>
          <h1
            onMouseEnter={() => setRightHovered(true)}
            onMouseLeave={() => setRightHovered(false)}
          >
            Lakshay Goel
          </h1>
          {/* <p>Physics Student</p> */}
          <p>
            <TypewriterEffect texts={positions} />
          </p>
          <div className="btn-container">
            <Link to="/about" className="btn btn-rounded">
              About Me
            </Link>
            <Link to="/contact" className="btn btn-light btn-rounded">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="buffer"></div>
        <div className="right">
          <div
            className="img-container"
            onMouseEnter={() => setRightHovered(true)}
            onMouseLeave={() => setRightHovered(false)}
          >
            <img src={ProfilePic} alt="Myself"></img>
            {/* <img src={ProfilePicCandid} alt="Myself candid"></img> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// const starBackgroundRef = useRef(null);

// useEffect(() => {
//   const starBackground = starBackgroundRef.current;

//   // create the stars and add them to the starBackground
//   for (let i = 0; i < 100; i++) {
//     const star = document.createElement("div");
//     star.classList.add("star");
//     starBackground.appendChild(star);
//     if (i < 20) {
//       star.style.width = "4px";
//       star.style.height = "4px";
//     } else if (i < 30) {
//       star.style.width = "8px";
//       star.style.height = "8px";
//     } else {
//       star.style.width = "2px";
//       star.style.height = "2px";
//     }

//     // set the star's initial position
//     star.style.left = Math.random() * window.innerWidth + "px";
//     star.style.top = Math.random() * window.innerHeight + "px";
//   }
// }, []);
