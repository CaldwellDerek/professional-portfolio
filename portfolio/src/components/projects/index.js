import React from "react";
import placeholder from '../../assets/placeholder.jpg';
import bgpimage from '../../assets/board-game-party.png';
import github from '../../assets/github.png';
import ext from '../../assets/external-link.png';
import './index.css';
const Projects = () => {
    return (
        <div className="projects">

            <div className="project-1">
                <div className="project-image-container">
                    <a href="https://bram-g.github.io/Board-Game-Party/" rel="noreferrer" target="_blank">
                        <img className="project-image" src={bgpimage} alt="placeholder" />
                    </a>
                </div>
                <div className="project-info">
                    <h1>Board Game Party</h1>
                    <p>This front end project is designed to help players determine the next best option for their board game party. This app allows users to quickly research, save, and purchase board games. </p>
                    <ul className="technologies-list">
                        <li className="technology">HTML</li>
                        <li className="technology">CSS</li>
                        <li className="technology">JavaScript</li>
                        <li className="technology">Tailwind</li>
                        <li className="technology">Board Game Atlas API</li>
                    </ul>
                    <ul className="external-links-list">
                        <li className="external-link">
                            <a href="https://github.com/Bram-G/Board-Game-Party" target="_blank" rel="noreferrer">
                                <img src={github} alt="github logo" />
                            </a>
                        </li>
                        <li className="external-link">
                        <a href="https://bram-g.github.io/Board-Game-Party/" target="_blank" rel="noreferrer">
                                <img src={ext} alt="external link" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="divider"></div>

            <div className="project-2">

                <div className="project-info">
                    <h1>COR3: Workout Tracker</h1>
                    <p>COR3 is a full stack application that allows users to record their progress in the gym. Users can sign up, calculate their one-rep maximums for Squat, Bench and Deadlifts and store their current maximums for long term comparison. </p>
                    <ul className="technologies-list">
                        <li className="technology">HTML</li>
                        <li className="technology">CSS</li>
                        <li className="technology">JavaScript</li>
                        <li className="technology">Node.js</li>
                        <li className="technology">Express.js</li>
                        <li className="technology">Handlebars.js</li>
                        <li className="technology">Sequelize</li>
                    </ul>
                    <ul className="external-links-list">
                        <li className="external-link">
                            <a href="https://github.com/Raflores10/workout-tracker" target="_blank" rel="noreferrer">
                                <img src={github} alt="github logo" />
                            </a>
                        </li>
                        <li className="external-link">
                        <a href="https://bram-g.github.io/Board-Game-Party/" target="_blank" rel="noreferrer">
                                <img src={ext} alt="external link" />
                            </a>
                        </li>
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
                        <li className="external-link">
                            <a href="https://github.com/CaldwellDerek/jolly-co-op-backend" target="_blank" rel="noreferrer">
                                <img src={github} alt="github logo" />
                            </a>
                        </li>
                        <li className="external-link">
                        <a href="https://jollycoop.netlify.app/" target="_blank" rel="noreferrer">
                                <img src={ext} alt="external link" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;