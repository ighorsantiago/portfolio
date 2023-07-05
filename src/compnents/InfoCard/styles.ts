import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    padding: 5px;

    border-radius: 10px;

    margin: 25px 0;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    margin-bottom: 15px;
`

export const Icon = styled.div`
    display: flex;
    width: 35px;
    height: 35px;

    justify-content: center;
    align-items: center;

    border-radius: 8px;

    /* background-color: #6272a4; */
`;

export const IconImg = styled.img`
    width: 25px;
    height: 25px;
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 20px;
`;

export const InfoTitle = styled.text`
    font-size: 16px;
    font-weight: bold;

    margin-bottom: 3px;

    color: #bd93f9;
`;

export const InfoText = styled.text`
    font-size: 14px;

    color: #ffb86c;
`;
