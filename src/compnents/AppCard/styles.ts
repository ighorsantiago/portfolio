import styled from "styled-components";

export const Container = styled.div`
    width: 20%;
    height: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 20px;

    margin-right: 20px;
    padding: 15px 2px;

    background-color: #44475a;

    @media (max-width: 768px) {
        width: 100%;
        height: 60%;

        margin-bottom: 20px;
        padding: 15px 2px;
    }
`;

export const ImageBox = styled.div`
    width: 80%;
    height: 60%;

    border-radius: 20px;

    /* margin-top: 15px; */

    background-color: red;
`;

export const Image = styled.img``;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 10px;

    padding: 0 10px;
`;

export const Title = styled.text`
    font-size: 16px;
    font-weight: bold;

    margin-bottom: 10px;
`;

export const Text = styled.text`
    font-size: 11px;
    text-align: justify;
`;
