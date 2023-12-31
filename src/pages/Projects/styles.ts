import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 6rem);

    display: wrap;

    justify-content: center;
    align-items: center;

    padding: 5%;

    /* background-color: green; */

    @media (max-width: 768px) {
        padding: 20px 0;
    }
`;

export const Text = styled.text`
    font-size: 32px;
`;


export const Content = styled.div`
    // display: flex;

    // border-radius: 20px;

    /* background-color: #44475a; */

    @media (max-width: 768px) {
        display: block;
    }
`;

export const Table = styled.ul`
    /* width: 100%; */

    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;
    
    /* background-color: #44475a; */

    @media (max-width: 768px) {
        display: block;
        flex-wrap: none;
    }
`;

export const Line = styled.li`
    width: 50%;
    decoration: none;
    list-style-type: none;

    align-self: center;

    @media (max-width: 768px) {
        width: 100%;

        margin: 0 25px;
    }
`;
