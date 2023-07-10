import {
    Container,
    ImageBox,
    IphoneImage,
    AppImage,
    Description,
    Title,
    Text,
    GithubLink,
} from "./styles";

import iPhone from '../../assets/iPhone.jpeg';

type InfoProps = {
    image: string;
    title: string;
    description: string;
    github: string;
}

export function AppCard({ image, title, description, github }: InfoProps) {

    return (

        <Container>

                <ImageBox>
                    <IphoneImage src={iPhone} />
                    <AppImage src={image} />
                </ImageBox>

                <Description>
                    <Title>{title}</Title>
                    <Text> {description} </Text>
                    <GithubLink
                        to={github.startsWith('https') ? github : 'https://www.google.com.br'}
                        target="blank"
                        
                    >
                        {github}
                    </GithubLink>
                </Description>


        </Container>
    );
}
