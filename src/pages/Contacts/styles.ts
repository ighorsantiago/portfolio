import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    height: calc(100vh - 6rem);

    display: flex;

    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        padding: 20px 0;
    }
`;

export const Text = styled.text`
    font-size: 32px;
`;


export const Content = styled.div`
    width: 100%;
    height: calc(100vh - 8rem);

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;

    background-color: #44475a;

    @media (max-width: 768px) {
        height: calc(70vh - 8rem);
    }
`;
