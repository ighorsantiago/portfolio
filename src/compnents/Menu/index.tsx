import { useState } from 'react';

import {
    LeftBox,
    PersonalInfoBox,
    Avatar,
    AvatarImg,
    Name,
    JobBox,
    JobText,
    Divider,
    MenuList,
    MenuBtn,
    // MenuBtnText,
    FooterLeft,
    FooterText,
    FooterLeftIcons,
    SocialLinks,
    Icon,
} from './styles'

import {
    LinkedinLogo,
    GithubLogo,
    List,
    X
} from '@phosphor-icons/react';

export function Menu() {

    const avatarImg = 'https://github.com/ighorsantiago.png';

    const [active, setActive] = useState(false);

    const links = [
        { page: "Sobre", href: "/portfolio" },
        { page: "Projetos", href: "/portfolio/projetos" },
        { page: "Contatos", href: "/portfolio/contatos" },
    ];

    return (
        <LeftBox>
            <Avatar>
                <AvatarImg src={avatarImg} />
            </Avatar>
            <PersonalInfoBox active={active}>
                <Name>Ighor Santiago</Name>

                {/* <JobBox active={active}> */}
                <JobBox>
                    <JobText>Desenvolvedor Mobile</JobText>
                </JobBox>
            </PersonalInfoBox>

            <Divider />

            <MenuList active={active}>
                {/* <MenuBtn to="">
                    Sobre
                </MenuBtn>
                <MenuBtn to="/portfolio/contatos">
                    Projetos
                </MenuBtn>
                <MenuBtn to="">
                    Contatos
                </MenuBtn> */}

                {
                    links.map(link => (
                        <MenuBtn to={link.href}>
                            { link.page }
                        </MenuBtn>
                    ))
                }

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
            </MenuList>


            <Icon onClick={() => { setActive(!active) }}>
                {
                    active ? <X /> : <List />
                }
            </Icon>
        </LeftBox>
    );
}