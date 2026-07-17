import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AppCard } from '../../components/AppCard';
import { Container, Title, FilterBar, FilterButton, Table, Line } from './styles';

import { projects, ProjectCategory } from '../../utils/projects';

type FilterValue = ProjectCategory | 'all';

const filters: FilterValue[] = ['all', 'mobile', 'web', 'ai', 'games'];

export function Projects() {

    const { t } = useTranslation();

    const [filter, setFilter] = useState<FilterValue>('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <Container>
            <Title>{t('projectsNav')}</Title>

            <FilterBar>
                {
                    filters.map(value => (
                        <FilterButton
                            key={value}
                            active={filter === value}
                            onClick={() => setFilter(value)}
                        >
                            {t(`projects.filter.${value}`)}
                        </FilterButton>
                    ))
                }
            </FilterBar>

            <Table>
                {
                    filteredProjects.map(project =>
                        <Line key={project.id}>
                            <AppCard project={project} />
                        </Line>
                    )
                }
            </Table>
        </Container>
    );
}
