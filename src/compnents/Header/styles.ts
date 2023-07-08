import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

interface Props {
    extendNavBar: boolean;
}

export const NavbarContainer = styled.nav<Props>`
    width: 100%;
    height: ${(props) => (props.extendNavBar ? "100vh" : "80px")};
    background-color: black;
    display: flex;
    flex-direction: column;
    opacity: ${(props) => (props.extendNavBar ? 0.9 : 1)};
    background-color: ${(props) => (props.extendNavBar ? 'white' : 'black')};

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
    color: ${(props) => (props.extendNavBar ? 'black' : 'white')};
`;

export const OpenLinksButton = styled.button<Props>`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: ${(props) => (props.extendNavBar ? 'black' : 'white')};
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

// import styled from "styled-components";

// interface Props {
//     bar: boolean;
// }

// export const Container = styled.div<Props>`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     max-width: 1280px;
//     width: 100%;
//     margin: 0 auto;
//     padding: 1.5rem;
//     position: relative;
//     animation: header 500ms ease-in-out;
//     background-color: #282a36;
    
//     @media(max-width: 840px) {
//         width: 90%;
//     }
//     .bars {
//         display: none;
//     }
    
//     @media(max-width: 640px) {
//         .bars {
//             width: 40px;
//             height: 40px;
//             position: relative;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             padding: 0.5rem;
//             z-index: 100;
//             .bar {
//                 position: absolute;
//                 width: 100%;
//                 height: 2px;
//                 background-color: ${props => props.bar ? "transparent" : "#fff"};
//                 transition: all 400ms ease-in-out;
//                 :before, :after {
//                     content: "";
//                     width: 100%;
//                     height: 2px;
//                     background-color: #fff;
//                     position: absolute;
//                 }

//                 :before {
//                     transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
//                     transition: all 400ms ease-in-out;
//                 }

//                 :after {
//                     transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
//                     transition: all 400ms ease-in-out;
//                 }
//             }
//         }
//     }
// `
// export const Logo = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
    
//     span {
//         font-size: 1.8rem;
//     }

//     h1 {
//         font-weight: 600;
//         font-size: 1.2rem;
//     }
// `;

// export const Nav = styled.div<Props>`
//     @media(max-width: 640px){
//         height: ${props => props.bar ? "100vh" : 0};
        
//         display: flex;
//         flex-direction: column;
//         position: fixed;
//         inset: 0;
//         justify-content: center;
//         align-items: center;
//         gap: 2rem;
//         font-size: 2rem;
//         font-weight: 700;
//         transition: height 400ms ease-in-out;
//         overflow: hidden;
//         z-index: 100;
//         opacity: 0.9;
//         background-color: black;
//     }
//     span {
//         margin-left: 1rem;
//         a {
//             color: #fff;
//             text-decoration: none;
//             font-weight: 400;
//             position: relative;
//             :before {
//                 content: "";
//                 position: absolute;
//                 left: 0;
//                 right: 0;
//                 bottom: -5px;
//                 height: 2px;
//                 background-color: #fff;
//                 transform: scale(0);
//                 transform-origin: right;
//                 transition: transform 400ms ease-in-out;
//             }
//             :hover:before {
//                 transform: scale(1);
//                 transform-origin: left;
//             }
//             :hover {
//                 opacity: 0.7;
//             }
//         }
//     }
// `;