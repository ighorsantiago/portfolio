import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;

    padding: 0 20px;

    @media (max-width: 768px) {
        flex-direction: column;

        /* background-color: red; */

        text-align: center;
    }
`;

export const Content = styled.div`
    width: 80%;
    /* height: calc(100vh - 8rem); */

    border-radius: 20px;

    margin-left: 1.5rem;

    background-color: #44475a;
`;
