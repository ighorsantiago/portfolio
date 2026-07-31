import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;

    justify-content: center;
    align-items: center;

    padding: 100px 0 60px;

    @media (max-width: 768px) {
        padding: 100px 0 60px;
    }
`;

export const Text = styled.text`
    font-size: 32px;
`;


export const Content = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
`;
