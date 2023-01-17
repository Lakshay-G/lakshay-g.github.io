import "./GoToTop.css";
import React, { useEffect, useState } from "react";
// import ScrollToTop from "../components/ScrollToTop";
import { FaAngleDoubleUp } from "react-icons/fa";

const GoToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={showButton ? "go-to-top show-button" : "go-to-top"}
        onClick={() => window.scrollTo(0, 0)}
      >
        <FaAngleDoubleUp size={20} style={{ color: "#fff", margin: "auto" }} />
      </div>
    </>
  );
};

export default GoToTop;
