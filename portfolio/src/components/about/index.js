import React from "react";
import profilePicture from "../../assets/profile-picture.jpg"
import './style.css';

const buttonClick = () => {
    window.location.href = "#projects-container";
}

const About = () => {
    return (
        <div id="about-container">
            <h1 className="about-header section-header">A Little About Me.</h1>
        <div id="about">
            <div className="portrait">
                <div className="img-container">
                    <img src={profilePicture} alt="self portrait" />
                    <div className="img-wrapper"></div>
                </div>
            </div>
            <div id="intro">
                <p>My journey in computer science began in 2018 when I enrolled at Western Governor's University in their Software Development program. After graduating in 2022 with a Bachelor's of Science, I sought to expand my skillset and enroll at the University of Washington in a full stack web development bootcamp where I graduated in March of 2023.</p>
                <p>My time with both Universities has taught me much, and has given me the opportunity to develop full stack applications both independently and collabaratively. As a recent graduate, I'm eager to apply my skillsets and prove myself as a valuable member in a development team.</p>
        
                <button className="about-button" type="button" onClick={buttonClick}>View my work!</button>
            </div>
        </div>
        </div>
    );
}

export default About;