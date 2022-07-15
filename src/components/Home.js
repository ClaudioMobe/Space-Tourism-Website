import React from 'react';
import styled from 'styled-components';
import fondoDesktop from '../assets/home/background-home-desktop.jpg';
import fondoTablet from '../assets/home/background-home-tablet.jpg';
import fondoMobile from '../assets/home/background-home-mobile.jpg';

const Home = () => {
    return (
        <ContenedorHome>
            <ContenedorTexto>
                <Subtitulo>So, you want to travel to</Subtitulo>
                <Space>Space</Space>
                <Parrafo>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</Parrafo>
            </ContenedorTexto>
            <Explore>
                Explore
            </Explore>
        </ContenedorHome>
    );
}

const ContenedorHome = styled.div`
    background-image: url(${fondoDesktop});
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: #D0D6F9;
    padding: 14.55vh 11.46vw;

    @media (max-width: 812px){
        background-image: url(${fondoTablet});
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        padding-top: 19.72vh;
    }
    
    @media (max-width: 480px){
        background-image: url(${fondoMobile});
    }
`;

const ContenedorTexto = styled.div`
    width: min-content;

    @media (max-width: 480px){
        width: 87.2vw;
        text-align: center;
    }
`;

const Subtitulo = styled.p`
    font-family: 'Barlow Condensed';
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: 4.72px;

    @media (max-width: 812px){
        font-size: 20px;
        text-align: center;
    }

    @media (max-width: 480px){
        font-size: 16px;
    }
`;
const Space = styled.p`
    font-family: 'Bellefair';
    font-size: 150px;
    text-transform: uppercase;
    color: #fff;
    margin: 24px 0;

    @media (max-width: 480px){
        font-size: 80px;
        margin: 16px 0;
    }
`;
const Parrafo = styled.p`
    font-family: 'Barlow';
    font-size: 18px;
    line-height: 32px;

    @media (max-width: 812px){
        font-size: 16px;
        text-align: center;
    }
    @media (max-width: 480px){
        font-size: 15px;
        line-height: 25px;
    }
`;

const Explore = styled.div`
    color: #0B0D17;
    background: #fff;
    font-family: 'Bellefair';
    text-transform: uppercase;
    font-size: 32px;
    letter-spacing: 2px;
    border-radius: 50%;
    width: 274px;
    height: 274px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;

    :hover{
        outline: 88px solid rgba(255,255,255,0.1036);
    }

    @media (max-width: 812px){
        margin-top: 15.23vh;
        margin-bottom: 10vh;
        min-width: 242px;
        max-width: 242px;
        min-height: 242px;
        max-height: 242px;
    }

    @media (max-width: 480px){
        min-width: 150px;
        max-width: 150px;
        min-height: 150px;
        max-height: 150px;
        font-size: 20px;
    }
`;
export default Home;