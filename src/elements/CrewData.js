import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { crewData } from '../data/Info';
import DouglasImage from '../assets/crew/image-douglas-hurley.webp';
import MarkImage from '../assets/crew/image-mark-shuttleworth.webp';
import VictorImage from '../assets/crew/image-victor-glover.webp';
import AnoushehImage from '../assets/crew/image-anousheh-ansari.webp';

const DouglasData = () => {
    return (
        <ImgDataContainer>
            <DataContainer>
                <TextContainer>
                    <Role>{crewData[0].role}</Role>
                    <Name>{crewData[0].name}</Name>
                    <Bio>{crewData[0].bio}</Bio>
                </TextContainer>
                <Menu>
                    {crewData.map((crewMember, index)=>{
                        return <NavLink key={index} to={`/crew/${crewMember.name.replace(/\s+/g, '')}`}/>
                    })}
                </Menu>
            </DataContainer>
            <ImgContainer>
                <Imagen src={DouglasImage} alt="Douglas" />
            </ImgContainer>
        </ImgDataContainer>
    );
};

const MarkData = () => {
    return (
        <ImgDataContainer>
            <DataContainer>
                <TextContainer>
                    <Role>{crewData[1].role}</Role>
                    <Name>{crewData[1].name}</Name>
                    <Bio>{crewData[1].bio}</Bio>
                </TextContainer>
                <Menu>
                    {crewData.map((crewMember, index)=>{
                        return <NavLink key={index} to={`/crew/${crewMember.name.replace(/\s+/g, '')}`}/>
                    })}
                </Menu>
            </DataContainer>
            <ImgContainer>
                <Imagen src={MarkImage} alt="Mark"/>
            </ImgContainer>
        </ImgDataContainer>
    );
};

const VictorData = () => {
    return (
        <ImgDataContainer>
            <DataContainer>
                <TextContainer>
                    <Role>{crewData[2].role}</Role>
                    <Name>{crewData[2].name}</Name>
                    <Bio>{crewData[2].bio}</Bio>
                </TextContainer>
                <Menu>
                    {crewData.map((crewMember, index)=>{
                        return <NavLink key={index} to={`/crew/${crewMember.name.replace(/\s+/g, '')}`}/>
                    })}
                </Menu>
            </DataContainer>
            <ImgContainer>
                <Imagen src={VictorImage} alt="Victor"/>
            </ImgContainer>
        </ImgDataContainer>
    );
};

const AnoushehData = () => {
    return (
        <ImgDataContainer>
            <DataContainer>
                <TextContainer>
                    <Role>{crewData[3].role}</Role>
                    <Name>{crewData[3].name}</Name>
                    <Bio>{crewData[3].bio}</Bio>
                </TextContainer>
                <Menu>
                    {crewData.map((crewMember, index)=>{
                        return <NavLink key={index} to={`/crew/${crewMember.name.replace(/\s+/g, '')}`}/>
                    })}
                </Menu>
            </DataContainer>
            <ImgContainer>
                <Imagen src={AnoushehImage} alt="Anousheh"/>
            </ImgContainer>
        </ImgDataContainer>
    );
};


//Styles
const ImgDataContainer = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    left: 0;
    right: 0;
    width: 79vw;
    height: 78.5vh;
    
    @media (max-width: 812px){
        flex-direction: column;
        text-align: center;
        width: 59.63vw;
        padding-top: 20px;
    }

    @media (max-width: 480px){
        top: 0;
        margin-top: auto;
        margin-bottom: auto;
        flex-direction: column-reverse;
        height: 78vh;
        justify-content: initial;
    }
`;
const DataContainer = styled.div`
    width: 35vw;

    @media (max-width: 812px){
        display: flex;
        flex-direction: column;
        width: 74vw;
    }

    @media (max-width: 480px){
        flex-direction: column-reverse;
    }
`;

const TextContainer = styled.div`
    overflow: scroll;
    height: max-content;
`;

const Role = styled.p`
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    font-size: 32px;
    font-family: 'Bellefair';
    padding-bottom: 15px;

    @media (max-width: 812px){
        font-size: 24px;
    }

    @media (max-width: 480px){
        font-size: 16px;
    }
`;

const Name = styled.p`
    color: #fff;
    text-transform: uppercase;
    font-size: 56px;
    font-family: 'Bellefair';
    padding-bottom: 27px;

    @media (max-width: 812px){
        font-size: 40px;
    }

    @media (max-width: 480px){
        font-size: 24px;
        padding-bottom: 15px;
    }
`;

const Bio = styled.p`
    color: #D0D6F9;
    font-size: 18px;
    font-family: 'Barlow';
    line-height: 32px;

    @media (max-width: 812px){
        font-size: 16px;
        width: 100%;
    }

    @media (max-width: 480px){
        height: 25vh;
    }
`;

const Menu = styled.nav`
    display: flex;
    width: 132px;
    justify-content: space-between;
    padding-top: 13vh;
    & a{
        text-decoration: none;
        color: transparent;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: rgba(255,255,255,0.1744);
    } 

    & a:hover{
        background: rgba(255,255,255,0.5);
    }

    & a.active {
        background: rgba(255,255,255,1);
    }

    @media (max-width: 812px){
        margin: auto;
        scale: calc(10/15);
        padding-top: 40px;
    }

    @media (max-width: 480px){
        margin: auto;
        scale: calc(10/15);
        padding-top: 0;
        padding: 20px 0;
    }
`;

const ImgContainer = styled.div`
    align-self: flex-end;
    display: flex;
    margin-top: auto;

    @media (max-width: 480px){
        margin-top: 0;
        align-self: center;
        border-bottom: 2px solid grey;
        width: 70vw;
        height: 33vh;
    }
`;

const Imagen = styled.img`
    @media (max-width: 812px){
        margin: auto;
        width: 85%;
        align-self: flex-end;
    }

    @media (max-width: 480px){
        height: 90%;
        width: auto;
        margin: 0;
        margin: 0 auto;
    }
    
`;

export {DouglasData, MarkData, VictorData, AnoushehData};