import React, { Component } from 'react';
import ReactSvg from "react-svg";
import logo from '../assets/logo.svg'



class Navbar extends Component {

    render(){

        return(
            <div className="navbar__container">
                <div className="navbar__logo">
                    <ReactSvg className="navbar__logo-1" src={logo}/>

                </div>
                <div className="navbar__links">
                    <ul className="navbar__links-list">
                        <li className="navbar__links-list-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="navbar__links-list-item">
                            <a href="#">Pricing</a>
                        </li>
                        
                        <li className="navbar__links-list-item">
                            <a href="#">Our Work</a>
                        </li>
                        <li className="navbar__links-list-item">
                            <a href="#">Contact Us</a>
                        </li>
                        
                    </ul>

                </div>
            </div>   
            )
    }
}



export default Navbar;