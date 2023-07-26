import { AppCard } from '../../components/AppCard';
import { Container, Content, Line, Table, Text } from './styles';

import { projects } from '../../utils/projects';

export function Projects() {

    function handleOpenProject(title: string) { }

    return (
        <Container>
            {/* <Content> */}
                <Table>
                    {
                        projects.length > 0 &&
                        projects.map(project =>
                            <Line key={project.title}>
                                <AppCard
                                    image={project.image}
                                    title={project.title}
                                    description={project.description}
                                    github={project.github}
                                    onClick={() => handleOpenProject(project.title)}
                                />
                            </Line>
                        )
                    }
                </Table>
            {/* </Content> */}
        </Container>
    );
}
