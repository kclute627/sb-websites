import React, { Component } from "react";
import Navbar from "../Navbar";
import PortSquare from './portSquare';

class work extends Component {
  render() {
    return (
      <div className="work__container">
        <div className="work__navbar">          
          <Navbar
          pricing='/#price' />
        </div>
        <div className="work__header">
            <h1>Check Out Some of our Recent Work</h1>
        </div>
        <div className="work__port">
          <PortSquare
          className ='portsquare-1'
          link= 'https://indyprocess-server.com/'
           />
            <PortSquare
          className ='portsquare-2'
          link= 'https://www.kclutter.com/'
           />
           <PortSquare
          className ='portsquare-3'
          link= 'https://laughing-wright-42dc6c.netlify.com'
           />
            <PortSquare
          className ='portsquare-4'
           />
            <PortSquare
          className ='portsquare-5'
           />
            <PortSquare
          className ='portsquare-6'
           />
             <PortSquare
          className ='portsquare-7'
           />
             <PortSquare
          className ='portsquare-8'
           />
             <PortSquare
          className ='portsquare-9'
           />
            
        </div>
    
      </div>
    );
  }
}

export default work;
