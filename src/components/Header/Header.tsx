import React from "react";
import {
  HeaderWrapper,
  Logo,
  LogoText,
  Menu,
  Navigation,
  NavItem,
  NavLink,
} from "./Header.styles";

export interface HeaderProps {
  menuLinks: {
    name: string;
    link: string;
  }[];
}

function Header({ menuLinks }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <HeaderWrapper>
      <Logo to="/">
        <LogoText>ZU</LogoText>
      </Logo>
      <nav>
        <Navigation isOpen={isMenuOpen}>
          {menuLinks.map((link) => (
            <NavItem key={link.name}>
              <NavLink to={link.link} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </NavLink>
            </NavItem>
          ))}
        </Navigation>
        <Menu
          aria-label="hamburger menu"
          id="hamburger"
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Menu>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
