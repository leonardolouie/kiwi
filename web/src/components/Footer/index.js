import React, { Component } from 'react';
import '../Footer/Footer.scss';

class Footer extends Component {
    render(){
        return (
            <div className="footer">
                <h4 className="footer-website__title">The Manila Times</h4>
                <a href=""><p className="footer-website__link">PRIVACY POLICY | TERMS & CONDITIONS</p></a>
            </div>
        )
    }
}

export default Footer;
