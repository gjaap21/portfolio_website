import React from 'react';
import './about.css';
import resume from '../assets/resume.pdf';

const About = () => {
    return <section id='about'>
        <h1 className='aboutTitle'>About Me</h1>
        <p className='aboutDescription'>I'm a Computer Science major with a minor in Mechanical 
        Engineering at the Massachusetts Institute of Technology. I plan to graduate in February of 2025 and 
        hope to learn as much as I can before then. I'm comfortable using Python, C, TypeScript, JavaScript,
        React, Redux, Julia, HTML, CSS, Git, and Assembly, but I'm always willing to expand my skillset and 
        work on new projects! Here is a copy of my <a className='resume' href={resume} target='_blank' 
        rel='noreferrer'>resume</a>.
        </p>
        <div className='portfolio'>
            <h2 className='portfolioHeading'>Education</h2>
            <p className='portfolioSubsection'>
                <span className='schoolName'>Massachusetts Institute of Technology</span>
                <span className='gradDate'>Grad Date: May 2025</span>
                <br/>
                <span className='degree'>Bachelor’s of Science in Computer Science and Engineering <br/>
                    Minor in Mechanical Engineering</span>
                <br/>
                <span className='gpa'>4.80 GPA</span>
                <br/>
                <span className='courseTitle'>Relevant Coursework:</span>
                <span className='courses'>Design and Analysis of Algorithms,  Software Design, Software 
                    Construction, Computer Systems Engineering, Intro to Machine Learning, Fundamentals of 
                    Programming, Computation Structures, Low-Level Programming in C and Assembly, 
                    Mathematics for Computer Science</span>
                <br/>
                <span className='skillsTitle'>Technical Skills:</span>
                <span className='skills'>Considerable experience with Python, C, TypeScript, JavaScript,
                React, Redux, Julia, HTML, CSS, Git, and Assembly.</span>
            </p>
            <h2 className='portfolioHeading'>Employment</h2>
            <span className='portfolioSubsection'>
            <span className='jobName'>Amazon SDE Intern</span>
                <span className='workDate'>June 2024 - August 2024</span>
                <br/>
                <ul className='jobDescription'>
                    <li>
                    Implemented a feature to create contacts in bulk, involving UI design, configuring API 
                    calls, parsing and validating CSV’s, updating redux state, and displaying progress updates
                    </li>
                    <li>
                    Refactored redux slices to improve state handling in the Alexa fleet management console
                    </li>
                    <li>
                    Solved customer-facing issues using efficient bug-finding techniques
                    </li>
                </ul>
                <span className='jobName'>Orchard Machinery Corporation Intern</span>
                <span className='workDate'>June 2022 - August 2022</span>
                <br/>
                <ul className='jobDescription'>
                    <li>
                    Extensive design experience on Solid Works creating machine components and fixtures
                    </li>
                    <li>
                    Worked alone to solve real world issues like redesigning a bumper to allow for towing
                    </li>
                    <li>
                    Teamed up with Mechanical Engineers in the industry to tackle large-scale problems such
                    as modeling a conveyor belt assembly for a new machine
                    </li>
                </ul>
            </span>
        </div>

    </section>
};

export default About