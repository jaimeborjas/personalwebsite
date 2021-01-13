import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink,  NavLogo} from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
            <Nav>
                <NavLogo to="/home">
                    <h1>Logo</h1>
                </NavLogo>
                <Bars onClick={toggle}/>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
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
