import "./AboutSectionsTotalStyles.css";
import React from "react";
import AboutSection from "./AboutSection";
import aboutSectionData from "./AboutSectionData";

const AboutSectionsTotal = () => {
  const sectionData = aboutSectionData;
  sectionData.sort((a, b) => {
    return a.count - b.count;
  });
  return (
    <div>
      {sectionData.map((value, index) => (
        <AboutSection
          key={index}
          count={value.count}
          text={value.text}
          imgsrc={value.imgsrc}
          alt={value.alt}
          title={value.title}
          knowMore={value.knowMore}
          knowMoreRoute={value.knowMoreRoute}
          id={value.id}
        />
      ))}
      {/* <AboutSection count={1} />
      <AboutSection count={2} />
      <AboutSection count={3} /> */}
    </div>
  );
};

export default AboutSectionsTotal;
