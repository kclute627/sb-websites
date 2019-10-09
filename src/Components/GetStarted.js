import React, { Component } from "react";
import Navbar from "./Navbar";

class GetStarted extends Component {
  render() {
    return (
      <div className="getstarted__container">
        <div className="getstarted__nav">
          <Navbar />
        </div>
        <div className="getstarted__form">
          <form action="" className="getstarted__forms">
            <label htmlFor="" className="getstarted__form-label">
              Please Provide your Name
            </label>
            <input
              type="text"
              className="getstarted__form-name"
              type="text"
              name="name"
            />
            <label htmlFor="" className="getstarted__form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="getstarted__form-emai"
            />

            <label>
              <input type="radio" value="option1" checked={true} />
              Option 1
            </label>

            <label>
              <input type="radio" value="option2" />
              Option 2
            </label>

            <label>
              <input type="radio" value="option3" />
              Option 3
            </label>

            <label htmlFor="" className="getstarted__form-input">
              Send us a note
            </label>
            <textarea
              name="message"
              className="getstarted__form-message"
            ></textarea>

            <input type="submit" className="getstarted__form-submit" />
            <input type="hidden" name="form-name" value="contact" />
          </form>
        </div>
        <div className="getstarted__footer"></div>
      </div>
    );
  }
}

export default GetStarted;
