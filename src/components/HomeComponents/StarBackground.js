import React, { useRef, useEffect } from "react";
import "./StarBackgroundStyles.css";

const StarBackground = () => {
  const starBackgroundRef = useRef(null);

  useEffect(() => {
    const starBackground = starBackgroundRef.current;

    // create the stars and add them to the starBackground
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      starBackground.appendChild(star);
      if (i < 20) {
        star.style.width = "4px";
        star.style.height = "4px";
      } else if (i < 30) {
        star.style.width = "8px";
        star.style.height = "8px";
      } else {
        star.style.width = "2px";
        star.style.height = "2px";
      }

      // set the star's initial position
      star.style.left = Math.random() * window.innerWidth + "px";
      star.style.top = Math.random() * window.innerHeight + "px";
    }

    // move the stars to new positions every 100 milliseconds
    const intervalId = setInterval(() => {
      const stars = Array.from(
        starBackgroundRef.current.querySelectorAll(".star")
      );
      stars.forEach((star) => {
        star.style.transform = `translate(${Math.random() * 2 - 1}px, ${
          Math.random() * 2 - 1
        }px)`;
      });
    }, 100);

    return () => {
      //   clearInterval(intervalId);
    };
  }, []);

  return <div className="star-background" ref={starBackgroundRef}></div>;
};

export default StarBackground;
