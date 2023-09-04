import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/images/logo.png'
import './Navbar.css'
import Logo from '../../components/logo/Logo'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const test =(e) =>{
        console.log("a",e)
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
                    <li className='nav-item active'>
                        <a aria-current="page" href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#aboutUs' onClick={closeMenu}>About Us</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#services' onClick={closeMenu}>Services</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects' onClick={closeMenu}>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#ourTeam' onClick={closeMenu}>Our Team</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#careers' onClick={closeMenu}>Careers</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contactUs' onClick={closeMenu}>Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
