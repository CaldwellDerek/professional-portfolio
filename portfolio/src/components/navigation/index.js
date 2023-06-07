import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import menu from '../../assets/menu.png';
import './index.css';

const showDropmenu = () => {
    document.querySelector(".closemenu").style.visibility = "visible"
    document.querySelector(".dropmenu").style.width = "60%";
}

document.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target !== document.querySelector(".dropmenu") && event.target !== document.querySelector(".dropmenu-icon")){
        document.querySelector(".dropmenu").style.width = "0%";
        document.querySelector(".closemenu").style.visibility = "hidden";
    }
})

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