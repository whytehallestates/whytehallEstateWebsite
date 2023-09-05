import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/images/logo.png'
import { Link as ScrollLink } from 'react-scroll';

import './Navbar.css'
import Logo from '../../components/logo/Logo'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const test = (e) => {
        console.log("a", e)
    }
    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    {/* <Logo /> */}
                    <img src={logo} alt='logo' height={200} width={300} />
                </a>
                <p className='title'>Whytehall Estates Private Limited
                </p>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#000' }} />)
                        : (<FaBars size={30} style={{ color: '#000' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"} onClick={e => test(e)}>
                    <li className='nav-item'><ScrollLink to="home" spy={true} smooth={true} offset={-80} onClick={closeMenu}>Home</ScrollLink></li>

                    <li className='nav-item'><ScrollLink to="aboutUs" spy={true} smooth={true} offset={-80} onClick={closeMenu}>About Us</ScrollLink></li>

                    <li className='nav-item'><ScrollLink to="services" spy={true} smooth={true} offset={-80} onClick={closeMenu}>Services</ScrollLink></li>

                    <li className='nav-item'><ScrollLink to="projects" spy={true} smooth={true} offset={-80} onClick={closeMenu}>Projects</ScrollLink></li>

                    <li className='nav-item'><ScrollLink to="ourTeam" spy={true} smooth={true} offset={-80} onClick={closeMenu}>Our Team</ScrollLink></li>

                    <li className='nav-item'><ScrollLink to="careers" spy={true} smooth={true} offset={-80} onClick={closeMenu}>Careers</ScrollLink></li>

                    <li className='nav-item'><ScrollLink to="contactUs" spy={true} smooth={true} offset={-80} onClick={closeMenu}>Contact Us</ScrollLink></li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
