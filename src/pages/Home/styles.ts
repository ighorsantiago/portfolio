import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;

    padding: 0 20px;
`;

export const LeftBox = styled.div`
    width: 20%;
    /* height: calc(100vh - 15rem); */

    display: flex;
    flex-direction: column;

    align-items: center;
    border-radius: 20px;

    padding: 30px 5px;

    background-color: #44475a;
`;

export const Avatar = styled.div`
    width: 140px;
    height: 140px;

    display: flex;

    justify-content: center;
    align-items: center;

    border-radius: 50%;
    border: 1px solid white;

    margin-bottom: 15px;
`;

export const AvatarImg = styled.img`
    width: 135px;
    height: 135px;

    border-radius: 50%;
`;

export const Name = styled.text`
    font-size: 28px;
`;

export const JobBox = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    padding: 5px;

    border-radius: 10px;

    margin: 15px 0;

    background-color: #6272a4;
`;

export const JobText = styled.text`
    font-size: 16px;
`;

export const Divider = styled.div`
    width: 90%;
    border: 0.5px solid white;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    padding: 5px;

    border-radius: 10px;

    margin: 25px 0;
`;

export const InfoCard = styled.div`
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

export const FooterLeft = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 20px;
`;

export const FooterText = styled.text`
    font-size: 16px;
    font-weight: bold;

    color: white;
`;

export const FooterLeftIcons = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    align-items: center;

    margin-top: 10px;
`;

export const SocialLinks = styled(Link)`
    width: 50px;
    height: 50px;

    display: flex;

    justify-content: space-around;
    align-items: center;

    border-radius: 8px;

    /* background-color: #6272a4; */
`;

export const SocialImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const RightBox = styled.div`
    width: 80%;
    /* height: calc(100vh - 8rem); */

    border-radius: 20px;

    margin-left: 1.5rem;

    background-color: #44475a;
`;
