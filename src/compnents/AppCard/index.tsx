import {
    Container,
    ImageBox,
    IphoneImage,
    AppImage,
    Description,
    Title,
    Text,
} from "./styles";

import iPhone from '../../assets/iPhone.jpeg';

type InfoProps = {
    image: string;
    title: string;
    description: string;
}

export function AppCard({ image, title, description }: InfoProps) {

    return (

        <Container>

                <ImageBox>
                    <IphoneImage src={iPhone} />
                    <AppImage src={image} />
                </ImageBox>

                <Description>
                    <Title>{title}</Title>
                    <Text> {description} </Text>
                </Description>

        </Container>
    );
}
