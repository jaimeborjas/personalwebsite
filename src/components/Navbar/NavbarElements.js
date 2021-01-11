import styled from 'styled-components'
import {NavLink as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {FaBars} from 'react-icons/fa'


export const Nav = styled.nav`
    background: white;
    height: 80px;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    align-items: center;
    padding: 0.5rem calc((100vw - 1500px)/2);
    z-index: 10;
    position: sticky;
    top: 0;
    border-bottom: #256ce1 solid 1px;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

`
export const NavLogo = styled(LinkR)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
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
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: #256ce1;
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
        padding-top: 5px;
        transform:  translate(-100%, 75%);
        font-size: 2.2rem;
        cursor: pointer;
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
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 100px;
    background: white;
    padding: 15px 30px;
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
