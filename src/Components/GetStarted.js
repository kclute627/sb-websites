import React, { Component } from "react";
import Navbar from "./Navbar";

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
    messageSent: null
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
  render() {
    const { name, message, email, website } = this.state;
    return (
      <div className="getstarted__container">
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
              ><option value="null"></option>
              <option value="single">Single Page Website</option>
              <option value="5page">5 Page Website</option>
              <option value="10page">10 Page Website</option>
            </select>

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
              value={message}
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
