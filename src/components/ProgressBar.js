import "./ProgressBarStyles.css";

import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const ProgressBar = (props) => {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // let counter = 0;
  let temp = props.num - 1;
  let progress = [];

  for (let counter = 0; counter < props.num; counter++) {
    progress.push(
      <>
        <a href={`#${props.sections[counter]}`}>
          <div className="bar-dot modal-overlay ">
            <Modal
              modalTitle={props.sections[counter]}
              x={props.modalX[counter]}
              y={props.modalY[counter]}
            />
            <div
              className="filled"
              style={
                scrollTop >= 100 - temp * (100 / (props.num - 1))
                  ? { width: `100%` }
                  : { width: `0%` }
              }
            ></div>
          </div>
        </a>
        {counter < props.num - 1 ? (
          <div
            className="bar-long"
            style={{ width: `${Math.floor(100 / props.num)}%` }}
          >
            <div
              className="filled"
              style={
                scrollTop < 100 - temp * (100 / (props.num - 1))
                  ? { width: "0" }
                  : scrollTop < 100 - (temp - 1) * (100 / (props.num - 1))
                  ? {
                      width: `${
                        (scrollTop - counter * (100 / (props.num - 1))) *
                        (props.num - 1)
                      }%`,
                    }
                  : { width: `100%` }
              }
            ></div>
          </div>
        ) : (
          ""
        )}
      </>
    );
    temp--;
  }

  return (
    <div className="progress-bar">
      {progress}

      {/* <a href="#introduction">
        <div className="bar-dot modal-overlay ">
          <Modal modalTitle="Introduction" x={0.5} y={1} />
          <div
            className="filled"
            style={scrollTop >= 0 ? { width: `100%` } : { width: `0%` }}
          ></div>
        </div>
      </a>
      <div className="bar-long">
        <div
          className="filled"
          style={
            scrollTop < 33.34
              ? { width: `${scrollTop * 3}%` }
              : { width: `100%` }
          }
        ></div>
      </div>
      <a href="#experience">
        <div className="bar-dot modal-overlay">
          <Modal modalTitle="Experience" x={-1.5} y={1} />
          <div
            className="filled"
            style={scrollTop >= 33.34 ? { width: `100%` } : { width: `0%` }}
          ></div>
        </div>
      </a>
      <div className="bar-long">
        <div
          className="filled"
          style={
            scrollTop < 33.34
              ? { width: `0%` }
              : scrollTop > 33.34 && scrollTop < 66.67
              ? { width: `${(scrollTop - 33.34) * 3}%` }
              : { width: `100%` }
          }
        ></div>
      </div>
      <div className="bar-dot modal-overlay">
        <Modal modalTitle="Contact" x={-1.5} y={1} />
        <div
          className="filled"
          style={scrollTop >= 66.67 ? { width: `100%` } : { width: `0%` }}
        ></div>
      </div>
      <div className="bar-long">
        <div
          className="filled"
          style={
            scrollTop < 66.67
              ? { width: `0%` }
              : { width: `${(scrollTop - 66.67) * 3}%` }
          }
        ></div>
      </div>
      <a href="#footer">
        <div className="bar-dot modal-overlay">
          <Modal modalTitle="Footer" x={-3.25} y={1} />
          <div
            className="filled"
            style={scrollTop >= 100 ? { width: `100%` } : { width: `0%` }}
          ></div>
        </div>
      </a> */}
    </div>
  );
};

export default ProgressBar;
