import React, { Component } from "react";
import ReactSvg from "react-svg";
import imac from "../../assets/Imac.png";
import arrow from "../../assets/arrow.svg";
import laptop from "../../assets/Laptop.png";
import ipad from "../../assets/Ipad.png";
import iphone from "../../assets/iphoneX2.png";
import Images from "../Images";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage__container">
        <div className="homepage__header">
          <h1 className="hompage__header-1">Let us help you make your mark!</h1>
        </div>
      </div>
    );
  }
}

export default Homepage;
