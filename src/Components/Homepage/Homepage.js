import React, { Component } from "react";
import ReactRotatingText from 'react-rotating-text';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage__container">
        <div className="homepage__header">
          <h1 className="homepage__header-1">
            We Can Help
          </h1>
          <ReactRotatingText className ='rotate' pause={2500} items={['Build Stunning Websites', 'Grow your business', 'Get your Business Noticed', 'You Worry Less']} />

          
        </div>
      </div>
    );
  }
}

export default Homepage;


//