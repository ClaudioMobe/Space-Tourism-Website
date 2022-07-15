import React from 'react';
import styled from 'styled-components';
import fondoDesktop from '../assets/destination/background-destination-desktop.jpg';
import fondoTablet from '../assets/destination/background-destination-tablet.jpg';
import fondoMobile from '../assets/destination/background-destination-mobile.jpg';
import Title from '../elements/Title';
import { MoonData, MarsData, EuropaData, TitanData} from '../elements/CuerposData';
import { Navigate, useParams } from 'react-router-dom';


const Destination = () => {
    const {id} = useParams();
    
    const chooseData = (id) => {
        switch(id) {
            case 'Moon':
                return <MoonData/>
            case 'Mars':
                return <MarsData/>
            case 'Europa':
                return <EuropaData/>
            case 'Titan':
                return <TitanData/>
            default:
                return <Navigate replace to='/destination/Moon'/>
        }
    }
    return (
        <ContenedorDestination>
            <Title><b>01</b>Pick your destination</Title>
            {chooseData(id)}
        </ContenedorDestination>
    );
}
 
const ContenedorDestination = styled.div`
    background-image: url(${fondoDesktop});
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    width: 100vw;
    overflow: scroll;

    @media (max-width: 812px){
        background-image: url(${fondoTablet});
    }
    
    @media (max-width: 480px){
        background-image: url(${fondoMobile});
    }
`;


export default Destination;