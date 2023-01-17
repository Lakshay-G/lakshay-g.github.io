import "./ModalStyles.css";
import React, { useState } from "react";

const Modal = ({ modalTitle, x, y }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`modal`}
        show={isHovered}
        style={{ transform: `translate(${x}rem, ${y}rem)` }}
      >
        <h6>{modalTitle}</h6>
      </div>
    </div>
  );
};

export default Modal;
