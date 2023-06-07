import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import menu from '../../assets/menu.png';
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
                <Dropdown className="dropdown">
                    <Dropdown.Toggle className="dropdown-button" id="dropdown-basic">
                        <img className="menu-icon" src={menu} alt="menu icon"></img>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                 </Dropdown>
            </Navbar>
        </div>
    );
}

export default Navigation;