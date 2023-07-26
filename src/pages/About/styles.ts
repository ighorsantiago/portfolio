import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 6rem);

    display: flex;

    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 100px;
    }
`;

export const Content = styled.div`
    width: 60%;
    height: 80%;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    margin-top: 120px;

    text-align: justify;

    @media (max-width: 768px) {
        width: 90%;
        margin-top: 300px;

        text-align: left;
    }
`;

export const Image = styled.img`
    width: 300px;
    height: 300px;

    margin: 50px 0;
`;

export const Text = styled.text`
    font-size: 18px;
    color: #000;

    @media (max-width: 768px) {
        font-size: 16px
    }
`;
