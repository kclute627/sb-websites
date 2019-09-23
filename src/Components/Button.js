import React from 'react';






const Button = (props) => {

    return(
        <div className="btn__container">
            <button href='#pricing' className="btn__large"> {props.text} </button>
        </div>
    )
}

export default button; 