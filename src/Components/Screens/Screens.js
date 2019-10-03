import React, { Component } from 'react'; 






class Screens extends Component {


        render(){


            return(
                <div className="screen__container">
                      <Images imac={imac} iphone ={iphone}  laptop={laptop} ipad={ipad} />
                </div>
              

            )
        }
}


export default Screens;