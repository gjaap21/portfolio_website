import React from 'react';
import './projects.css';

const Projects = () => {
    return <section id='projects'>
        <h1 className='projectsTitle'>Projects</h1>
        <p>
            <span className='projectName'>Photoshop Tool</span>
            <span className='projectLanguage'>Typescript</span>
            <br/>
            <ul className='projectDescription'>
                <li>
                Developed a grammar and expression parser to read text inputs and edit an image
                </li>
                <li>
                Allowed for image resizing, overlaying images, adding text to an image, and gluing
                images together through Class implementations of an Expression Interface
                </li>
            </ul>
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
        </p>
    </section>
}

export default Projects