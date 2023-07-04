import {
    Avatar,
    AvatarImg,
    Container,
    LeftBox,
    RightBox,
    Name,
    JobBox,
    JobText,
    Divider,
    InfoBox,
    InfoTitle,
    InfoText,
    Box,
    InfoCard,
    Icon,
    IconImg,
    FooterLeft,
    FooterText,
    FooterLeftIcons,
    SocialLinks,
    SocialImg
} from './styles';

import phoneImg from '../../assets/phone.svg';
import emailImg from '../../assets/email.svg';
import locationImg from '../../assets/location.svg';
import linkedinImg from '../../assets/linkedin.svg';
import githubImg from '../../assets/github.svg';

export function Home() {

    const avatarImg = 'https://github.com/ighorsantiago.png';

    return (
        <Container>
            {/* <Text>PÁGINA PRINCIPAL</Text> */}
            <LeftBox>
                <Avatar>
                    <AvatarImg src={avatarImg} />
                </Avatar>
                <Name>Ighor Santiago</Name>

                <JobBox>
                    <JobText>Desenvolvedor Mobile</JobText>
                </JobBox>

                <Divider />

                <Box>
                    <InfoCard>
                        <Icon>
                            <IconImg src={phoneImg} />
                        </Icon>
                        <InfoBox>
                            <InfoTitle>Telefone</InfoTitle>
                            <InfoText>+55 21 96477-7735</InfoText>
                        </InfoBox>
                    </InfoCard>
                    <InfoCard>
                        <Icon>
                            <IconImg src={emailImg} />
                        </Icon>
                        <InfoBox>
                            <InfoTitle>E-mail</InfoTitle>
                            <InfoText>ighor_santiago@hotmail.com</InfoText>
                        </InfoBox>
                    </InfoCard>
                    <InfoCard>
                        <Icon>
                            <IconImg src={locationImg} />
                        </Icon>
                        <InfoBox>
                            <InfoTitle>Endereço</InfoTitle>
                            <InfoText>Rua Caniú, 309 - Pechincha</InfoText>
                        </InfoBox>
                    </InfoCard>
                </Box>

                <FooterLeft>
                    <FooterText>Mais informações?</FooterText>

                    <FooterLeftIcons>
                        <SocialLinks
                            to="https://www.linkedin.com/in/ighor-santiago/"
                            target="blank"
                        >
                            <SocialImg src={linkedinImg} />
                        </SocialLinks>
                        <SocialLinks
                            to="https://github.com/ighorsantiago"
                            target="blank"
                        >
                            <SocialImg src={githubImg} />
                        </SocialLinks>
                    </FooterLeftIcons>
                </FooterLeft>
            </LeftBox>
            <RightBox />
        </Container>
    );
}
