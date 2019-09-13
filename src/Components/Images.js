import React, { Component } from "react";
import ReactSvg from 'react-svg';
import arrow from '../assets/arrow.svg';
import lArrow from '../assets/larrow.svg';
import Images1 from '../Components/Images1';
import imac from "../assets/Imac.png";
import imac2 from "../assets/imac2.png";
import laptop from "../assets/Laptop.png";
import laptop2 from "../assets/laptop2.png";
import ipad from "../assets/Ipad.png";
import ipad2 from "../assets/ipad2.png";
import iphone from "../assets/iphoneX2.png";
import iphone2 from "../assets/iphone2.png";

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
   let  iphonePic, laptopPic, ipadPic, imacPic;

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
          <Images1 imac={imacPic} laptop={laptopPic} iphone={iphonePic} ipad={ipadPic} />     
          
          <ReactSvg className = {counter == 2 ? 'arrow-hidden' : "images__arrow"} src={arrow} onClick={this.rightClickHandler}/>
          <ReactSvg className = {counter !== 1 ? "images__arrow-left" : "arrow-hidden"} src={lArrow} onClick={this.leftClickHandler}/>
        </div>
      </div>
    );
  }
}

export default Images;
