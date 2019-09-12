import React, { Component } from "react";
import ReactSvg from 'react-svg';
import arrow from '../assets/arrow.svg';

class Images extends Component {
  render() {
    const { imac, laptop, ipad, iphone } = this.props;

    return (
      <div className="images">
        <div className="images__container">
          <h1 className="images-header">Be Seen on all Screens</h1>
          <img className="images-1" src={imac} alt="" />

          <img className="images-3" src={laptop} alt="" />

          <img className="images-4" src={ipad} alt="" />

          <img className="images-5" src={iphone} alt="" />
          <ReactSvg className = "images__arrow"src={arrow}/>
        </div>
      </div>
    );
  }
}

export default Images;
