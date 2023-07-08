import { useState } from "react";

import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
    Text,
} from "./styles";

import LogoWhite from "../../assets/react.svg";
import LogoBlack from "../../assets/react-black.svg";

export function Header() {

    const [extendNavbar, setExtendNavbar] = useState(false);

    return (
        <NavbarContainer extendNavBar={extendNavbar}>
            <NavbarInnerContainer>
            <LeftContainer>
                    <Logo src={extendNavbar ? LogoBlack : LogoWhite} />
                    <Text extendNavBar={extendNavbar}>PORTFÓLIO</Text>
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer>

                        <NavbarLink to="/portfolio/">Home</NavbarLink>
                        <NavbarLink to="/portfolio/projetos">Projetos</NavbarLink>
                        <NavbarLink to="/portfolio/contatos">Contatos</NavbarLink>

                        <OpenLinksButton
                            extendNavBar={extendNavbar}
                            onClick={() => {
                                setExtendNavbar(!extendNavbar);
                            }}
                        >
                            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/portfolio/">Home</NavbarLinkExtended>
                    <NavbarLinkExtended to="/portfolio/projetos">Projetos</NavbarLinkExtended>
                    <NavbarLinkExtended to="/portfolio/contatos">Contatos</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}


// import { useState } from 'react'

// import { Container, Logo, Nav } from './styles';

// import reactLogo from '../../assets/react.svg';
// import { Link } from 'react-router-dom';

// export function Header() {

//     const [bar, setBar] = useState(false);

//     return (
//         <Container bar={bar}>
//             <Logo>
//                 <img src={reactLogo} style={{ width: 25, height: 25, marginRight: 15 }} />
//                 <h1>PORTFÓLIO</h1>
//             </Logo>
//             <Nav bar={bar}>
//                 <span><Link to="/portfolio">Home</Link></span>
//                 <span><Link to="/portfolio/projetos">Projetos</Link></span>
//                 <span><Link to="/portfolio/contatos">Contatos</Link></span>
//             </Nav>
//             <div
//                 onClick={() => setBar(!bar)}
//                 className="bars"
//             >
//                 <div className="bar"></div>
//             </div>
//         </Container>
//     )
// }
