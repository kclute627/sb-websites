import React, { Component } from "react";
import Navbar from "./Navbar";
import { SketchPicker } from 'react-color';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class GetStarted extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    website: "",
    messageSent: null,
    background: '#fff'  
  };




  submitHandler = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() =>
        this.setState({
          name: "",
          email: "",
          message: "",
          website: "",
          messageSent: true
        })
      )
      .then(() => this.setState({ messageSent: false }))
      .catch(error => alert(error));

    e.preventDefault();
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  colorHandler = (color, event) => {
      this.setState({background: color.hex})

  }
  render() {
    const { name, message, email, website, background } = this.state;
    return (
      <div className="getstarted__container" style={{background }}>
        <div className="getstarted__nav">
          <Navbar />
        </div>
        <div className="getstarted__form">
          <form
            action=""
            className="getstarted__forms"
            onSubmit={this.submitHandler}
          >
            <label htmlFor="" className="getstarted__form-label">
              Please Provide your Name
            </label>
            <input
              value={name}
              type="text"
              className="getstarted__form-name"
              type="text"
              name="name"
              onChange={this.changeHandler}
            />
            <label htmlFor="" className="getstarted__form-label">
              Email Address
            </label>
            <input
              value={email}
              type="email"
              name="email"
              className="getstarted__form-emai"
              onChange={this.changeHandler}
            />

            <select name="website" onChange={this.changeHandler}>
              
              <option value="single" selected='true'>Single Page Website</option>
              <option value="5page">5 Page Website</option>
              <option value="10page">10 Page Website</option>
            </select>

            

            <label htmlFor="" className="getstarted__form-input">
              Tell Us a few things before we get GetStarted
              <ol>
                  <li>What Industry Is your business in</li>
                  <input type="text"/>
                  <li>List several Websits you like</li>
                  <textarea className="getstarted__form-sites">

                  </textarea>
                  <li>Do you Currenty Have a Domian Name and Logo</li>
                  <select>
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                  </select>
                  <li>Will you need hosting?</li>
                  <select>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <li>Colors You would like used on your website?</li>
                  <div className ="colorpicker__square">

                  </div>
                  <SketchPicker
                  color={background}
                  onChangeComplete={this.colorHandler} />
              </ol>
            </label>
            <textarea
              value={message}
              onChange={this.changeHandler}
              name="message"
              className="getstarted__form-message"
            ></textarea>

            <button type="submit" className="getstarted__form-submit">
              Submit{" "}
            </button>
            <input type="hidden" name="form-name" value="contact" />
          </form>
        </div>
        <div className="getstarted__footer"></div>
      </div>
    );
  }
}

export default GetStarted;
