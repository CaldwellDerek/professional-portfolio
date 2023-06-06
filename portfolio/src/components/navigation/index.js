import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

const Navigation = () => {
    return (
        <div className="nav-div">
            <Navbar className="nav-bar" bg="dark" variant="dark" >
                <Navbar.Brand className="nav-brand" href="#about">Derek Caldwell</Navbar.Brand>
                <Nav className="nav-links">
                    <Nav.Link className="nav-link" href="about">About</Nav.Link>
                    <Nav.Link className="nav-link" href="projects">Projects</Nav.Link>
                    <Nav.Link className="nav-link" href="contact">Contact</Nav.Link>
                    <Nav.Link className="nav-link" href="contact">Resume</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Navigation;