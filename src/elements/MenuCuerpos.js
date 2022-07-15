import React from 'react';
import styled from 'styled-components';
import { destinationData } from '../data/Info';
import { NavLink } from 'react-router-dom';

const MenuCuerpos = () => {
    return (
        <MenuCuerposContainer>
            {destinationData.map((destination, index)=>{
                return <NavLink key={index} to={`/destination/${destination.name}`}>{destination.name}</NavLink>
            })}
        </MenuCuerposContainer>
    );
};

const MenuCuerposContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 285.5px;

    & a{
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        font-family: 'Barlow Condensed';
        font-size: 16px;
        letter-spacing: 2.7px;
        padding-bottom: 12px;
        border-bottom: 3px solid transparent;
    }

    & a:hover {
        border-bottom: 3px solid rgba(255,255,255, 0.5021);
    }
    & a.active {
        border-bottom: 3px solid #fff;       
    }

    @media (max-width: 812px){
        margin: auto;
    }

    @media (max-width: 480px){
        width: 237.5px;
        & a{
            font-size: 14px;
        letter-spacing: 2.36px;
        }
    }
`;
export default MenuCuerpos;