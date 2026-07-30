import {
    Container,
    IconImg,
    EmailIcon,
    LinkBtn
} from './styles';

import whatsappIcon from '../../assets/whatsapp-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import githubIcon from '../../assets/github-icon.svg';

export function InfoCard() {

    return (
        <Container>
            <LinkBtn href="whatsapp://send?text=Oi Ighor, tudo bem?&phone=+5521964777735">
                <IconImg src={whatsappIcon} />
            </LinkBtn>
            <LinkBtn
                href="https://www.linkedin.com/in/ighor-santiago/"
                target="_blank"
                rel="noreferrer"
            >
                <IconImg src={linkedinIcon} />
            </LinkBtn>
            <LinkBtn
                href="https://github.com/ighorsantiago"
                target="_blank"
                rel="noreferrer"
            >
                <IconImg src={githubIcon} />
            </LinkBtn>
            <LinkBtn href="mailto:ighor_santiago@hotmail.com">
                <EmailIcon weight="regular" />
            </LinkBtn>
        </Container>
    );
}
