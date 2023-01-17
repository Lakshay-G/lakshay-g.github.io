import React from "react";
import Typewriter from "typewriter-effect";
import "./TypewriterStyles.css";

const TypewriterEffect = ({ texts }) => {
  return (
    <div>
      <Typewriter
        options={{
          loop: true,
          wrapperClassName: "typewriter",
        }}
        onInit={(typewriter) => {
          for (let i = 0; i < texts.length; i++) {
            typewriter.typeString(texts[i]).pauseFor(2000).deleteAll().start();
          }
        }}
        className="typewriter"
      />
    </div>
  );
};

export default TypewriterEffect;
