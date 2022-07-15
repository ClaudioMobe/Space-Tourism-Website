import React from 'react';
import styled from 'styled-components';
import { destinationData } from '../data/Info';
import MenuCuerpos from './MenuCuerpos';
import MoonImage from '../assets/destination/image-moon.webp';
import MarsImage from '../assets/destination/image-mars.webp';
import EuropaImage from '../assets/destination/image-europa.webp';
import TitanImage from '../assets/destination/image-titan.webp';

const MoonData = () => {
    return (
        <DataContainer>
            <ImgDataContainer>
                <Imagen src={MoonImage} alt="Moon" />
                <Data>
                    <MenuCuerpos/>
                    <Name>{destinationData[0].name}</Name>
                    <Description>{destinationData[0].description}</Description>
                    <Bar/>
                    <DistanceTimeContainer>
                        <DistanceTime>
                            <DistanceTimeTitle>Avg. Distance</DistanceTimeTitle>
                            <DistanceTimeContent>{destinationData[0].distance}</DistanceTimeContent>
                        </DistanceTime>
                        <DistanceTime>
                            <DistanceTimeTitle>Est. Travel Time</DistanceTimeTitle>
                            <DistanceTimeContent>{destinationData[0].travel}</DistanceTimeContent>
                        </DistanceTime>
                    </DistanceTimeContainer>
                </Data>
            </ImgDataContainer>
        </DataContainer>
    );
};

const MarsData = () => {
    return (
        <DataContainer>
            <ImgDataContainer>
                <Imagen src={MarsImage} alt="Mars" />
                <Data>
                    <MenuCuerpos/>
                    <Name>{destinationData[1].name}</Name>
                    <Description>{destinationData[1].description}</Description>
                    <Bar/>
                    <DistanceTimeContainer>
                        <DistanceTime>
                            <DistanceTimeTitle>Avg. Distance</DistanceTimeTitle>
                            <DistanceTimeContent>{destinationData[1].distance}</DistanceTimeContent>
                        </DistanceTime>
                        <DistanceTime>
                            <DistanceTimeTitle>Est. Travel Time</DistanceTimeTitle>
                            <DistanceTimeContent>{destinationData[1].travel}</DistanceTimeContent>
                        </DistanceTime>
                    </DistanceTimeContainer>
                </Data>
            </ImgDataContainer>
        </DataContainer>
    );
};

const EuropaData = () => {
    return (
        <DataContainer>
            <ImgDataContainer>
                <Imagen src={EuropaImage} alt="Europa" />
                <Data>
                    <MenuCuerpos/>
                    <Name>{destinationData[2].name}</Name>
                    <Description>{destinationData[2].description}</Description>
                    <Bar/>
                    <DistanceTimeContainer>
                        <DistanceTime>
                            <DistanceTimeTitle>Avg. Distance</DistanceTimeTitle>
                            <DistanceTimeContent>{destinationData[2].distance}</DistanceTimeContent>
                        </DistanceTime>
                        <DistanceTime>
                            <DistanceTimeTitle>Est. Travel Time</DistanceTimeTitle>
                            <DistanceTimeContent>{destinationData[2].travel}</DistanceTimeContent>
                        </DistanceTime>
                    </DistanceTimeContainer>
                </Data>
            </ImgDataContainer>
        </DataContainer>
    );
};

const TitanData = () => {
    return (
        <DataContainer>
            <ImgDataContainer>
                <Imagen src={TitanImage} alt="Titan" />
                <Data>
                    <MenuCuerpos/>
                    <Name>{destinationData[3].name}</Name>
                    <Description>{destinationData[3].description}</Description>
                    <Bar/>
                    <DistanceTimeContainer>
                        <DistanceTime>
                            <DistanceTimeTitle>Avg. Distance</DistanceTimeTitle>
                            <DistanceTimeContent>{destinationData[3].distance}</DistanceTimeContent>
                        </DistanceTime>
                        <DistanceTime>
                            <DistanceTimeTitle>Est. Travel Time</DistanceTimeTitle>
                            <DistanceTimeContent>{destinationData[3].travel}</DistanceTimeContent>
                        </DistanceTime>
                    </DistanceTimeContainer>
                </Data>
            </ImgDataContainer>
        </DataContainer>
    );
};

//Styles:
const ImgDataContainer = styled.div`
    display: flex;
    width: 72.63%;
    min-width: 1100px;
    margin: auto;
    justify-content: space-evenly;
    align-items: flex-end;
    padding-top: 7vh;

    @media (max-width: 812px){
        min-width: 0;
        padding-top:0;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
`;

const Imagen = styled.img`
    @media (max-width: 812px){
        margin-top: 6vh;
        margin-bottom: 6vh;
        width: 300px;
    }
    @media (max-width: 480px){
        margin-top: 4vh;
        margin-bottom: 4vh;
        width: 170px;
    }
`;

const Data = styled.div`
    flex-basis: 444px;
`;

const DataContainer = styled.div`
    height: 450px;
`;

const Name = styled.p`
    color: #fff;
    text-transform: uppercase;
    font-family: 'Bellefair';
    font-size: 100px;
    padding-top: 37px;

    @media (max-width: 812px){
        font-size: 80px;
    }
    @media (max-width: 480px){
        font-size: 56px;
        padding-top: 20px;
    }
`;

const Description = styled.p`
    color: #D0D6F9;
    font-size: 18px;
    font-family: 'Barlow';
    line-height: 32px;

    @media (max-width: 812px){
        font-size: 16px;
        line-height: 28px;
    }
    @media (max-width: 480px){
        font-size: 15px;
        line-height: 25px;
    }
`;

const Bar = styled.div`
    margin-top: 54px;
    margin-bottom: 28px;
    background: #383B4B;
    height: 1px;
    width: 100%;

    @media (max-width: 480px){
        margin: 3.7vh 0;
    }
`;

const DistanceTimeContainer = styled.div`
    display: flex;

    @media (max-width: 480px){
        flex-direction: column;
    }
`;

const DistanceTime = styled.div`
    width: 50%;
    @media (max-width: 480px){
        width: auto;
        margin-bottom: 3.7vh;
    }
`;

const DistanceTimeTitle = styled.p`
    color: #D0D6F9;
    font-size: 14px;
    font-family: 'Barlow Condensed';
    letter-spacing: 2.36px;
    text-transform: uppercase;
    margin-bottom: 12px;
`;

const DistanceTimeContent = styled.p`
    color: #fff;
    font-size: 28px;
    font-family: 'Bellefair';
    text-transform: uppercase;
`;

export {MoonData, MarsData, EuropaData, TitanData};