import React, { Component } from "react";
import ReactRotatingText from "react-rotating-text";
import { Link} from "react-router-dom";


class Homepage extends Component {

  state = {
    started: false,
  }

  
  click = () => {
    
    this.setState({
      started: true,
    })
  }

  render() {

   
   
    return (
     
        <div className="homepage__container">
        <div className="homepage__header">
          <h1 className="homepage__header-1">
            Helping your business{" "}
            <ReactRotatingText
              className="rotate"
              pause={2000}
              typingInterval={70}
              items={[
                "Grow and profit more",
                "Rank higher Than your Compitetion",
                "Save Time and Money",
                "impress clients with a stunning website"
              ]}
            />
          </h1>
        </div>
        <div className="homepage__btn-container">
          <a href="#price">
            <button  className="homepage__btn-1">Pricing</button>
          </a>
          <a>            
          <Link to='/started'>
           <button className="homepage__btn-2">
             Get Started
          </button>  
           
              
          </Link>
          </a> 
          
         
        </div>
      </div>
       
    
       
      
    );
  }
}

export default Homepage;

//
