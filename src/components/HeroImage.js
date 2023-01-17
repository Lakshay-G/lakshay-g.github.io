import "./HeroImageStyles.css";
import React, { Component } from "react";

class HeroImage extends Component {
  render() {
    const link = this.props.link;

    return (
      <div className="hero-img">
        <style>
          {`.hero-img::before {
            background-image: url(${link})}`}
        </style>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImage;
