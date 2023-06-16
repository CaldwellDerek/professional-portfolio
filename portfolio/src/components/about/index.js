import React from "react";
import profilePicture from "../../assets/profile-picture.jpg"
import './style.css';

const buttonClick = () => {
    window.location.href = "#projects-container";
}

// From a young age, my passion for computer science was ignited through hands-on experiences building computers alongside my father and assisting my brother with his own projects. These early encounters fostered my curiosity and set me on a path to pursue a career in IT. As I grew older, my fascination with technology deepened, and I knew that I wanted to dedicate my professional life to this field.

// To solidify my knowledge and skills, I pursued a Bachelor's of Science in Software Development from Western Governor's University, where I gained a strong theoretical foundation. It was during my studies there that I discovered my true passion for web development. Eager to expand my expertise and practical understanding, I seized the opportunity to further enhance my skill set by completing a Full Stack Web Development certification at the University of Washington. This intensive program provided me with hands-on experience collaborating with classmates to build full-stack applications using a wide range of front-end and back-end technologies, including HTML, CSS, JavaScript, React, and Express.js.

// I am an ideal candidate for a software development team due to my comprehensive educational background, practical experience, and unwavering passion for the field. With a solid understanding of web development principles and proficiency in various technologies, I possess the versatility required to contribute to the success of a team. My ability to effectively collaborate, solve problems, and continuously learn and adapt to emerging trends in the industry make me a valuable asset. I am eager to apply my skills and contribute to innovative projects while actively embracing new challenges that come my way.


// There are several key web development technologies that are widely used in the industry. These technologies encompass both front-end and back-end development and play crucial roles in building dynamic and interactive websites and web applications. Here are some of the key web development technologies:

// Front-End Technologies:

// HTML (Hypertext Markup Language): The standard markup language used for structuring the content of web pages.
// CSS (Cascading Style Sheets): The style sheet language that describes the presentation and visual layout of web pages.
// JavaScript: A versatile programming language that enables dynamic interactivity and functionality on web pages.
// Front-End Frameworks/Libraries:

// React.js: A JavaScript library for building user interfaces, providing a component-based approach for creating reusable UI elements.
// Angular: A TypeScript-based framework for building scalable web applications with a modular architecture.
// Vue.js: A progressive JavaScript framework that focuses on simplicity and ease of integration, ideal for building lightweight applications.
// Back-End Technologies:

// Node.js: A JavaScript runtime that allows server-side execution of JavaScript, enabling the development of scalable and efficient web servers.
// Express.js: A minimalist web application framework for Node.js, providing a robust set of features and middleware for building APIs and web applications.
// Django: A high-level Python web framework that follows the model-view-controller (MVC) architectural pattern, known for its efficiency and ease of use.
// Database Technologies:

// MySQL: An open-source relational database management system (RDBMS) known for its scalability and versatility.
// PostgreSQL: A powerful open-source object-relational database system with a strong emphasis on extensibility and standards compliance.
// MongoDB: A NoSQL database that stores data in flexible, JSON-like documents, suitable for handling large amounts of unstructured data.

// These are just a few examples of key web development technologies, and there are many more depending on specific needs and project requirements. It's important to stay updated with the evolving landscape of web development and explore new technologies as they emerge to ensure your skills remain relevant and in-demand.

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
                <p>I've always had a passion for computer science and web development, which started when I was a kid building computers with my dad and helping my brother with his own projects. I decided to pursue my love for technology by studying Software Development at Western Governor's University and later getting a Full Stack Web Development certification at the University of Washington. I've learned much through these experiences and gained a strong foundation with technologies such as: HTML, CSS, JavaScript, SQL, React, Node, and Express.</p>
                <p>I bring a mix of theoretical knowledge and hands-on experience that allows me to create innovative and user-first interfaces, as well as solid and dependable server-side solutions. Aside from the tech-I'm also a collaborative problem solver who loves staying updated on the latest trends. I'm eager to apply my skillset and dedication to continuous learning as a new member of your development team.</p>
        
                <button className="about-button" type="button" onClick={buttonClick}>View my work!</button>
            </div>
        </div>
        </div>
    );
}

export default About;