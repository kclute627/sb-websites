import React from "react";
import Homepage from "../Components/Homepage/Homepage";
import Navbar from "../Components/Navbar";
import Images from "../Components/Screens/Images";
import Pricing from "./Pricing/Pricing";
import Footer from '../Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar
      center = 'true'
      pricing='/#price' />
      <Homepage />
      <Images  />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
