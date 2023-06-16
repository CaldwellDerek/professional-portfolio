import React from "react";
import './style.css';

const buttonClick = () => {
    window.location.href="#about-container";
}

const Hero = () => {
    return (
        <div id="hero">
            <p>Hello, I'm</p>
            <h1>Derek Caldwell</h1>
            <p className="hero-intro">I am a full stack developer based out of the greater Seattle area with a passion for crafting user-centric web experiences and staying at the forefront of web development technologies.</p>
            <button type="button" onClick={buttonClick}>Get to know me!</button>
        </div>
    );
}

export default Hero;