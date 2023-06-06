import React from "react";
import profilePicture from "../../assets/profile-picture.jpg"

const profileStyle = {
    height: "200px",
    width: "200px"
}

const About = () => {
    return (
        <div id="about">
            <img style={profileStyle} src={profilePicture} alt="self portrait" />
            <h1>Hello.</h1>
            <p>My name is Derek Caldwell, I am a full stack developer based out of the greater Seattle area with a passion for crafting user-centric web experiences and staying at the forefront of web development technologies.</p>
        </div>
    );
}

export default About;