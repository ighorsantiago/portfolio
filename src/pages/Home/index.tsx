import { useTranslation } from 'react-i18next';

import {
    Container,
    Content,
    Title,
    Text,
    TextBox,
    Button,
    LearningBox,
    LearningTitle,
    ChipList,
    Chip,
    BadgesBox,
    BadgeList,
    TechBadge,
} from './styles';

const techStack = [
    'React Native',
    'TypeScript',
    'n8n',
    'Anthropic API',
    'Firebase',
    'Expo',
    'Docker',
    'Vercel',
    'React',
    'Tailwind CSS',
    'Oracle Cloud',
    'Git',
];

export function Home() {

    const { t } = useTranslation();

    const learningItems = t("home.learningItems", { returnObjects: true }) as string[];

    return (
        <Container id="home">
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
            <BadgesBox>
                <BadgeList>
                    {
                        techStack.map(item => (
                            <TechBadge key={item}>{item}</TechBadge>
                        ))
                    }
                </BadgeList>
            </BadgesBox>
        </Container>
    );
}
