import React from 'react';
import { privateEncrypt } from 'crypto';



const PricingBox = props => {


    return(
        <div className="pricing__pricingBox">
            <div className="pricing__pricingBox-header">
                {props.header}
            </div>
            <div className="pricing__pricingBox-price">
                {props.pricing}
            </div>
            <div className="pricing__pricingBox-description">
                {props.description}
            </div>
            <button className="pricing__pricingBox-cta">
                Buy Now
            </button>
            
        </div>
    )
}



export default PricingBox;