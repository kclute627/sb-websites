import React from "react";
import ReactSvg from "react-svg";
import check from "../../assets/tick.svg";

const PricingBox = props => {
  return (
     
    <div className="pricing__pricingBox">
       <div className={props.popular ? "pricing__pricingBox-popular":  "pricing__pricingBox-popular-1" }>Most Popular</div>
      <div className="pricing__pricingBox-header">{props.header}</div>
      <div className="pricing__pricingBox-price">{props.pricing}</div>
      <div className="pricing__pricingBox-description">
        <ul>
          <li className="pricing__pricingBox-description-4">
            {" "}
            <ReactSvg src={check} />
          </li>
          <li className="pricing__pricingBox-description-1">
            {props.description1}
          </li>
          <li className="pricing__pricingBox-description-5">
            {" "}
            <ReactSvg src={check} />
          </li>
          <li className="pricing__pricingBox-description-2">
            {props.description2}
          </li>
          <li className="pricing__pricingBox-description-6">
            {" "}
            <ReactSvg src={check} />
          </li>
          <li className="pricing__pricingBox-description-3">
            {props.description3}
          </li>
         
          <a className={props.popular ? "pricing__pricingBox-cta popular" : "pricing__pricingBox-cta" }>Get Started</a>
        </ul>
      </div>
    </div>
    
  );
};

export default PricingBox;
