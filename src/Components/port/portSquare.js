import React from 'react'; 



const PortSquare = (props) => {

    return(
        <div className={props.className}>
            <img src={props.img} alt="" className="portSquare-img"/>
        </div>
    )
}


export default PortSquare ;