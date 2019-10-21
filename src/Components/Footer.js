import React, { Component } from 'react';


class Footer extends Component {

    render(){
        return(
            <div className="footer__container">
                <div className="footer__address">
                    <div className="footer__address-header">Our Address</div>
                    <div className="footer__address-1">Small Bussiness Websites Inc.</div>
                    <div className="footer__address-1">116 W Jackson #254</div>                    
                    <div className="footer__address-1">Chicago, IL 60604</div>
                    <a className="footer__address-email" href="mailto:name@email.com">Email Us!</a>
                </div>

            </div>
        )
    }
}


export default Footer;