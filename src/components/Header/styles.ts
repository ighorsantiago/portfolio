import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

type Props = {
    navBar: boolean;
}

export const NavbarContainer = styled.nav<Props>`
    width: 100%;
    height: ${(props) => (props.navBar ? "100vh" : "80px")};
    background-color: black;
    display: flex;
    flex-direction: column;
    opacity: ${(props) => (props.navBar ? 0.9 : 1)};
    background-color: ${(props) => (props.navBar ? 'white' : 'black')};

    @media (min-width: 700px) {
        height: 80px;
        justify-content: center;
        align-items: center;
    }
`;

export const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

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
