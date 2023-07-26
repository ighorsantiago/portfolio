import { useParams } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from '@phosphor-icons/react';

import {
    Overlay,
    Content,
    Close,
    Title,
    Description,
    Text,
    GithubLink,
} from './styles';

import { projects } from '../../utils/projects';

interface Props {
    image: any;
    title: string;
    description: string;
    github: string;
}

export function ProjectInfo() {

    const { title } = useParams();

    const params: Props[] = projects.filter(item => item.title === title);
    const project = params[0];

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>PROJETO</Dialog.Title>

                <Text>Ferramentas utilizadas:</Text>

                <GithubLink
                    to=""
                    // to={project.github.startsWith('https') ? project.github : 'https://www.google.com.br'}
                    target="blank"
                >
                    {title === 'Pet Control' ? 'Em construção...' : 'Ver repositório no Github'}
                </GithubLink>

                <Close>
                    <X size={24} />
                </Close>
            </Content>
        </Dialog.Portal>
    );
}