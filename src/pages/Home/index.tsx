import {
    Container,
    Content,
    Title,
    Text,
    ImageBox,
    Image,
    TextBox,
    Button,
} from './styles';

import reactLogo from "../../assets/react-logo.jpeg";
import icons from "../../assets/icons-img.png";

export function Home() {

    return (
        <Container>
            <Content>
                <TextBox>
                    <Title>Portfólio <br/> Ighor Santiago</Title>
                    <Text>Desenvolvedor mobile</Text>
                    {/* <Button>Entre em contato</Button> */}
                </TextBox>
            </Content>
            <ImageBox>
                <Image src={reactLogo} />
                <Image src={icons} style={{ position: 'absolute' }} />
            </ImageBox>
        </Container>
    );
}
