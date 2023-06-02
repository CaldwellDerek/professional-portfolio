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
                    <Nav.Link href="#github">GitHub</Nav.Link>
                    <Nav.Link href="#linkedin">LinkedIn</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Footer;