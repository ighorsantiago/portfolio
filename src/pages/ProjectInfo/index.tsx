import { useParams } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

import {
    Overlay,
    Content,
    Close,
    Text,
    GithubLink,
} from './styles';

import { projects } from '../../utils/projects';

export function ProjectInfo() {

    const { t } = useTranslation();
    const { title } = useParams();

    const project = projects.find(item => item.title === title);

    if (!project) return null;

    const link = project.links.live ?? project.links.github;

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>{project.title}</Dialog.Title>

                <Text>{t(project.description)}</Text>

                {
                    link &&
                    <GithubLink to={link} target="blank">
                        {t(project.links.live ? 'projects.links.live' : 'projects.links.github')}
                    </GithubLink>
                }

                <Close>
                    <X size={24} />
                </Close>
            </Content>
        </Dialog.Portal>
    );
}
