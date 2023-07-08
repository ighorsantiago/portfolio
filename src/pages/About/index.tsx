import { InfoCard } from '../../compnents/InfoCard';
import { Container, Content, Text } from './styles';

export function About() {

    return (
        <Container>
            <Content>
                <Text>
                    Prazer, me chamo Ighor Santiago e sou um desenvolvedor mobile.<br />
                    Comecei no desenvolvimento com Java mas adotei o framework React Native com TypeScript desde o início de 2020. <br /><br />
                    Desde o início da faculdade venho trabalhando com análise de sistemas e desenvolvendo aplicativos por conta própria. <br /><br />
                    Sou bacharel em Sistemas de Informação e tenho certificação em desenvolvimento mobile:<br /><br />
                    {/* &emsp; - React Native da Rockeseat. (2022 / 2023) <br />
                    &emsp; - Lógica de Programação e Java da Caelum. (2016) <br /><br /> */}
                    Estou sempre estudando, tenho espírito de equipe, boa comunicação, resiliência e organização. <br /><br />
                </Text>
            </Content>
        </Container>
    );
}