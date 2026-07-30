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
import Brasil from "../../assets/brasil.svg";
import USA from "../../assets/usa.svg";

type Lgn = {
    language: "pt" | "en";
}

export function Header() {

    const { t, i18n } = useTranslation();

    const [navbar, setNavbar] = useState(false);
    const [lng, setLng] = useState("en");

    function handleCheck() {
        if(lng === "pt") {
            setLng("en");
            i18n.changeLanguage("en")
        } else {
            setLng("pt");
            i18n.changeLanguage("pt")
        }
    }

    return (
        <NavbarContainer navBar={navbar}>
            <NavbarInnerContainer>
                <LeftContainer href="#home">
                    <Logo src={LogoWhite} />
                    <Text>{t("portfolioHeader")}</Text>
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

                        <NavbarLink href="#home">HOME</NavbarLink>
                        <NavbarLink href="#about">{t("about")}</NavbarLink>
                        <NavbarLink href="#projects">{t("projectsNav")}</NavbarLink>
                        <NavbarLink href="#contacts">{t("contacts")}</NavbarLink>

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
                    <NavbarLinkExtended href="#home" onClick={() => { setNavbar(false) }}>HOME</NavbarLinkExtended>
                    <NavbarLinkExtended href="#about" onClick={() => { setNavbar(false) }}>{t("about")}</NavbarLinkExtended>
                    <NavbarLinkExtended href="#projects" onClick={() => { setNavbar(false) }}>{t("projectsNav")}</NavbarLinkExtended>
                    <NavbarLinkExtended href="#contacts" onClick={() => { setNavbar(false) }}>{t("contacts")}</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}
