import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)



    const [ color , setColor] = useState(false)

    const changeColor = ()=>{

        if(window.scrollY >=90){

            setColor(true)
        }
        else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)
    const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg': 'header'} >
            <nav className='navbar'>
              
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"} style={{listStyle:"none"}}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#wherenext' onClick={closeMenu}>Plan your next trip</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#insprid' onClick={closeMenu}>Inspiring Ideas</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#reqr' onClick={closeMenu}>Necessity</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
