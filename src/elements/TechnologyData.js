import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {technologyData} from '../data/Info';
import LaunchImgDesktop from '../assets/technology/image-launch-vehicle-portrait.jpg';
import LaunchImgMobile from '../assets/technology/image-launch-vehicle-landscape.jpg';
import SpaceportImgDesktop from '../assets/technology/image-spaceport-portrait.jpg';
import SpaceportImgMobile from '../assets/technology/image-spaceport-landscape.jpg';
import SpaceCapsuleImgDesktop from '../assets/technology/image-space-capsule-portrait.jpg';
import SpaceCapsuleImgMobile from '../assets/technology/image-space-capsule-landscape.jpg';

const LaunchData = () => {
    return (
        <ImgDataContainer>
            <DataContainer>
                <Menu>
                    {technologyData.map((tech, index)=>{
                        return  <NavLink key={index} to={`/technology/${tech.name.replace(/\s+/g, '')}`}>{index+1}</NavLink>
                    })}
                </Menu>
                <div>
                    <Intro>THE TERMINOLOGY...</Intro>
                    <Name>{technologyData[0].name}</Name>
                    <Text>{technologyData[0].description}</Text>
                </div>
            </DataContainer>
            <ImgDesktop src={LaunchImgDesktop} alt="Launch-Dsk" />
            <ImgMobile src={LaunchImgMobile} alt="Launch-Mob" />
        </ImgDataContainer>
    );
};

const SpaceportData = () => {
    return (
        <ImgDataContainer>
            <DataContainer>
                <Menu>
                    {technologyData.map((tech, index)=>{
                        return  <NavLink key={index} to={`/technology/${tech.name.replace(/\s+/g, '')}`}>{index+1}</NavLink>
                    })}
                </Menu>
                <div>
                    <Intro>THE TERMINOLOGY...</Intro>
                    <Name>{technologyData[1].name}</Name>
                    <Text>{technologyData[1].description}</Text>
                </div>
            </DataContainer>
            <ImgDesktop src={SpaceportImgDesktop} alt="Spaceport-Dsk" />
            <ImgMobile src={SpaceportImgMobile} alt="Spaceport-Mob" />
        </ImgDataContainer>
    );
};

const SpaceCapsuleData = () => {
    return (
        <ImgDataContainer>
            <DataContainer>
                <Menu>
                    {technologyData.map((tech, index)=>{
                        return  <NavLink key={index} to={`/technology/${tech.name.replace(/\s+/g, '')}`}>{index+1}</NavLink>
                    })}
                </Menu>
                <div>
                    <Intro>THE TERMINOLOGY...</Intro>
                    <Name>{technologyData[2].name}</Name>
                    <Text>{technologyData[2].description}</Text>
                </div>
            </DataContainer>
            <ImgDesktop src={SpaceCapsuleImgDesktop} alt="SpaceCapsule-Dsk" />
            <ImgMobile src={SpaceCapsuleImgMobile} alt="SpaceCapsule-Mob" />
        </ImgDataContainer>
    );
};

const ImgDataContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10vw;

    @media (max-width: 812px){
        flex-direction: column-reverse;
        margin-left: 0;
    }
`;

const DataContainer = styled.div`
    display: flex;
    align-items: center;
    height: max-content;

    @media (max-width: 812px){
        flex-direction: column;
        text-align: center;
    }
`;

const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30vh;
    margin-right: 5.5vw;

    & a{
        font-family: 'Bellefair';
        font-size: 32px;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,0.25);
    } 

    & a:hover{
        border: 1px solid rgba(255,255,255,0.5);
    }

    & a.active {
        background: rgba(255,255,255,1);
        color: #000;
    }

    @media (max-width: 812px){
        flex-direction: row;
        height: auto;
        width: 30vh;
        scale: calc(3/4);
        margin-right: 0;
        margin-bottom: 50px;
    }

    @media (max-width: 480px){
        width: 80vw;
        scale: 0.5;
        margin: 20px 0;
    }
`;

const Intro = styled.p`
    font-family: 'Barlow Condensed';
    font-size: 16px;
    color: #D0D6F9;
    letter-spacing: 2.7px;
    margin-bottom: 11px;

    @media (max-width: 812px){
        margin-bottom: 17px;
    }

    @media (max-width: 480px){
        font-size: 14px;
    }
`;

const Name = styled.p`
    font-family: 'Bellefair';
    font-size: 56px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 17px;

    @media (max-width: 812px){
        font-size: 40px;
    }

    @media (max-width: 480px){
        font-size: 24px;
    }
`;
const Text = styled.p`
    font-family: 'Barlow';
    font-size: 18px;
    color: #D0D6F9;
    line-height: 32px;
    width: 30.8vw;

    @media (max-width: 812px){
        width: 65vw;
        font-size: 16px;
    }

    @media (max-width: 480px){
        line-height: 25px;
        font-size: 15px;
        width: 80vw;
    }
`;

const ImgDesktop = styled.img`
    width: 30vw;
    min-width: 450px;

    @media (max-width: 812px){
        display: none;
    }
`;

const ImgMobile = styled.img`
    display: none;

    @media (max-width: 812px){
        display: block;
        width: 100vw;
        margin: 40px 0;
    }

    @media (max-width: 480px){
        margin-top: 5vh;
        margin-bottom: 0;
    }
`;

export {LaunchData, SpaceportData, SpaceCapsuleData};