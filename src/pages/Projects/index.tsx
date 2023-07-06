import { AppCard } from '../../compnents/AppCard';
import { Container, Content, Text } from './styles';

import { projects } from '../../utils/projects';

export function Projects() {

    return (
        <Container>
            <Content>
                {
                    projects.length > 0 &&
                    projects.map(project =>
                        <AppCard
                            image={project.image}
                            title={project.title}
                            description={project.description}
                        />
                    )
                }
            </Content>
        </Container>
    );
}