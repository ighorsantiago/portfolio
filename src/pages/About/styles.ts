import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;

    justify-content: center;
    align-items: center;

    padding: 120px 0 60px;

    @media (max-width: 768px) {
        padding: 100px 0 60px;
    }
`;

export const Content = styled.div`
    width: 60%;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    text-align: justify;

    @media (max-width: 768px) {
        width: 90%;

        text-align: left;
    }
`;

export const Image = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 20px;

    margin: 50px 0;
`;

export const Text = styled.text`
    font-size: 18px;
    color: var(--color-text-secondary);

    @media (max-width: 768px) {
        font-size: 16px
    }
`;
