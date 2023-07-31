import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import * as  Switch from '@radix-ui/react-switch';

type Props = {
    navBar: boolean;
}

type SwitchProps = {
    language: string;
}

export const NavbarContainer = styled.nav<Props>`
    width: 100%;
    height: ${(props) => (props.navBar ? "100vh" : "80px")};
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 5%;

    opacity: ${(props) => (props.navBar ? 0.9 : 1)};

    background-color: ${(props) => (props.navBar ? 'white' : 'black')};

    @media (min-width: 700px) {
        height: 80px;
        justify-content: space-between;
        align-items: center;
    }
`;

export const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

export const SwitchContainer = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    align-items: center;
`;

export const Flag = styled.img`
    width: 30px;
    height: 30px;

    @media (max-width: 768px) {
        width: 12px;
        height: 12px;
    }
`;

export const SwitchText = styled.text`
    font-size: 12px;
    color: white;
`;

// export const SwitchRoot = styled(Switch.Root)<SwitchProps>`
export const SwitchRoot = styled(Switch.Root)`
    width: 42px;
    height: 25px;
    border-radius: 9999px;
    position: relative;

    margin: 0 10px;

    box-shadow: 0 2px 10px black;
    -webkit-tap-highlight-color: #000;
    background-color: darkgray;

    &:focus {
       box-shadow: 0 0 0 2px black;
    }

    @media (max-width: 768px) {
        width: 22px;
        height: 15px;

        position: none;
    }
`;

export const SwitchThumb = styled(Switch.Thumb)<SwitchProps>`
    width: 21px;
    height: 21px;
    
    display: block;
    align-self: center;
    
    border-radius: 9999px;

    transition: transform 100ms;
    transform: translateX(${(props) => (props.language === "en" ? 19 : 2)}px);
    // transform: translateX(19px);
    
    will-change: transform;
    box-shadow: 0 2px 2px black;
    background-color: white;

    @media (max-width: 768px) {
        width: 11px;
        height: 11px;

        transform: translateX(${(props) => (props.language === "en" ? 9 : 1)}px);
    }
`;

/* ${(props) => (props.checked ? translateX(19) : translateX(2))}px; */
export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: large;
    text-decoration: none;
    margin: 10px 15px;

    @media (max-width: 700px) {
        display: none;
        margin: 0;
    }
`;

export const Logo = styled.img`
    margin: 10px;
    max-width: 30px;
    height: auto;
`;

export const Text = styled.text<Props>`
    font-size: 1.2rem;
    color: ${(props) => (props.navBar ? 'black' : 'white')};
`;

export const OpenLinksButton = styled.button<Props>`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: ${(props) => (props.navBar ? 'black' : 'white')};
    font-size: 45px;
    
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavbarLinkExtended = styled(NavLink)`
    font-size: x-large;
    
    text-decoration: none;
    
    margin: 10px;
    
    color: black;
`;
