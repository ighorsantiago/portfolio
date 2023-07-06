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


export const Content = styled.div`
    /* width: 100%;
    height: calc(100vh - 8rem); */
    
    width: 80%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 20px;

    padding: 15px;
    
    background-color: #44475a;

    @media (max-width: 768px) {
        width: 100%;

        margin-top: 20%;
    }
`;

export const Text = styled.text`
    font-size: 20px;
`;
