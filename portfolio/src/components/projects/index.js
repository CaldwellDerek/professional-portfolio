import React from "react";
import bgpimage from '../../assets/board-game-party.jpg';
import cwtimage from '../../assets/core.jpg';
import jcimage from '../../assets/jollycoop.jpg';
import github from '../../assets/github.png';
import ext from '../../assets/external-link.png';
import './style.css';

const Projects = () => {
    return (
        <div id="projects">

            <div className="project project-1">
                <div className="project-image-container overlay">
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

            <div className="project project-2">
                <div className="project-image-container-2 overlay">
                    <a href="https://bram-g.github.io/Board-Game-Party/" rel="noreferrer" target="_blank">
                    <img className="project-image" src={cwtimage} alt="placeholder" />
                    </a> 
                </div>
                <div className="project-info-2">
                    <h1>COR3: Workout Tracker</h1>
                    <p>COR3 is a full stack application that allows users to record their progress in the gym with a focus on Bench, Squat, and Deadlift. Users can sign up, calculate, and store their current maximums for long term comparison. </p>
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
            </div>

            <div className="divider"></div>

            <div className="project project-3">
                <div className="project-image-container overlay">
                    <a href="https://jollycoop.netlify.app/" rel="noreferrer" target="_blank">
                        <img className="project-image" src={jcimage} alt="placeholder" />
                    </a>
                </div>
                <div className="project-info-3">
                    <h1>Jolly Co-op</h1>
                    <p>A full stack application that lets users form gaming groups to decide on the next video game to play together. Groups can research, save, and vote on the next video game they'd like to play.</p>
                    <ul className="technologies-list">
                        <li className="technology">HTML</li>
                        <li className="technology">CSS</li>
                        <li className="technology">JavaScript</li>
                        <li className="technology">Node.js</li>
                        <li className="technology">Express.js</li>
                        <li className="technology">Sequelize</li>
                        <li className="technology">React</li>
                        <li className="technology">Bootstrap</li>
                        <li className="technology">rawg.io</li>
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