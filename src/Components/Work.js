import React, { Component } from "react";
import Navbar from "./Navbar";

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
    
      </div>
    );
  }
}

export default work;
