import { ArrowUpRight } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';

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
import { ProjectInfo } from '../../pages/ProjectInfo';

type InfoProps = {
    image: string;
    title: string;
    description: string;
    github: string;
    onClick: () => void;
}

export function AppCard({ image, title, description, github, onClick }: InfoProps) {

    return (

        <Container>
            <ImageBox>
                <IphoneImage src={iPhone} />
                <AppImage src={image} />
            </ImageBox>

            <Description>
                <Title>{title}</Title>
                <Text> {description} </Text>
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
                        {title === 'Pet Control' ? 'Em construção...' : 'Ver repositório no Github'}
                    </GithubLink>
                }
            </Description>
        </Container>
    );
}
