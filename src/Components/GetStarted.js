import React, { Component } from "react";
import Navbar from "./Navbar";
import { CirclePicker } from "react-color";

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
    background: []
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
    let newColor = [...this.state.background, color.hex];

    this.setState({ background: newColor });
  };
  render() {
    const { name, message, email, website, background } = this.state;
    return (
      <div className="getstarted__container">
        <div className="getstarted__nav">
          <Navbar />
        </div>

        <div className="getstarted__form">
          <h1 className="getstarted__header">
            Tell Us a Little Bit about your Business
          </h1>
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
            <label htmlFor="" className="getstarted__form-label">
              What Type of Website do you need?
            </label>

            <select name="website" onChange={this.changeHandler} className="getstarted__select">
              <option value="single" selected="true">
                Single Page Website
              </option>
              <option value="5page">5 Page Website</option>
              <option value="10page">10 Page Website</option>
            </select>

            <label htmlFor="" className="getstarted__form-header">
              Tell Us a few things before we get GetStarted
              <ol>
                <li>What Industry Is your business in</li>
                <input type="text" className="getstarted__form-input" />
                <li>List several Websits you like</li>
                <textarea className="getstarted__form-sites"></textarea>
                <li>Do you Currenty Have a Domian Name and Logo</li>
                <select className="getstarted__form-select">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
                <li>Will you need hosting?</li>
                <select className="getstarted__form-select">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <li className="getstarted-li">Colors You would like used on your website?</li>
                <div className="colorpicker__square-container">
                  {this.state.background.map(cur => {
                    return (
                      <div
                        className="colorpicker__square"
                        style={{ background: cur }}
                      />
                    );
                  })}
                </div>

                <CirclePicker onChange={this.colorHandler} className="colorpicker" />
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
