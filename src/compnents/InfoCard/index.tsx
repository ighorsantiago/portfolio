import {
    Container,
    IconImg,
} from './styles';

import whatsappIcon from '../../assets/whatsapp-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import githubIcon from '../../assets/github-icon.svg';
import emailIcon from '../../assets/email-icon.svg';

export function InfoCard() {

    return (
        <Container>
            <IconImg src={whatsappIcon} />
            <IconImg src={linkedinIcon} />
            <IconImg src={githubIcon} />
            <IconImg src={emailIcon} />
            {/* <Card>
                <Icon>
                    <IconImg src={whatsappIcon} />
                </Icon>
                <InfoBox>
                    <InfoTitle>Telefone</InfoTitle>
                    <InfoText>+55 21 96477-7735</InfoText>
                </InfoBox>
            </Card>
            <Card>
                <Icon>
                <IconImg src={linkedinIcon} />
                </Icon>
                <InfoBox>
                    <InfoTitle>E-mail</InfoTitle>
                    <InfoText>ighor_santiago@hotmail.com</InfoText>
                </InfoBox>
            </Card>
            <Card>
                <Icon>
                    <IconImg src={githubIcon} />
                </Icon>
                <InfoBox>
                    <InfoTitle>Endereço</InfoTitle>
                    <InfoText>Rua Caniú, 309 - Pechincha</InfoText>
                </InfoBox>
            </Card> */}
        </Container>
    );
}
