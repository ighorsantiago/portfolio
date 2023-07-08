import {
    Container,
    Content,
    Title,
    Text,
    ImageBox,
    Image,
    TextBox,
    Button,
} from './styles';

import reactLogo from "../../assets/react-logo.jpeg";
import icons from "../../assets/icons-img.png";

export function Home() {

    const about = `Desenvolvedor mobile com habilidade em React Native. {'\n'}
    Desde o início da faculdade até o presente momento venho trabalhando com análise de sistemas e desenvolvendo alguns aplicativos próprios. {'\n'}
    Graduação completa em Sistemas de Informação e certificação em desenvolvimento mobile utilizando o framework React Native. {'\n'}
    Vontade de aprender, espírito de equipe, comunicação, resiliência e organização. {'\n'}`;

    return (
        <Container>
            <Content>
                <TextBox>
                    <Title>Portfólio <br/> Ighor Santiago</Title>
                    <Text>Desenvolvedor mobile</Text>
                    <Button>Entre em contato</Button>
                </TextBox>
            </Content>
            <ImageBox>
                <Image src={reactLogo} />
                <Image src={icons} style={{ position: 'absolute' }} />
            </ImageBox>
        </Container>
    );
}


{/* <Text>
    Prazer, me chamo Ighor Santiago e sou um desenvolvedor mobile.<br />
    Comecei no desenvolvimento com Java mas adotei o framework React Native com TypeScript desde o início de 2020. <br /><br />
    Desde o início da faculdade venho trabalhando com análise de sistemas e desenvolvendo aplicativos por conta própria. <br /><br />
    Sou bacharel em Sistemas de Informação e tenho certificação em desenvolvimento mobile:<br /><br />
    &emsp; - React Native da Rockeseat. (2022 / 2023) <br />
    &emsp; - Lógica de Programação e Java da Caelum. (2016) <br /><br />
    Estou sempre estudando, tenho espírito de equipe, boa comunicação, resiliência e organização. <br /><br />
</Text> */}