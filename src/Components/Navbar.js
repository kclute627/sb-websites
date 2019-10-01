import React, { Component } from "react";
import ReactSvg from "react-svg";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar__container">
        <div className="navbar__logo">
          <ReactSvg className="navbar__logo-1" src={logo} />
        </div>
        <div className="navbar__links">
          <ul className="navbar__links-list">
            <li className="navbar__links-list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar__links-list-item">
              <a href="#price">Pricing</a>
            </li>

            <li className="navbar__links-list-item">
              <Link to='/work'>Our Work</Link>
            </li>

            <li className="navbar__links-list-item">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="navbar__links-list-item">
              <Link to="/started">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
