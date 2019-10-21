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
    background: [],
    counter: 0,
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
          background: [],
          counter: 0,
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
    let {counter} = this.state;
    if(this.state.background.length < 4){
      let newColor = [...this.state.background, color.hex];
      counter++
      this.setState({ 
        background: newColor,
        counter,
      
      });
      ;
    }else{
      let newColor = [...this.state.background];
      counter++
      if(counter % 5 === 0 ){
       newColor.splice(0,1, color.hex)

        this.setState({
          background: newColor,
          counter: counter++
        })

      }else if(counter % 6 === 0){

        newColor.splice(1,1, color.hex)

        this.setState({
          background: newColor,
          counter: counter++,
        })
      }else if(counter % 7 === 0){
        newColor.splice(2,1, color.hex)

        this.setState({
          background: newColor,
          counter: counter++,
        })
      }else if(counter % 8 === 0){
        newColor.splice(3,1, color.hex)

        this.setState({
          background: newColor,
          counter: counter++,
        })
      }else{
        newColor.splice(0,1, color.hex)
        this.setState({counter: 5, background: newColor,})
      }
    }

      
    
    
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
              <option value="Custom">Custom</option>
            </select>

            <label htmlFor="" className="getstarted__form-header">
              <h1 className="getstarted__header-1">
                 Tell Us a few things before we get GetStarted
              </h1>
             
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

                <CirclePicker onChange={this.colorHandler} colors= {["#fff", "#000", "rgb(51, 9, 240)", "rgb(240, 9, 20)", "rgb(28, 240, 9)", "rgb(4, 51, 0)", "rgb(211, 119, 0)", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]} className="colorpicker" />
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
