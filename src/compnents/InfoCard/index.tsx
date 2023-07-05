import {
    Box,
    Card,
    Icon,
    InfoBox,
    InfoTitle,
    InfoText
} from './styles';

import {
    Phone,
    Envelope,
    MapPinLine,
    LinkedinLogo,
    GithubLogo,
    List,
    X
} from '@phosphor-icons/react';

export function InfoCard() {

    return (
        <Box>
            <Card>
                <Icon>
                    <Phone size={25} />
                </Icon>
                <InfoBox>
                    <InfoTitle>Telefone</InfoTitle>
                    <InfoText>+55 21 96477-7735</InfoText>
                </InfoBox>
            </Card>
            <Card>
                <Icon>
                    <Envelope size={25} />
                </Icon>
                <InfoBox>
                    <InfoTitle>E-mail</InfoTitle>
                    <InfoText>ighor_santiago@hotmail.com</InfoText>
                </InfoBox>
            </Card>
            <Card>
                <Icon>
                    <MapPinLine size={25} />
                </Icon>
                <InfoBox>
                    <InfoTitle>Endereço</InfoTitle>
                    <InfoText>Rua Caniú, 309 - Pechincha</InfoText>
                </InfoBox>
            </Card>
        </Box>
    );
}
