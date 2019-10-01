import React from "react";
import ReactDOM from "react-dom";
import "./Sass/main.scss";
import App from "./Components/App";
import GettingStarted from "./Components/GetStarted";
import Faq from './Components/Faq';
import Work from './Components/Work';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div className="">      
      <Route path="/started" component={GettingStarted} />
      <Route path="/faq" component ={Faq}/>
      <Route path="/work" component={Work}/>
      <Route exact path="/" component={App} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
