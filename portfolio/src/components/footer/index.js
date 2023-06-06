import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';


const Footer = () => {
    return (
        <div className="footer-div">
            <Navbar className="footer-nav-bar" bg="dark" variant="dark" >
                <Nav className="footer-nav">
                    <Nav.Link className="footer-nav-links" href="https://github.com/CaldwellDerek" target="_blank">GitHub</Nav.Link>
                    <Nav.Link className="footer-nav-links"  href="https://www.linkedin.com/in/djcaldwell95/" target="_blank">LinkedIn</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Footer;