import React from 'react'
import './navbar.css'
import logo from '../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../assets/contact.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo'/>
            <div className='desktopMenu'>
                <Link activeClass='active' to='landing' spy ={true} smooth={true} offset={-100} 
                    duration={500} className='desktopMenuElement'> Home </Link>
                <Link activeClass='active' to='about' spy ={true} smooth={true} offset={-10} 
                    duration={500} className='desktopMenuElement'> About </Link>
                <Link activeClass='active' to='projects' spy ={true} smooth={true} offset={20} 
                    duration={500} className='desktopMenuElement'> Projects </Link>
            </div>
            <button className='contactButton' onClick={() => 
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
                <img src={contactImg} alt='' className='contactImg' /> Contact Me
            </button>
        </nav>
    )
}

export default Navbar