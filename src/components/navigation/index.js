import React from "react";
import menu from '../../assets/menu.png';
import resume from '../../assets/resume.pdf'
import './style.css';

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav-div").style.top = "0";
    document.querySelector(".nav-div").style.boxShadow = "0 0.2rem 0.3rem black"

  } else {
    document.querySelector(".nav-div").style.top = "-6.25em";
  }

  if (currentScrollPos === 0){
    document.querySelector(".nav-div").style.boxShadow = "0 0 0 black";
  }
  prevScrollpos = currentScrollPos;
}

const showDropmenu = () => {
    document.querySelector(".closemenu").style.visibility = "visible";
    document.querySelector(".dropmenu").style.width = "80%";
    document.querySelector(".mobile-nav").style.left = "10%"
    document.querySelector("body").setAttribute("style", "overflow-y: hidden;");
    document.querySelector(".content").style.filter = "blur(8px)";
    document.querySelector(".nav-div").style.filter = "blur(8px)";
}

const Navigation = () => {
    return (
        <div className="nav-div">
                <p>Derek Caldwell</p>
                <ul className="nav-links">
                    <li><a className="nav-link" href="#about-container">About</a></li>
                    <li><a className="nav-link" href="#projects-container">Projects</a></li>
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