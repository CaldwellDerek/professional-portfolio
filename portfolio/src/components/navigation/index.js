import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import menu from '../../assets/menu.png';
import resume from '../../assets/resume.pdf'
import './index.css';

const showDropmenu = () => {
    document.querySelector(".closemenu").style.visibility = "visible"
    document.querySelector(".dropmenu").style.width = "60%";
}

const Navigation = () => {
    return (
        <div className="nav-div">
            <Navbar className="nav-bar" bg="dark" variant="dark" >
                <Navbar.Brand className="nav-brand">Derek Caldwell</Navbar.Brand>
                <Nav className="nav-links">
                    <Nav.Link className="nav-link" href="about">About</Nav.Link>
                    <Nav.Link className="nav-link" href="projects">Projects</Nav.Link>
                    <Nav.Link className="nav-link" href="contact">Contact</Nav.Link>
                    <Nav.Link className="nav-link" href={resume} target="_blank">Resume</Nav.Link>
                </Nav>
                
                <div className="dropdown">
                    <button className='dropmenu-button' type='button' onClick={showDropmenu}>
                        <img className="dropmenu-icon" src={menu} alt="menu bar"/>
                    </button>
                </div>

            </Navbar>
        </div>
    );
}

export default Navigation;