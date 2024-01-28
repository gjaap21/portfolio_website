import React from 'react';
import './contact.css';
import email from '../assets/email.png';
import phone from '../assets/phone.png';
import linkedin from '../assets/linkedin2.png';
import github from '../assets/github2.png';

const Contact = () => {
    return (
        <div id='contact'>
            <h1 className='contactTitle'>Contact Me</h1>
            <span className='contactDescription'>
                Feel free to contact me to discuss any work opportunities!
            </span>
            <div className='links'>
                <a href='mailto:gurjaapbal1015@gmail.com'>
                    <img src={email} alt='Email' className='link'/></a>
                <a href='tel:5305515644'>
                    <img src={phone} alt='Phone' className='link'/></a>
                <a href='https://www.linkedin.com/in/gurjaap' target='_blank' rel='noreferrer'>
                    <img src={linkedin} alt='LinkedIn' className='link'/></a>
                <a href='https://github.com/gjaap21' target='_blank' rel='noreferrer'>
                    <img src={github} alt='Github' className='link'/></a>
            </div>
        </div>
    )
}

export default Contact