import { Container, Content, Image, Text } from './styles';

import { useTranslation } from 'react-i18next';

import Ighor from '../../assets/eu.jpeg';

export function About() {

    const { t } = useTranslation();

    return (
        <Container>
            <Content>

                <Image src={Ighor} />

                <Text>
                    {t("about1")}<br />
                    {t("about2")} <br /><br />
                    {t("about3")}<br />
                    {t("about4")} <br /><br />
                    {t("about5")}<br />
                    {t("about6")}
                    {t("about7")}<br /><br />
                    {/* &emsp; - React Native da Rockeseat. (2022 / 2023) <br />
                        &emsp; - Lógica de Programação e Java da Caelum. (2016) <br /><br /> */}
                    {t("about8")} <br /><br />
                </Text>
            </Content>
        </Container>
    );
}

{/*
    Prazer, me chamo Ighor Santiago e sou um desenvolvedor mobile.<br />
    Comecei no desenvolvimento com Java mas adotei o framework React Native com TypeScript desde o início de 2020. <br /><br />
    Desde o início da faculdade venho trabalhando com análise de sistemas, primeiro na IBM e atualmente na Global Hitss.<br />
    Venho desenvolvendo alguns aplicativos nos cursos que faço e tenho dois aplicativos que quero publicar nas lojas. <br /><br />
    Sou bacharel em Sistemas de Informação e tenho certificação em desenvolvimento mobile pela Rocketseat.<br />
    Além disso particei de diversas Semanas Ominstack e Next Level Week também da Rockeseat. Tenho certificado de Lógica de programação e 
    Formação Java pela Caelum e estou começando fazer Alura, começando pelo curso de Testes em React Native.<br /><br />
    &emsp; - React Native da Rockeseat. (2022 / 2023) <br />
    &emsp; - Lógica de Programação e Java da Caelum. (2016) <br /><br />
    Estou sempre estudando, tenho espírito de equipe, boa comunicação, resiliência e organização. <br /><br />
*/}