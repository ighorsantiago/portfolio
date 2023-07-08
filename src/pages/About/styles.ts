import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 6rem);

    display: flex;

    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        padding: 20px 0;
    }
`;

export const Content = styled.div`
    width: 60%;
    height: 30%;

    text-align: justify;
`;

export const Text = styled.text`
    font-size: 18px;
    color: #000;
`;
