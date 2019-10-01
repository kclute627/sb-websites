import React, {Fragment} from 'react';



const Images1 = (props)=> {
    const { laptop, ipad, iphone, imac} = props;
    return(
        <Fragment>
            <img className="images-1" src={imac} alt="" />
          <img className="images-3" src={laptop} alt="" />
          <img className="images-4" src={ipad} alt="" />
          <img className="images-5" src={iphone} alt="" />
        </Fragment>
        
    )
}



export default Images1;