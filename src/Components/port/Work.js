import React, { Component } from "react";
import Navbar from "../Navbar";
import sitePhoto1 from "../../assets/circleCity.png"
import PortSquare from './portSquare';

class work extends Component {
  render() {
    return (
      <div className="work__container">
        <div className="work__navbar">          
          <Navbar />
        </div>
        <div className="work__header">
            <h1>Check Out Some of our Recent Work</h1>
        </div>
        <div className="work__port">
          <PortSquare
          className ='portsquare-1'
           />
            <PortSquare
          className ='portsquare-2'
           />
           <PortSquare
          className ='portsquare-3'
           />
            
        </div>
    
      </div>
    );
  }
}

export default work;
