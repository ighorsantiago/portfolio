import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import { Link } from "react-router-dom";

export const Overlay = styled(Dialog.Overlay)`
    width: 100vw;
    height: 100vh;

    position: fixed;

    inset: 0;
    background: rgba(0, 0, 0, 0.75 );
`;

export const Content = styled(Dialog.Content)`
    min-width: 32rem;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 6px;
    padding: 2.5rem 3rem;

    background: gray;
`;

export const Close = styled(Dialog.Close)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    border: 0;

    cursor: pointer;

    color: lightgray;
    background: transparent;
`;

export const Title = styled.text`
    font-size: 16px;
    font-weight: bold;

    margin-bottom: 10px;
    color: #000;
`;

export const Description = styled.div`
    max-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 50px;

    /* padding: 0 10px; */

    @media (max-width: 768px) {
        margin: 0 30px;
        padding: 0;
    }
`;

export const Text = styled.text`
    font-size: 12px;
    text-align: justify;

    margin: 20px 0;

    color: #000;

    @media (max-width: 768px) {
        /* text-align: left; */
        margin: 10px 0;
    }
`;

export const GithubLink = styled(Link)`
    font-size: 14px;
    text-align: justify;
    text-decoration: underline;

    margin-top: 30px;

    cursor: pointer;

    color: blue;

    @media (max-width: 768px) {
        font-size: 14px;
        text-align: left;

        margin-top: 0;
    }
`;


// export const Container = styled.div`
//     width: 100%;
//     height: calc(100vh - 5rem);
//     background-color: rgba(0, 0, 0, 0.1);

//     /* display: flex;
//     flex: 1;

//     justify-content: center;
//     align-items: center;


//     opacity: 1;
//     background-color: rgba(80, 80, 80, 0.68); */
// `;

// export const Content = styled.div`
    
//     /* width: 80%;

//     border-width: 1px;
//     border-radius: 31px;
//     border-color: lightgray; */
//     /* height: 70%;
//     opacity: 1; */
// `;

// export const Text = styled.text`
//     font-size: 24px;
// `;
