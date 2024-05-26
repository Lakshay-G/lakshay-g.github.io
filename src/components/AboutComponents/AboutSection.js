import "./AboutSectionStyles.css";
import "../ComponentsIndex.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { renderMatches } from "react-router-dom";

const AboutSection = (props) => {
  //   var odd = false;
  //   if (props.count % 2 === 1) {
  //     odd = true;
  //   }
  //   const mq = window.matchMedia("(max-width: 600px)");
  //   if (mq.matches) {
  //     odd = true;
  //   }
  //   const [odd, setOdd] = useState(false);
  //   const handleOdd = () => {
  //     if (props.count % 2 === 1) {
  //       setOdd(true);
  //     }
  //   };
  //   handleOdd();

  //   function handleMediaChange(changed) {
  //     if (changed.matches) {
  //       odd = true;
  //     }
  // renderMatches();
  //   }
  // mq.addListener(handleMediaChange);
  //   const odd = props.count % 2 === 1;
  const [odd, setOdd] = useState(props.count % 2 === 1);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 960px)");
    if (mq.matches) {
      setOdd(true);
    }
    function handleMediaChange(changed) {
      if (changed.matches) {
        setOdd(true);
      } else {
        setOdd(props.count % 2 === 1);
      }
    }
    mq.addListener(handleMediaChange);
    return () => mq.removeListener(handleMediaChange);
  }, []);

  return (
    <div className="component-container" id={props.id}>
      <div className="about-section">
        {odd ? (
          <>
            <div className="left">
              <h1>{props.title}</h1>
              <p>{props.text}</p>
              {props.knowMore ? (
                <Link to={props.knowMoreRoute} className="btn btn-rounded">
                  More..
                </Link>
              ) : (
                ""
              )}
            </div>
            <div className="right">
              {/* <h1>right</h1> */}
              <div className="img-container">
                <img src={props.imgsrc} alt={props.alt} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="right">
              {/* <h1>right</h1> */}
              <div className="img-container">
                <img src={props.imgsrc} alt={props.alt} />
              </div>
            </div>
            <div className="left">
              <h1>{props.title}</h1>
              <p>{props.text}</p>
              {props.knowMore ? (
                <Link to={props.knowMoreRoute} className="btn btn-rounded">
                  More..
                </Link>
              ) : (
                ""
              )}
            </div>
          </>
        )}
      </div>
    </div>
    // <div className="about">
    //   <div className="left">
    //     <h1>Who am I?</h1>
    //     <p>
    //       Lakshay goel, MAth Phys student at Uwaterloo, data scientist and
    //       physics geek.
    //     </p>
    //     {/* <Link to="/contact">
    //       <button className="btn btn-rounded">Contact</button>
    //     </Link> */}
    //   </div>
    //   <div className="right">
    //     <div className="img-container">
    //       <div className="img-stack top">
    //         <img
    //           src="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    //           className="img"
    //           alt="image1"
    //         />
    //       </div>
    //       <div className="img-stack bottom">
    //         <img
    //           src="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    //           className="img"
    //           alt="image2"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AboutSection;
