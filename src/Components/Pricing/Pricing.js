import React, { Component } from "react";
import PricingBox from "../Pricing/PricingBox";

class Pricing extends Component {
  render() {
    return (
      <div className="pricing" id='price'>
          <h1 className="pricing__header">
              Website Packages
          </h1>
        <div className="pricing__container">
          <PricingBox
            header={"Single Page Website"}
            pricing={"$699"}
            description1={"Single Page Website"}
            description2={"Search Engine Optomizied"}
            description3={"As many sections as you want"}
          
                      /> 
          <PricingBox 
          header={"5 Page Website"}
          pricing={"$999"}
          description1={"5 Page Website"}
          description2={"Search Engine Optomizied"}
          description3={"Home, About, Contact + 2 other pages"}
          popular = {true}/>
          <PricingBox
           header={"10 Page Website"}
           pricing={"$1699"}
           description1={"10 Page Website + 1 year free hosting"}
           description2={"Search Engine Optomizied"}
           description3={"Home, About, Contact + 7 other pages"}
             />
          
        </div>
      </div>
    );
  }
}

export default Pricing;
