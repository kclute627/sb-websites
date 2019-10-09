import React, { Component } from "react";
import Navbar from "./Navbar";



const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };
  

class GetStarted extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        website: '',
    }

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
              messageSent: true
            })
          ).then(()=> this.setState({messageSent: false}))
          .catch(error => alert(error));
    
        e.preventDefault();
      };

      changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
          });
      }
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
              onChange= {this.changeHandler}
            />
            <label htmlFor="" className="getstarted__form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="getstarted__form-emai"
              onChange= {this.changeHandler}
            />

            <select name="website"  onChange= {this.changeHandler}>
                <option value='null'></option>
                <option value="single">Single Page Website</option>
                <option value="5page">5 Page Website</option>
                <option value ="10page">10 Page Website</option>
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
              name="message"
              className="getstarted__form-message"
            ></textarea>

            

            <button type="submit" className="getstarted__form-submit" onSubmit={this.submitHandler} >Submit </button>
            <input type="hidden" name="form-name" value="contact" />
          </form>
        </div>
        <div className="getstarted__footer"></div>

      </div>
    );
  }
}

export default GetStarted;
