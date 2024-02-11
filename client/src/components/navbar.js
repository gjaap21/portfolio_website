import React, {useState} from 'react'
import './navbar.css'
import logo from '../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../assets/contact.png';
import menu from '../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

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

            <img src={menu} alt='Menu' className='menuButton' onClick={()=>setShowMenu(!showMenu)}/>
            <div className='mobileMenu' style={{display: showMenu? 'flex' : 'none'}}>
                <Link activeClass='active' to='landing' spy ={true} smooth={true} offset={-100} 
                    duration={500} className='mobileMenuItem' onClick={()=>setShowMenu(false)}>
                    Home</Link>
                <Link activeClass='active' to='about' spy ={true} smooth={true} offset={-10} 
                    duration={500} className='mobileMenuItem' onClick={()=>setShowMenu(false)}>
                    About</Link>
                <Link activeClass='active' to='projects' spy ={true} smooth={true} offset={20} 
                    duration={500} className='mobileMenuItem' onClick={()=>setShowMenu(false)}>
                    Projects</Link>
                <Link activeClass='active' to='contact' spy ={true} smooth={true} offset={20} 
                    duration={500} className='mobileMenuItem' onClick={()=>setShowMenu(false)}>
                    Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar