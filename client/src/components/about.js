import React from 'react';
import './about.css';
import resume from '../assets/resume.pdf';

const About = () => {
    return <section id='about'>
        <h1 className='aboutTitle'>About Me</h1>
        <p className='aboutDescription'>I'm a Computer Science major with a minor in Mechanical 
        Engineering at the Massachusetts Institute of Technology. I plan to graduate in June of 2025 and 
        hope to learn as much as I can before then. I'm comfortable using Python, C, Typescript, 
        Javascript, React, HTML, CSS, Git, and Assembly, but I'm always willing to expand my skillset and 
        work on new projects!
        </p>
        <iframe className='resume' title='Resume' src={resume}></iframe>
    </section>
};

export default About