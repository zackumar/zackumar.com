import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const containerStyle = {
  margin: '0',
  display: 'flex',
  justifyContent: 'space-between',
  flex: 1,
  padding: 32,
}

const ulNavStyle = {
  margin: '0',
  display: 'flex',
  flex: 1,
}

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
        <ul style={ulNavStyle}>
          {menuLinks.map((link) => (
            <LinkItem key={link.name}>
              <LinkText to={link.link}>{link.name}</LinkText>
            </LinkItem>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
