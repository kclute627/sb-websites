import React, { Component } from 'react';





class GetStarted extends Component{

    render(){
        
        return(
            <div className="getstarted-container">
                <form action="" className="getstarted__form">
                    <label htmlFor="" className="getstarted__form-label">
                        Please Provide your Name
                    </label>
                    <input type="text"
                    className="getstarted__form-name"
                    type="text"
                    name="name"/>
                    <label htmlFor="" className="getstarted__form-label">Email Address</label>
                    <input type="email" name="email" className="getstarted__form-emai"/>
                    <label htmlFor="" className="getstarted__form-input">Send us a note</label>
                    <textarea name="message" className="getstarted__form-message"></textarea>
                    <input type="submit" className="getstarted__form-submit"/>
                    <input type="hidden" name="form-name" value="contact"/>

                </form>
            </div>
        )
    }
}

export default GetStarted;