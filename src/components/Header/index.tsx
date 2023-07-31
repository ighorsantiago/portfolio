import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
    NavbarContainer,
    LeftContainer,
    SwitchContainer,
    SwitchText,
    SwitchRoot,
    SwitchThumb,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
    Text,
    Flag,
} from "./styles";

import LogoWhite from "../../assets/react.svg";
import LogoBlack from "../../assets/react-black.svg";
import Brasil from "../../assets/brasil.svg";
import USA from "../../assets/usa.svg";

type Lgn = {
    language: "pt" | "en";
}

export function Header() {

    const { t, i18n } = useTranslation();

    const [navbar, setNavbar] = useState(false);
    const [lng, setLng] = useState("pt");

    function handleCheck() {
        if(lng === "pt") {
            setLng("en");
            i18n.changeLanguage("en")
        } else {
            setLng("pt");
            i18n.changeLanguage("pt")
        }

        console.log(lng);
    }

    return (
        <NavbarContainer navBar={navbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <Logo src={navbar ? LogoBlack : LogoWhite} />
                    <Text navBar={navbar}>{t("portfolioHeader")}</Text>
                </LeftContainer>

                <SwitchContainer onClick={handleCheck}>
                    {/* <SwitchText>Português</SwitchText> */}
                    <Flag src={Brasil} />
                    <SwitchRoot>
                        <SwitchThumb language={lng} />
                    </SwitchRoot>
                    {/* <SwitchText>English</SwitchText> */}
                    <Flag src={USA} />
                </SwitchContainer>

                <RightContainer>
                    <NavbarLinkContainer>

                        <NavbarLink to="/portfolio/">HOME</NavbarLink>
                        <NavbarLink to="/portfolio/sobre">{t("about")}</NavbarLink>
                        <NavbarLink to="/portfolio/projetos">APPS</NavbarLink>
                        <NavbarLink to="/portfolio/contatos">{t("contacts")}</NavbarLink>

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
            {navbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/portfolio/" onClick={() => { setNavbar(false) }}>HOME</NavbarLinkExtended>
                    <NavbarLinkExtended to="/portfolio/sobre" onClick={() => { setNavbar(false) }}>{t("about")}</NavbarLinkExtended>
                    <NavbarLinkExtended to="/portfolio/projetos" onClick={() => { setNavbar(false) }}>APPS</NavbarLinkExtended>
                    <NavbarLinkExtended to="/portfolio/contatos" onClick={() => { setNavbar(false) }}>{t("contacts")}</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}
