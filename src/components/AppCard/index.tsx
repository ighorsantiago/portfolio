import { ArrowUpRight } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { useTranslation } from 'react-i18next';

import {
    Container,
    ImageBox,
    IphoneImage,
    AppImage,
    Description,
    Title,
    Text,
    GithubLink,
    InfoButton,
} from "./styles";


import iPhone from '../../assets/iPhone.jpeg';

type InfoProps = {
    image: string;
    title: string;
    description: string;
    github: string;
    onClick: () => void;
}

export function AppCard({ image, title, description, github, onClick }: InfoProps) {

    const { t } = useTranslation();

    return (

        <Container>
            <ImageBox>
                <IphoneImage src={iPhone} />
                <AppImage src={image} />
            </ImageBox>

            <Description>
                <Title>{title}</Title>
                <Text> {t(description)} </Text>
                {/* <InfoButton to={`/portfolio/projetos/${title}`}> */}

                {/* <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <InfoButton onClick={onClick}>
                            Saiba mais <ArrowUpRight size={15} />
                        </InfoButton>
                    </Dialog.Trigger>

                    <ProjectInfo />
                </Dialog.Root> */}

                {
                    title !== "Pet Control" &&
                    <GithubLink
                        to={github.startsWith('https') ? github : 'https://www.google.com.br'}
                        target="blank"
                    >
                        {title === 'Pet Control' ? t("development") : t("repo")}
                    </GithubLink>
                }
            </Description>
        </Container>
    );
}
