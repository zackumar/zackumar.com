import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const containerStyle = {
    margin: '0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    padding: 32,
    backgroundColor: '#fff',
}

const NavMenu = styled.ul`
    margin: 0;
    display: flex;

    flex: 1;

    transition: 0.4s;

    @media only screen and (max-width: 600px) {
        position: absolute;
        right: 100%;
        top: 6rem;
        padding-bottom: 2rem;
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        text-align: center;

        box-shadow: 0 25px 25px rgba(0, 0, 0, 0.05);
    }

    &.active {
        display: block;
        right: 0%;
    }
`

const LinkItem = styled.li`
    list-style-type: none;
    padding: 1.5rem;
    font-size: 1.25em;
    font-weight: 500;

    link {
        text-decoration: none;
    }
`

const LinkText = styled(Link)`
    color: #000;
    text-decoration: ${({ to }) => (typeof window !== 'undefined' ? (to === window.location.pathname ? 'underline' : 'none') : 'none')};

    &:hover {
        text-decoration: underline;
    }

    @media only screen and (max-width: 600px) {
        margin: 2.5rem 0;
    }
`

const linkStyle = {
    textDecoration: 'none',
}

const LogoBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 4px solid #000;

    transform: rotate(0deg);
    transition: transform 0.4s ease-in-out;

    span {
        transform: rotate(0deg);
        transition: transform 0.4s ease-in-out;
    }

    &:hover {
        span {
            transform: rotate(-90deg);
            transition: transform 0.4s ease-in-out;
        }
        transform: rotate(90deg);
        transition: transform 0.4s ease-in-out;
    }

    @media (min-width: 600px) {
        width: 50px;
        height: 50px;
        border: 5px solid #000;
    }
`

const LogoText = styled.span`
    font-size: 18px;
    color: #000;
`

const Hamburger = styled.button`
    border: none;
    background-color: #fff;

    display: none;

    span {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
        background-color: black;
        transform-origin: center center;
    }

    &.active {
        span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        span:nth-child(2) {
            opacity: 0;
        }

        span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }

    @media only screen and (max-width: 600px) {
        display: block;
    }
`

function toggleMenu() {
    const navMenu = document.getElementById('navMenu')
    const hamburger = document.getElementById('hamburger')

    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active')
        hamburger.classList.remove('active')
    } else {
        navMenu.classList.add('active')
        hamburger.classList.add('active')
    }
}

const Navbar = ({ menuLinks }) => {
    return (
        <div style={containerStyle}>
            <h1
                style={{
                    margin: '0',
                }}
            >
                <Link style={linkStyle} to="/">
                    <LogoBox>
                        <LogoText>ZU</LogoText>
                    </LogoBox>
                </Link>
            </h1>
            <nav>
                <NavMenu id="navMenu">
                    {menuLinks.map((link) => (
                        <LinkItem key={link.name}>
                            <LinkText to={link.link}>{link.name}</LinkText>
                        </LinkItem>
                    ))}
                </NavMenu>
                <Hamburger id="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
            </nav>
        </div>
    )
}

export default Navbar
