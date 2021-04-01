import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink,  NavLogo} from './NavbarElements'

const Navbar = ({ toggle }) => {
    const active = '#256ce1'
    return (
            <Nav>
                <NavLogo to="/home">
                    <h1>Logo</h1>
                </NavLogo>
                <Bars onClick={toggle}/>
                <NavMenu>
                    <NavLink to="/home" activeStyle={{active}}>
                        Home
                    </NavLink>
                    <NavLink to="/projects" activeStyle={{active}}>
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeStyle={{active}}>
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
