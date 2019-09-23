import React, { Component } from "react";
import PricingBox from "../Pricing/PricingBox";

class Pricing extends Component {
  render() {
    return (
      <div className="pricing" id='pricing'>
          <h1 className="pricing__header">
              Get Started Today
          </h1>
        <div className="pricing__container">
          <PricingBox
            header={"Single Page Website"}
            pricing={"$699"}
            description={
              "We will build a single page website for your business. Your new website will be fully Search Engine Optimized and easy for your clients to navigate."
            }
          />
          <PricingBox />
          <PricingBox />
        </div>
      </div>
    );
  }
}

export default Pricing;
