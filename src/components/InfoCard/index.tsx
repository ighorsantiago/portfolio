import {
    Container,
    IconImg,
    LinkBtn
} from './styles';

import whatsappIcon from '../../assets/whatsapp-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import githubIcon from '../../assets/github-icon.svg';
import emailIcon from '../../assets/email-icon.svg';

export function InfoCard() {

    return (
        <Container>
            <LinkBtn to="whatsapp://send?text=Oi Ighor, tudo bem?&phone=+5521964777735">
                <IconImg src={whatsappIcon} />
            </LinkBtn>
            <LinkBtn
                to="https://www.linkedin.com/in/ighor-santiago/"
                target="blank"
            >
                <IconImg src={linkedinIcon} />
            </LinkBtn>
            <LinkBtn
                to="https://github.com/ighorsantiago"
                target="blank"
            >
                <IconImg src={githubIcon} />
            </LinkBtn>
            <LinkBtn to="mailto:ighor_santiago@hotmail.com">
                <IconImg src={emailIcon} />
            </LinkBtn>
        </Container>
    );
}
