import React from "react";
import './style.css';

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="about-header section-header">Contact Me.</h1>
            <h2>I'd love to hear from you</h2>
            <p>Reach out to me at my email below and I'll respond as soon as I'm able.</p>
            <a href="mailto:djohncaldwell@gmail.com"><button type="button">djohncaldwell@gmail.com</button></a>
        </div>
    );
}

export default Contact;