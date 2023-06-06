import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

const Navigation = () => {
    return (
        <div className="nav-div">
            <Navbar className="h-100" bg="dark" variant="dark" >
                <Navbar.Brand className="ms-2 w-100 d-flex justify-content-between" href="#about">Derek Caldwell</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="about">About</Nav.Link>
                    <Nav.Link href="projects">Projects</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                    <Nav.Link href="contact">Resume</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Navigation;