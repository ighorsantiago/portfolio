import { useTranslation } from 'react-i18next';

import {
    Container,
    Content,
    Title,
    Text,
    ImageBox,
    Image,
    TextBox,
    Button,
    LearningBox,
    LearningTitle,
    ChipList,
    Chip,
} from './styles';

import reactLogo from "../../assets/react-logo.jpeg";
import icons from "../../assets/icons-img.png";

export function Home() {

    const { t } = useTranslation();

    const learningItems = t("home.learningItems", { returnObjects: true }) as string[];

    return (
        <Container>
            <Content>
                <TextBox>
                    <Title>{t("portfolio")} <br/> Ighor Santiago</Title>
                    <Text>{t("dev")}</Text>
                    {/* <Button>Entre em contato</Button> */}

                    <LearningBox>
                        <LearningTitle>{t("home.learning")}</LearningTitle>
                        <ChipList>
                            {
                                learningItems.map(item => (
                                    <Chip key={item}>{item}</Chip>
                                ))
                            }
                        </ChipList>
                    </LearningBox>
                </TextBox>
            </Content>
            <ImageBox>
                <Image src={reactLogo} />
                <Image src={icons} style={{ position: 'absolute' }} />
            </ImageBox>
        </Container>
    );
}
