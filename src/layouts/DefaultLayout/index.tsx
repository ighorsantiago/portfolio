import { Outlet } from "react-router-dom";
import {
    Phone,
    Envelope,
    MapPinLine,
    LinkedinLogo,
    GithubLogo
} from '@phosphor-icons/react';

import {
    Container,
    LeftBox,
    Avatar,
    AvatarImg,
    Name,
    JobBox,
    JobText,
    Divider,
    Box,
    InfoCard,
    Icon,
    IconImg,
    InfoBox,
    InfoTitle,
    InfoText,
    FooterLeft,
    FooterText,
    FooterLeftIcons,
    SocialLinks,
    SocialImg,
    Menu,
    MenuBtn,
    MenuBtnText,
} from "./styles";

import { Header } from "../../compnents/Header";

export function DefaultLayout() {

    const avatarImg = 'https://github.com/ighorsantiago.png';

    return (
        <Container>
            <LeftBox>
                <Avatar>
                    <AvatarImg src={avatarImg} />
                </Avatar>
                <Name>Ighor Santiago</Name>

                <JobBox>
                    <JobText>Desenvolvedor Mobile</JobText>
                </JobBox>

                <Divider />

                {/* <Box>
                    <InfoCard>
                        <Icon>
                            <Phone size={25} />
                        </Icon>
                        <InfoBox>
                            <InfoTitle>Telefone</InfoTitle>
                            <InfoText>+55 21 96477-7735</InfoText>
                        </InfoBox>
                    </InfoCard>
                    <InfoCard>
                        <Icon>
                            <Envelope size={25} />
                        </Icon>
                        <InfoBox>
                            <InfoTitle>E-mail</InfoTitle>
                            <InfoText>ighor_santiago@hotmail.com</InfoText>
                        </InfoBox>
                    </InfoCard>
                    <InfoCard>
                        <Icon>
                            <MapPinLine size={25} />
                        </Icon>
                        <InfoBox>
                            <InfoTitle>Endereço</InfoTitle>
                            <InfoText>Rua Caniú, 309 - Pechincha</InfoText>
                        </InfoBox>
                    </InfoCard>
                </Box> */}

                <Menu>
                    <MenuBtn to="">
                        <MenuBtnText>Sobre</MenuBtnText>
                    </MenuBtn>
                    <MenuBtn to="/portfolio/contatos">
                        <MenuBtnText>Projetos</MenuBtnText>
                    </MenuBtn>
                    <MenuBtn to="">
                        <MenuBtnText>Contatos</MenuBtnText>
                    </MenuBtn>
                </Menu>

                <FooterLeft>
                    <FooterText>Mais informações?</FooterText>

                    <FooterLeftIcons>
                        <SocialLinks
                            to="https://www.linkedin.com/in/ighor-santiago/"
                            target="blank"
                        >
                            <LinkedinLogo size={40} color="black" />
                        </SocialLinks>
                        <SocialLinks
                            to="https://github.com/ighorsantiago"
                            target="blank"
                        >
                            <GithubLogo size={40} color="black" />
                        </SocialLinks>
                    </FooterLeftIcons>
                </FooterLeft>
            </LeftBox>
            <Outlet />
        </Container>
    );
}
