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

    const [navbar, setNavbar] = useState(false);

    return (
        <NavbarContainer navBar={navbar}>
            <NavbarInnerContainer>
            <LeftContainer>
                    <Logo src={navbar ? LogoBlack : LogoWhite} />
                    <Text navBar={navbar}>PORTFÓLIO</Text>
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer>

                        <NavbarLink to="/portfolio/">HOME</NavbarLink>
                        <NavbarLink to="/portfolio/sobre">SOBRE</NavbarLink>
                        <NavbarLink to="/portfolio/projetos">APLICATIVOS</NavbarLink>
                        <NavbarLink to="/portfolio/contatos">CONTATOS</NavbarLink>

                        <OpenLinksButton
                            navBar={navbar}
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        >
                            {navbar ? <>&#10005;</> : <> &#8801;</>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>
            {!navbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/portfolio/" onClick={() => { setNavbar(false) }}>HOME</NavbarLinkExtended>
                    <NavbarLinkExtended to="/portfolio/sobre" onClick={() => { setNavbar(false) }}>SOBRE</NavbarLinkExtended>
                    <NavbarLinkExtended to="/portfolio/projetos" onClick={() => { setNavbar(false) }}>APLICATIVOS</NavbarLinkExtended>
                    <NavbarLinkExtended to="/portfolio/contatos" onClick={() => { setNavbar(false) }}>CONTATOS</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}
