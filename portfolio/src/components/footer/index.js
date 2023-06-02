import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const footerStyle = {
    height: "75px",
    width: "100%"
}

const Footer = () => {
    return (
        <div style={footerStyle} className="w-100 fixed-bottom">
            <Navbar className="h-100 w-100" bg="dark" variant="dark" >
                <Nav className="me-auto w-100 d-flex justify-content-center">
                    <Nav.Link href="https://github.com/CaldwellDerek" target="_blank">GitHub</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/djcaldwell95/" target="_blank">LinkedIn</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Footer;