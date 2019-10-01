import React, { Component } from "react";
import ReactSvg from 'react-svg';
import arrow from '../assets/arrow.svg';
import lArrow from '../assets/larrow.svg';
import Images1 from '../Components/Images1';
import imac from "../assets/mockups/imac.png";
import imac2 from "../assets/mockups/imac2.png";
import laptop from "../assets/mockups/laptop.png";
import laptop2 from "../assets/mockups/laptop2.png";
import ipad from "../assets/mockups/Ipad.png";
import ipad2 from "../assets/mockups/Ipad2.png";
import iphone from "../assets/mockups/iphoneX2.png";
import iphone2 from "../assets/mockups/iphone2.png";

class Images extends Component {

  state = {
    counter: 1,
  }

  rightClickHandler = () => {
    const counter =  this.state.counter + 1
    this.setState({
      counter
    })
  }
  leftClickHandler = ()=> {
    const counter = this.state.counter - 1;
    this.setState({
      counter
    })
  }
 
   
  render() {
   const {counter} = this.state;
   let imacPic, iphonePic, laptopPic, ipadPic;

    if(counter === 1){
      iphonePic = iphone;
      laptopPic = laptop;
      ipadPic = ipad;
      imacPic = imac;

    }else if(counter === 2 ){
      iphonePic = iphone2;
      laptopPic = laptop2;
      ipadPic = ipad2;
      imacPic = imac2;
    }
    
   
   

    return (
      <div className="images">
        <div className="images__container">
          <h1 className="images-header">Be Seen on all Screens</h1>
          <Images1 laptop={laptopPic} iphone={iphonePic} ipad={ipadPic} imac={imacPic} />     
          
          <ReactSvg className = {counter == 2 ? 'arrow-hidden' : "images__arrow"} src={arrow} onClick={this.rightClickHandler}/>
          <ReactSvg className = {counter !== 1 ? "images__arrow-left" : "arrow-hidden"} src={lArrow} onClick={this.leftClickHandler}/>
        </div>
      </div>
    );
  }
}

export default Images;
