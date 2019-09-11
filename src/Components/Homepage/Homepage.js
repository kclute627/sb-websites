import React, { Component } from "react";
import ReactSvg from "react-svg";
import imac from "../../assets/Imac.png";
import arrow from "../../assets/right-arrow.svg";
import laptop from "../../assets/Laptop.png";
import ipad from "../../assets/Ipad.png";
import iphone from "../../assets/iphoneX2.png";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage__container">
        <div className="homepage__header">
          <h1 className="hompage__header-1">Let us help you make your mark!</h1>
        </div>
        <div className="homepage__images">
            <h1 className="homepage__images-header">Be Seen on all Screens</h1>
          <img className="homepage__images-1" src={imac} alt="" />

          <img className="homepage__images-3" src={laptop} alt="" />

          <img className="homepage__images-4" src={ipad} alt="" />

          <img className="homepage__images-5" src={iphone} alt="" />
        </div>
      </div>
    );
  }
}

export default Homepage;
