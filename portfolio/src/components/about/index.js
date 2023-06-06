import React from "react";
import './index.css'
import profilePicture from "../../assets/profile-picture.jpg"



const About = () => {
    return (
        <div id="about">
            <img src={profilePicture} alt="self portrait" />
            <div id="intro">
                <h3>Hello, my name is</h3>
                <h1>Derek Caldwell</h1>
                <p>I am a full stack developer based out of the greater Seattle area with a passion for crafting user-centric web experiences and staying at the forefront of web development technologies.</p>
            </div>
        </div>
    );
}

export default About;