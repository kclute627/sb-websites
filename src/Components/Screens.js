import React, { Component } from 'react'; 
import imac from "../assets/Imac.png";

import laptop from "../assets/Laptop.png";
import ipad from "../assets/Ipad.png";
import iphone from "../assets/iphoneX2.png";
import Images from '../Components/Images';





class Screens extends Component {


        render(){


            return(
                <div className="screen__container">
                      <Images iphone ={iphone} imac= {imac} laptop={laptop} ipad={ipad} />
                </div>
              

            )
        }
}


export default Screens;