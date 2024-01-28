import React from 'react';
import './landing.css'
import me2 from '../assets/me2.png'

const Landing = () => {
    return (
        <section id='landing'>
            <div className='landingText'>
                <span className='hi'>Hi,</span>
                <span className='introText'>I'm <span className='introName'>Gurjaap Bal,</span>
                <br/>Student Software Engineer.</span>
                <p className='introParagraph'>I am an eager software developer working to gain more <br/>
                    experience to become a full-fledged Software Engineer!</p>
            </div>
            <img src={me2} alt='Profile' className='me'/>
        </section>
    )
}

export default Landing