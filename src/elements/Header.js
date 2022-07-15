import React, { useState } from 'react';
import {ReactComponent as IconLogo} from '../assets/shared/logo.svg';
import {ReactComponent as IconHamburger} from '../assets/shared/icon-hamburger.svg';
import {ReactComponent as IconClose} from '../assets/shared/icon-close.svg';
import {NavLink, useLocation} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const url = useLocation(); //obtenemos la información de la URL
    let secondPath = url.pathname.split('/').pop(); //Obtiene el segundo camino de la url. Por ejemplo, /destination/SEGUNDOCAMINO
    if(secondPath.length === 0){
        secondPath = 'noempty';
    }
    return (
        <ContenedorHeader>
            <ContenedorIconoLogo>
                <IconLogo/>
            </ContenedorIconoLogo>
            <Rectangulo/>
            <Menu show={mobileMenu}>
                <NavLink to='/'> <b>00</b>HOME</NavLink>
                <NavLink to={`/destination/${secondPath}`}><b>01</b>DESTINATION</NavLink>
                <NavLink to={`/crew/${secondPath}`}><b>02</b>CREW</NavLink>
                <NavLink to={`/technology/${secondPath}`}><b>03</b>TECHNOLOGY</NavLink>
            </Menu>
            <ContenedorIconoMobile onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? 
                <IconClose/>
                : 
                <IconHamburger/>
                }

            </ContenedorIconoMobile>
        </ContenedorHeader>
    );
}

const ContenedorHeader = styled.div`
    width: 100vw;
    height: 96px;
    position: absolute;
    top: 40px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 812px){
        top: 0;
    }
`;

const ContenedorIconoLogo = styled.div`
    flex-basis: 96px;
    text-align: center;
    margin-left: 3%;

    @media (max-width: 812px){
        margin: 0;
    }
    @media (max-width: 480px){
        scale: calc(40/48);
    }
`;

const Rectangulo = styled.div`
    position: relative;
    z-index:2;
    left: 3%;
    flex-basis: 32.84vw;
    height: 1px;
    background: rgba(255,255,255,0.25);

    @media (max-width: 812px){
        display: none;
    }
`;
const Menu = styled.div`
    height: 100%;
    width: 57.6vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 2.7px;
    box-sizing: border-box;
    background: rgba(255,255,255, 0.04);
    backdrop-filter: blur(81.55px);

    & b{
        margin-right: 11px;
    }
    
    & a {
        display: flex;
        align-items: center;
        height: 100%;
        text-decoration: none;
        color: #fff;
        border-bottom: 3px solid transparent; 
    }
    & a:hover {
        border-bottom: 3px solid rgba(255,255,255, 0.5021);
    }
    & a.active {
        border-bottom: 3px solid #fff;       
    }

    @media (max-width: 812px){
        width: 58.6vw;
        & b{
            display: none;
        }
    }

    @media (max-width: 480px){
        display: ${props => props.show ? 'flex' : 'none'};
        position: absolute;
        z-index:100;
        top:0;
        right: 0;
        height: 100vh;
        width: 67.7vw;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 20vh;
        padding-left: 8.5vw;
        
        & b {
            display: block;
        }

        & a {
            margin: 20px;
            height: fit-content;
            width: 100%;
            border: none;
        }

        & a:hover{
            border: none;
        }

        & a.active {
            border: none;
            border-right: 3px solid #fff;       
    }
    }
`;

const ContenedorIconoMobile = styled.div`
    display: none;
    margin: 24px;

    @media (max-width: 480px){
        display: block;
        
        z-index:200;
    }
`;

export default Header;