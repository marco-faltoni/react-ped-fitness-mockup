import React from "react";
// styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import fb from '../img/fb.svg'
import ig from '../img/ig.svg'
import yt from '../img/yt.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="wrapper">
                <div className="icons">
                    <img src={ig} alt={ig}/>
                    <img src={fb} alt={ig}/>
                    <img src={yt} alt={ig}/>
                </div>
                <div className="lang">
                    <h5>ITA <span><FontAwesomeIcon icon={faChevronDown}/></span> </h5>
                </div>
                <p>Made by <strong>PED</strong> </p>
            </div>
        </div>
    );
};

export default Footer;