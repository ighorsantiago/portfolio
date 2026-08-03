import { Container, Content, Image, Text } from './styles';

import { useTranslation } from 'react-i18next';

import Ighor from '../../assets/eu.jpeg';

export function About() {

    const { t } = useTranslation();

    return (
        <Container id="about">
            <Content>

                <Image src={Ighor} />

                <Text>
                    {t("about1")}<br /><br />
                    {t("about2")}<br /><br />
                    {t("about3")}
                </Text>
            </Content>
        </Container>
    );
}
