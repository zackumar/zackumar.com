import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { minWidthBreakpoint } from '../../theme/utils';

export const HeaderWrapper = styled.header`
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem;
`

export const LogoText = styled.p`
    transform: rotate(0deg);
    transition: transform 0.4s ease-in-out;
`

export const Logo = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 5px solid #000;

    font-weight: 700;
    font-size: 18px;

    transform: rotate(0deg);
    transition: transform 0.4s ease-in-out;
    color: #000;
    text-decoration: none;

    &:hover {
        transform: rotate(90deg);

        ${LogoText} {
            transform: rotate(-90deg);
        }
    }
    
   

`

export const Navigation = styled.ul<{ isOpen: boolean }>`
    flex: 0 1 auto;
    margin: 0;
    display: flex;
    flex: 1;
    transition: 0.4s;

    position: absolute;
    right: 100%;
    top: 6rem;
    padding-bottom: 2rem;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    text-align: center;

    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.05);

    ${minWidthBreakpoint('medium')} {
        position: relative;
        flex-direction: row;
        top: 0;
        box-shadow: none;
        width: unset;
        right: 0%;
    }

    ${({ isOpen }) => isOpen ? css`
        display: block;
        color: green;
        right: 0%;
    ` : ''}
`

export const NavItem = styled.li`
    list-style-type: none;
    padding-left: 1.5rem;
    font-size: 1.125em;
    font-weight: 600;
    margin-top: 0.75rem;
`

export const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
`

export const Menu = styled.button<{ isOpen: boolean }>`
    background-color: #fff;
    border: none;
    display: block;

    ${minWidthBreakpoint('medium')} {
        display: none;
    }

    span {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
        background-color: black;
        transform-origin: center center;
    }

    ${({isOpen}) => isOpen ? css`
        span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        span:nth-child(2) {
            width: 0px;
            opacity: 0;
        }
    
        span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    `: ''}
    
`


