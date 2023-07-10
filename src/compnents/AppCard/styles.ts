import { Link } from "react-router-dom";
import styled from "styled-components";

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
        width: 100%;
        height: 60%;

        margin-bottom: 20px;
        padding: 15px 2px;
    }
`;

export const ImageBox = styled.div`
    width: 200px;
    height: 350px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
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

export const Description = styled.div`
    max-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 50px;

    padding: 0 10px;

    @media (max-width: 768px) {
        margin: 0 30px;
        padding: 0;
    }
`;

export const Title = styled.text`
    font-size: 16px;
    font-weight: bold;

    margin-bottom: 10px;
    color: #000;
`;

export const Text = styled.text`
    font-size: 11px;
    text-align: justify;
    color: #000;

    @media (max-width: 768px) {
        text-align: left;
    }
`;

export const GithubLink = styled(Link)`
    font-size: 11px;
    text-align: justify;
    text-decoration: underline;

    margin-top: 30px;

    color: blue;

    @media (max-width: 768px) {
        text-align: left;
    }
`;
