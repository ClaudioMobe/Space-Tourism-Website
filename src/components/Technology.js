import React from 'react';
import styled from 'styled-components';
import fondoDesktop from '../assets/technology/background-technology-desktop.jpg';
import fondoTablet from '../assets/technology/background-technology-tablet.jpg';
import fondoMobile from '../assets/technology/background-technology-mobile.jpg';
import Title from '../elements/Title';
import {LaunchData, SpaceportData, SpaceCapsuleData} from '../elements/TechnologyData';
import {useParams, Navigate} from 'react-router-dom';

const Technology = () => {
    const {id} = useParams();
    const chooseData = (id) => {
        switch(id){
            case 'LaunchVehicle':
                return <LaunchData/>;
            case 'Spaceport':
                return <SpaceportData/>;
            case 'SpaceCapsule':
                return <SpaceCapsuleData/>;
            default: 
                return <Navigate redirect to='/technology/LaunchVehicle'/>;
        }
    }
    return (
        <ContenedorTechnology>
            <Title><b>03</b>Space launch 101</Title> 
            {chooseData(id)}
        </ContenedorTechnology>
    );
}

const ContenedorTechnology = styled.div`
    background-image: url(${fondoDesktop});
    background-size: cover;
    height: 100vh;
    width: 100vw;
    
    @media (max-width: 812px){
        background-image: url(${fondoTablet});
        overflow: scroll;
    }
    
    @media (max-width: 480px){
        background-image: url(${fondoMobile});
    }
`;
            

export default Technology;