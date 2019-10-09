import React from 'react'; 



const PortSquare = (props) => {

    return(
       
        <div className={props.className}>
             <a target="_blank" rel="noopener noreferrer" href={props.link} className="portsquare__link"/>
        </div>
        
        
    )
}


export default PortSquare ;