import styled from 'styled-components/macro'
import {NavLink as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {FaBars} from 'react-icons/fa'


export const Nav = styled.nav`
    background: white;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    align-items: center;
    padding: 0.5rem calc((100vw - 1200px)/2);
    padding-bottom: 0.25px;
    z-index: 10;
    position: sticky;
    top: 0;
    color: #256ce1;
    border-bottom: 1px solid ;
    @media screen and (max-width: 768px){
        transition: 0.8s all ease;
        height: 75px;
    }

`
export const NavLogo = styled(LinkR)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    width: 50px;
    cursor: pointer;

    &.active{
        color: #256ce1;
    }

`

export const NavLink = styled(LinkR)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: center;
    text-align: center;
    padding: 2rem 1rem;
    height: 100%;
    cursor: pointer;
    &:hover{
        color: #256ce1;
    }

    &.active{
        color: #256ce1;
        border-bottom: solid 2px;
    }
`

export const Bars = styled(FaBars)`
    display:none;
    color: #256ce1;

    @media screen and (max-width: 768px){
        display: inline;
        position: absolute;
        top: 0;
        right: 0;
        transform:  translate(-100%, 75%);
        font-size: 2rem;
        cursor: pointer;
        z-index: 11;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
        display: none;
    }

`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 100px;
    background: white;
    padding: 15px 20px;
    color: #256ce1 ;
    border: solid 1px;
    border-color: #256ce1;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #256ce1;
        color: #fff;
    }
`
