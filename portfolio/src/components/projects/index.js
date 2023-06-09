import React from "react";
import placeholder from '../../assets/placeholder.jpg';
import './index.css';
const Projects = () => {
    return (
        <div className="projects">
            <div className="project-1">
                <div className="project-image-container">
                    <img className="project-image" src={placeholder} alt="placeholder" />
                </div>
                <div className="project-info">
                    <h1>Project Name</h1>
                    <p>Project description text.</p>
                    <ul className="technologies-list">
                        <li className="technology">Language used</li>
                        <li className="technology">Language used</li>
                        <li className="technology">Language used</li>
                        <li className="technology">Language used</li>
                        <li className="technology">Language used</li>
                    </ul>
                    <ul className="external-links-list">
                        <li className="external-link">GitHub</li>
                        <li className="external-link">Deployment</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;