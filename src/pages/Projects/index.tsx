import { AppCard } from '../../compnents/AppCard';
import { Container, Content, Line, Table, Text } from './styles';

import { projects } from '../../utils/projects';

export function Projects() {

    return (
        <Container>
            <Content>
                <Table>
                    {
                        projects.length > 0 &&
                        projects.map(project =>
                            <Line>
                                <AppCard
                                    image={project.image}
                                    title={project.title}
                                    description={project.description}
                                />
                            </Line>
                        )
                    }
                </Table>
                {/* <AppCard
                    image={projects[0].image}
                    title={projects[0].title}
                    description={projects[0].description}
                />
                <AppCard
                    image={projects[0].image}
                    title={projects[0].title}
                    description={projects[0].description}
                /> */}
            </Content>
        </Container>
    );
}