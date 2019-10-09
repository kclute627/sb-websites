import React, { Component } from "react";
import ReactSvg from "react-svg";
import { Link } from "react-router-dom";
import {HashLink as Links } from 'react-router-hash-link';
import logo from "../assets/logo.svg";


class Navbar extends Component {
  render() {
    let {center, pricing} = this.props;
    return (
      <div className="navbar__container">
        <div className= {center ? "navbar__logo center" : "navbar__logo start"} >
          <ReactSvg className="navbar__logo-1" src={logo} />
        </div>
        <div className={center? "navbar__links" : "navbar__links work-navbar"}>
          <ul className="navbar__links-list">
            <li className="navbar__links-list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar__links-list-item">
              <Links smooth to={pricing} >Pricing </Links>
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
