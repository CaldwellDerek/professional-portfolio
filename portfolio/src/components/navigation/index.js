import React from "react";
import menu from '../../assets/menu.png';
import resume from '../../assets/resume.pdf'
import './style.css';

const showDropmenu = () => {
    document.querySelector(".closemenu").style.visibility = "visible";
    document.querySelector(".dropmenu").style.display="block";
    document.querySelector(".dropmenu").style.width = "60%";
    document.querySelector(".mobile-nav").style.display = "flex";
    document.querySelector("body").setAttribute("style", "overflow-y: hidden;");
    document.querySelector(".content").style.filter = "blur(8px)";
    document.querySelector(".nav-div").style.filter = "blur(8px)";
}

const Navigation = () => {
    return (
        <div className="nav-div">
                <p>Derek Caldwell</p>
                <ul className="nav-links">
                    <li><a className="nav-link" href="#about">About</a></li>
                    <li><a className="nav-link" href="#projects">Projects</a></li>
                    <li><a className="nav-link" href="#contact">Contact</a></li>
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