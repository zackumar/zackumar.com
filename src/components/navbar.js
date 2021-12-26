import React from 'react'
import { Link } from 'gatsby'

import * as navbarStyles from './navbar.module.css'

function toggleMenu() {
    const navMenu = document.getElementById('navMenu')
    const hamburger = document.getElementById('hamburger')

    console.log('boop')

    if (navMenu.classList.contains(navbarStyles.active)) {
        navMenu.classList.remove(navbarStyles.active)
        hamburger.classList.remove(navbarStyles.active)
    } else {
        navMenu.classList.add(navbarStyles.active)
        hamburger.classList.add(navbarStyles.active)
    }

    console.log(navMenu.classList)
    console.log(hamburger.classList)
}

const Navbar = ({ menuLinks }) => {
    return (
        <div className={navbarStyles.container}>
            <div className={navbarStyles.logo}>
                <Link className={navbarStyles.logoText} to="/">
                    ZU
                </Link>
            </div>
            <nav>
                <ul id="navMenu" className={navbarStyles.nav}>
                    {menuLinks.map((link) => (
                        <li key={link.name} className={navbarStyles.navItem}>
                            <Link to={link.link} className={navbarStyles.navLink}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className={navbarStyles.hamburger} aria-label="hamburger menu" id="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </div>
    )
}

export default Navbar
