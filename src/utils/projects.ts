import goFinances from '../assets/go-finances.png';
import dailyDiet from '../assets/daily-diet.jpeg';
import sudoku from '../assets/sudoku.jpeg';
import petControl from '../assets/pet-control-mockup.jpeg';
import icons from '../assets/icons-img.png';
import gamesPlaceholder from '../assets/games-placeholder.svg';
import fluentiaScreenshot from '../assets/fluentia-screenshot.jpeg';
import n8nInstagramScreenshot from '../assets/n8n-instagram-screenshot.jpeg';
import prospectaiScreenshot from '../assets/prospectai-screenshot.jpeg';
import mentoriaScreenshot from '../assets/mentoria-screenshot.jpeg';
import ploterScreenshot from '../assets/ploter-screenshot.jpeg';

export type ProjectCategory = 'ai' | 'mobile' | 'web' | 'games';
export type ProjectStatus = 'live' | 'testing' | 'development' | 'github';

export type ProjectLinks = {
    live?: string;
    github?: string;
};

export type Project = {
    id: string;
    image: string;
    title: string;
    description: string;
    category: ProjectCategory;
    status: ProjectStatus;
    tech: string[];
    links: ProjectLinks;
};

export const projects: Project[] = [
    // IA & Automação
    {
        id: 'fluentia',
        image: fluentiaScreenshot,
        title: 'FluentIA',
        description: 'projects.items.fluentia.description',
        category: 'ai',
        status: 'development',
        tech: ['React 19', 'TypeScript', 'Firebase', 'Anthropic API', 'Vercel'],
        links: { github: 'https://github.com/ighorsantiago/fluentia-ai-language-tutor' },
    },
    {
        id: 'n8n-instagram',
        image: n8nInstagramScreenshot,
        title: 'n8n Instagram AI Agent',
        description: 'projects.items.n8n-instagram.description',
        category: 'ai',
        status: 'live',
        tech: ['n8n', 'Anthropic API', 'Pexels', 'Cloudinary', 'Telegram', 'Instagram Graph API', 'Docker', 'Oracle Cloud'],
        links: { github: 'https://github.com/ighorsantiago/n8n-instagram-ai-agent' },
    },
    {
        id: 'prospectai',
        image: prospectaiScreenshot,
        title: 'ProspectAI',
        description: 'projects.items.prospectai.description',
        category: 'ai',
        status: 'live',
        tech: ['React', 'TypeScript', 'Vite', 'Vercel Functions', 'Anthropic API', 'Google Places API'],
        links: { github: 'https://github.com/ighorsantiago/prospectai' },
    },
    {
        id: 'mentoria',
        image: mentoriaScreenshot,
        title: 'MentorIA',
        description: 'projects.items.mentoria.description',
        category: 'ai',
        status: 'live',
        tech: ['React 19', 'TypeScript', 'Firebase', 'Anthropic API', 'Vercel'],
        links: { live: 'https://mentoria-flame.vercel.app', github: 'https://github.com/ighorsantiago/mentoria' },
    },

    // Mobile
    {
        id: 'pet-control',
        image: petControl,
        title: 'PetControl',
        description: 'projects.items.pet-control.description',
        category: 'mobile',
        status: 'testing',
        tech: ['React Native', 'TypeScript', 'Expo', 'Expo Router', 'Firebase', 'i18next'],
        links: { github: 'https://github.com/ighorsantiago/petcontrol' },
    },
    {
        id: 'go-finances',
        image: goFinances,
        title: 'GoFinances',
        description: 'projects.items.go-finances.description',
        category: 'mobile',
        status: 'github',
        tech: ['React Native', 'TypeScript', 'Expo', 'OAuth', 'AsyncStorage', 'Victory Native'],
        links: { github: 'https://github.com/ighorsantiago/gofinances' },
    },
    {
        id: 'daily-diet',
        image: dailyDiet,
        title: 'Daily Diet',
        description: 'projects.items.daily-diet.description',
        category: 'mobile',
        status: 'github',
        tech: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'Styled Components'],
        links: { github: 'https://github.com/ighorsantiago/dailydiet-firebase' },
    },

    // Web
    {
        id: 'ploter',
        image: ploterScreenshot,
        title: 'Fábrica de Sites — Ploter.com',
        description: 'projects.items.ploter.description',
        category: 'web',
        status: 'live',
        tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel'],
        links: { live: 'https://ploter.com', github: 'https://github.com/ighorsantiago/ploter-site' },
    },
    {
        id: 'portfolio',
        image: icons,
        title: 'Portfólio',
        description: 'projects.items.portfolio.description',
        category: 'web',
        status: 'live',
        tech: ['React 19', 'TypeScript', 'Vite', 'Styled Components', 'i18next'],
        links: { live: 'https://ighorsantiago.github.io/portfolio', github: 'https://github.com/ighorsantiago/portfolio' },
    },

    // Jogos
    {
        id: 'tic-tac-toe',
        image: gamesPlaceholder,
        title: 'Arena Games — Tic-Tac-Toe',
        description: 'projects.items.tic-tac-toe.description',
        category: 'games',
        status: 'github',
        tech: ['React Native', 'TypeScript', 'Expo'],
        links: { github: 'https://github.com/ighorsantiago/ticTacToeAI' },
    },
    {
        id: 'block-blast',
        image: gamesPlaceholder,
        title: 'Arena Games — Block Blast',
        description: 'projects.items.block-blast.description',
        category: 'games',
        status: 'github',
        tech: ['React Native', 'TypeScript', 'Expo'],
        links: { github: 'https://github.com/ighorsantiago/block-blast-arena' },
    },
    {
        id: 'sudoku-arena',
        image: sudoku,
        title: 'Arena Games — Sudoku',
        description: 'projects.items.sudoku-arena.description',
        category: 'games',
        status: 'github',
        tech: ['React Native', 'TypeScript', 'Expo'],
        links: { github: 'https://github.com/ighorsantiago/sudokuArena' },
    },
];
