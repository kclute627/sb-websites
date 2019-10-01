import React from "react";
import Homepage from "../Components/Homepage/Homepage";
import Navbar from "../Components/Navbar";
import Images from "../Components/Images";
import Pricing from "./Pricing/Pricing";
import imac from "../assets/Imac.png";

import laptop from "../assets/Laptop.png";
import ipad from "../assets/Ipad.png";
import iphone from "../assets/iphoneX2.png";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Getstarted from "../Components/GetStarted";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Images imac={imac} ipad={ipad} iphone={iphone} laptop={laptop} />
      <Pricing />
    </div>
  );
}

export default App;
