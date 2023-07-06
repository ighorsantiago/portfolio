import {
    Container,
    ImageBox,
    Image,
    Description,
    Title,
    Text
} from "./styles";

type InfoProps = {
    image: string;
    title: string;
    description: string;
}

export function AppCard({ image, title, description }: InfoProps) {

    return (

        <Container>
            <ImageBox>
                <Image src={image} />
            </ImageBox>

            <Description>
                <Title>{title}</Title>
                <Text>
                    {description}
                </Text>
            </Description>
        </Container>
    );
}
