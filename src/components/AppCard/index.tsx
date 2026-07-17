import { ArrowUpRight } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

import {
    Container,
    ImageBox,
    IphoneImage,
    AppImage,
    PlainImage,
    Description,
    StatusBadge,
    Title,
    Text,
    TechList,
    TechTag,
    LinksBox,
    GithubLink,
} from "./styles";

import iPhone from '../../assets/iPhone.jpeg';

import { Project } from '../../utils/projects';

type AppCardProps = {
    project: Project;
}

export function AppCard({ project }: AppCardProps) {

    const { t } = useTranslation();

    const { image, title, description, category, status, tech, links } = project;

    return (
        <Container>
            <ImageBox>
                {
                    category === 'mobile' ? (
                        <>
                            <IphoneImage src={iPhone} />
                            <AppImage src={image} />
                        </>
                    ) : (
                        <PlainImage src={image} />
                    )
                }
            </ImageBox>

            <Description>
                <StatusBadge status={status}>{t(`projects.status.${status}`)}</StatusBadge>

                <Title>{title}</Title>
                <Text>{t(description)}</Text>

                <TechList>
                    {tech.map(item => (
                        <TechTag key={item}>{item}</TechTag>
                    ))}
                </TechList>

                <LinksBox>
                    {
                        links.live &&
                        <GithubLink to={links.live} target="blank">
                            {t('projects.links.live')} <ArrowUpRight size={14} />
                        </GithubLink>
                    }
                    {
                        links.github &&
                        <GithubLink to={links.github} target="blank">
                            {t('projects.links.github')} <ArrowUpRight size={14} />
                        </GithubLink>
                    }
                </LinksBox>
            </Description>
        </Container>
    );
}
