import React from 'react';
import './projects.css';
import photoshop from '../assets/photoshop.png';
import memoryGameDemo from '../assets/memoryGameDemo.mov';
import platformerVid from '../assets/platformerVideo.mov';

const Projects = () => {
    return <section id='projects'>
        <h1 className='projectsTitle'>Projects</h1>
        <span>
            <span className='projectName'>Personal Website</span>
            <span className='projectLanguage'>React</span>
            <br/>
            <ul className='projectDescription'>
                <li>
                Designed a React-based website using HTML for structure and CSS for styling 
                </li>
                <li>
                Includes features such as a navigation bar and fully responsive design
                </li>
            </ul>
            <span className='projectName'>Photoshop Tool</span>
            <span className='projectLanguage'>Typescript</span>
            <br/>
            <ul className='projectDescription'>
                <li>
                Developed a grammar and expression parser to read text inputs and edit images
                </li>
                <li>
                Allowed for adding captions, image resizing, overlaying images, adding text to an image, 
                and gluing images together through Class implementations of an Expression Interface
                </li>
            </ul>
            <p className='imageDescription'>Example image built with this tool using images as png files
                and user-defined captions.
                <img src={photoshop} alt='Demonstration' className='projectImg'/>
            </p>
            <br/>
            <span className='projectName'>Platformer Game</span>
            <span className='projectLanguage'>Python</span>
            <br/>
            <ul className='projectDescription'>
                <li>
                Represented player and objects as sprites with attributes such as position coordinates
                and velocity vectors
                </li>
                <li>
                Designed a collision detection algorithm using hitboxes on each sprite and translation
                vectors to correct collisions
                </li>
            </ul>
            <p className='imageDescription'>Video demonstration of the collision detection algorithm
                in action.
                <video controls='controls' className='memoryVid'>
                    <source src={platformerVid} alt='Demonstration'/>
                </video>
            </p>
            <br/>
            <span className='projectName'>Card Matching Game</span>
            <span className='projectLanguage'>Typescript</span>
            <br/>
            <ul className='projectDescription'>
                <li>
                Implemented multiplayer feature by using concurrency through Promises
                </li>
                <li>
                Substantial work with abstract data types and keeping them safe from rep exposure
                </li>
            </ul>
            <p className='imageDescription'>Video demonstration of the concurrent blocking system
                used in the game.
                <video controls='controls' className='memoryVid'>
                    <source src={memoryGameDemo} alt='Demonstration'/>
                </video>
            </p>
        </span>
    </section>
}

export default Projects