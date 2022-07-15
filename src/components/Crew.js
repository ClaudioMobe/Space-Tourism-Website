import React from 'react';
import styled from 'styled-components';
import fondoDesktop from '../assets/crew/background-crew-desktop.jpg';
import fondoTablet from '../assets/crew/background-crew-tablet.jpg';
import fondoMobile from '../assets/crew/background-crew-mobile.jpg';
import Title from '../elements/Title';
import {DouglasData, MarkData, VictorData, AnoushehData} from '../elements/CrewData';
import { Navigate, useParams } from 'react-router-dom';

const Crew = () => {
    const {id} = useParams();
    const chooseCrew = (id) => {
        switch(id) {
            case 'DouglasHurley':
                return <DouglasData/>;
            case 'MarkShuttleworth':
                return <MarkData/>;
            case 'VictorGlover':
                return <VictorData/>;
            case 'AnoushehAnsari':
                return <AnoushehData/>;
            default:
                return <Navigate redirect to='/crew/DouglasHurley'/>;
        }
    }
    return (
        <ContenedorCrew>
            <Title><b>02</b>Meet your crew</Title>
            {chooseCrew(id)}
        </ContenedorCrew>
    );
}

const ContenedorCrew = styled.div`
    background-image: url(${fondoDesktop});
    background-size: cover;
    height: 100vh;
    width: 100vw;
    background-attachment: fixed;
    
    @media (max-width: 812px){
        background-image: url(${fondoTablet});
        overflow: scroll;
    }
    
    @media (max-width: 480px){
        background-image: url(${fondoMobile});
    }
`;

export default Crew;