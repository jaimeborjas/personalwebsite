import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink,  NavLogo} from './NavbarElements'

const Navbar = () => {
    return (
            <Nav>
                <NavLogo to="/">
                    <h1>Logo</h1>
                </NavLogo>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
    )
}

export default Navbar
