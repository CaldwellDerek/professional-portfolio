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
                    <h1>Board Game Party</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
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

            <div className="divider"></div>

            <div className="project-2">
                {/* <div className="project-image-container">
                    <img className="project-image" src={placeholder} alt="placeholder" />
                </div> */}
                <div className="project-info">
                    <h1>Project Name</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
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
                <div className="project-image-container">
                    <img className="project-image" src={placeholder} alt="placeholder" />
                </div>
            </div>

            <div className="divider"></div>

            <div className="project-3">
                <div className="project-image-container">
                    <img className="project-image" src={placeholder} alt="placeholder" />
                </div>
                <div className="project-info">
                    <h1>Project Name</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
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