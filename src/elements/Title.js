import styled from "styled-components";

const Title = styled.p`
    font-size: 28px;
    font-family: 'Barlow Condensed';
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 4.72px;
    padding-top: 23.55vh;
    padding-left: 11.56vw;

    & b {
        margin-right: 28px;
        opacity: 25%;
    }

    @media (max-width: 812px){
        font-size: 20px;
        letter-spacing: 3.38px;
        padding-top: 12vh;

        & b {
        margin-right: 19px;
        }
    }
    
    @media (max-width: 480px){
        letter-spacing: 2.7px;
        padding-top: 10vh;
        font-size: 16px;
        display: flex;
        width: max-content;
        padding-left: 0;
        margin: auto;
    }
`;

export default Title;