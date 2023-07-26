import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

interface Props {
    active: boolean;
}

export const LeftBox = styled.nav`
    width: 20%;
    min-width: 160px;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    border-radius: 20px;

    padding: 30px 5px;

    margin-right: 30px;

    background-color: #44475a;

    @media (max-width: 768px) {
        width: 90%;
        
        flex-direction: row;
        justify-content: space-around;

        padding: 10px 5px;

        margin-right: 0;
    }
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

    @media (max-width: 768px) {
        flex-direction: row;

        width: 70px;
        height: 70px;

        margin-bottom: 0;
    }
`;

export const AvatarImg = styled.img`
    width: 135px;
    height: 135px;

    border-radius: 50%;

    @media (max-width: 768px) {
        flex-direction: row;

        width: 65px;
        height: 65px;
    }
`;

export const PersonalInfoBox = styled.div<Props>`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px) {
        display: ${(props) => (props.active ? "none" : "block")};
        flex-direction: column;

        justify-content: center;
        align-items: center;

        margin: 0 20px;
    }
`;

export const Name = styled.text`
    font-size: 28px;

    text-align: center;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const JobBox = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    padding: 5px;

    border-radius: 10px;

    margin: 15px 0;

    background-color: #6272a4;

    @media (max-width: 768px) {
        margin: 5px 0;
    }
`;

export const JobText = styled.text`
    font-size: 16px;

    text-align: center;

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

export const Divider = styled.div`
    width: 90%;
    border: 0.5px solid white;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const MenuList = styled.div<Props>`

    margin: 30px 0;

    @media (max-width: 768px) {
        display: ${(props) => (props.active ? "flex" : "none")};
        flex-direction: row;

        justify-content: space-between;

        margin: 0;

        /* background-color: red; */

        text-align: center;
    }
`;

export const MenuBtn = styled(NavLink)`
    display: flex;
    flex-direction: column;

    justify-content: space-around;
    align-items: center;

    margin-top: 10px;

    text-decoration: none;
    
    transition: 0.2s;

    color: white;

    /* &:last-child {
        background: #007dfc;
        padding: 0.5rem 1rem;
        border-radius: 30px;
        &:hover {
            color: white;
        }
    } */

    &:hover {
        color: #007dfc;
    }

    @media (max-width: 768px) {
        display: block;
        margin: 0 0.5rem;
    }
`;

export const Icon = styled.button`
    display: none;
    /* position: absolute;
    right: 20px;
    top: 21px; */
    
    border-width: 0;
    background-color: transparent;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
    
    @media (max-width: 768px){
        display: block;
    }
`;

export const FooterLeft = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 50px;

    @media (max-width: 768px){
        display: none;
    }
`;

export const FooterText = styled.text`
    font-size: 16px;
    font-weight: bold;

    text-align: center;

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
`;

export const SocialImg = styled.img`
    width: 40px;
    height: 40px;
`;
