import React from "react";
import Homepage from "../Components/Homepage/Homepage";
import Navbar from "../Components/Navbar";
import Images from "../Components/Images";
import Pricing from "./Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Images  />
      <Pricing />
    </div>
  );
}

export default App;
