import React from 'react'
import {SidebarContainer, Icon, SidebarRoute, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/home" onClick={toggle}> Home</SidebarLink>
                    <SidebarLink to="/about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="/projects" onClick={toggle}>Projects</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap >
                    <SidebarRoute to='/signin' onClick={toggle}>Sign In</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
