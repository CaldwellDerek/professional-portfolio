import React from "react";
import menu from '../../assets/menu.png';
import resume from '../../assets/resume.pdf'
import './index.css';

const showDropmenu = () => {
    document.querySelector(".closemenu").style.visibility = "visible"
    document.querySelector(".dropmenu").style.width = "60%";
    document.querySelector(".mobile-nav").style.display = "flex";
}

const Navigation = () => {
    return (
        <div className="nav-div">
                <div className="nav-brand">Derek Caldwell</div>
                <ul className="nav-links">
                    <li><a className="nav-link" href="about">About</a></li>
                    <li><a className="nav-link" href="projects">Projects</a></li>
                    <li><a className="nav-link" href="contact">Contact</a></li>
                    <li><a className="nav-link" href={resume} target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
                <div className="dropdown">
                    <button className='dropmenu-button' type='button' onClick={showDropmenu}>
                        <img className="dropmenu-icon" src={menu} alt="menu bar"/>
                    </button>
                </div>
        </div>
    );
}

export default Navigation;