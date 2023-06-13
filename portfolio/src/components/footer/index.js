import React from "react";
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
// import './index.css';


const Footer = () => {
    return (
        <div className="footer-div">
                <ul className="footer-nav">
                    <li className="footer-nav-links"><a href="https://github.com/CaldwellDerek" target="_blank" rel="noreferrer"><img className="github-logo" src={github} alt="github logo"></img></a></li>
                    <li className="footer-nav-links"><a href="https://www.linkedin.com/in/djcaldwell95/" target="_blank" rel="noreferrer"><img className="linkedin-logo" src={linkedin} alt="linkedin logo"></img></a></li>
                </ul>
        </div>
    );
}

export default Footer;