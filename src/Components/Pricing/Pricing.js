import React, { Component } from "react";
import PricingBox from "../Pricing/PricingBox";

class Pricing extends Component {
  render() {
    return (
      <div className="pricing" id='price'>
          <h1 className="pricing__header">
              Get Started Today
          </h1>
        <div className="pricing__container">
          <PricingBox
            header={"Single Page Website"}
            pricing={"$699"}
            description1={"Single Page Website"}
            description2={"Search Engine Optomizied"}
            description3={"As many sections as you want"}
          
                      />
          <PricingBox />
          <PricingBox />
          
        </div>
      </div>
    );
  }
}

export default Pricing;
