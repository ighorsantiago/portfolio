import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
    active: boolean;
}

export const Container = styled.div`
    width: 90%;

    display: flex;
    flex-direction: row;
    align-items: center;

    border-radius: 20px;
    border: 2px solid black;


    margin-bottom: 30px;
    padding: 15px 2px;

    /* background-color: #44475a; */

    @media (max-width: 768px) {
        width: 90%;
        /* height: 60%; */

        flex-direction: column;

        margin-bottom: 20px;
        padding: 15px 2px;
    }
`;

export const ImageBox = styled.div`
    /* width: 200px;
    height: 350px; */

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;

    background-color: rgba(0,0,0,0);

    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

export const IphoneImage = styled.img`
    width: 200px;
    height: 350px;

    border-radius: 20px;
`;

export const AppImage = styled.img`
    width: 155px;
    height: 325px;

    position: absolute;

    border-radius: 20px;
`;

export const Title = styled.text`
    font-size: 16px;
    font-weight: bold;

    margin-bottom: 10px;
    color: #000;
`;

export const Description = styled.div`
    max-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 50px;

    /* padding: 0 10px; */

    @media (max-width: 768px) {
        margin: 0 30px;
        padding: 0;
    }
`;

export const Text = styled.text`
    font-size: 12px;
    text-align: justify;

    margin: 20px 0;

    color: #000;

    @media (max-width: 768px) {
        /* text-align: left; */
        margin: 10px 0;
    }
`;

export const GithubLink = styled(Link)`
    font-size: 14px;
    text-align: justify;
    text-decoration: underline;

    margin-top: 30px;

    cursor: pointer;

    color: blue;

    @media (max-width: 768px) {
        font-size: 14px;
        text-align: left;

        margin-top: 0;
    }
`;

// export const InfoButton = styled(Link)`
export const InfoButton = styled.button`
    font-size: 12px;
    text-decoration: underline;
    border-width: 0;
    margin: 30px 0;
    cursor: pointer;
    color: blue;
    background-color: transparent;

    @media (max-width: 768px) {
        font-size: 14px;

        margin: 20px 0;
    }
`;
