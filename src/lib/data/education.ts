import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: "Master Pro Cloud",
		description: 'Formation axée sur le développement de compétences avancées en informatique, couvrant un large éventail de sujets techniques et théoriques. Cette formation inclut des projets pratiques, des stages, et l\'acquisition de compétences en gestion de projets IT.',
		location: 'France',
		logo: Assets.Epitech,
		name: 'EPITECH - European Institute of Technology',
		organization: 'EPITECH',
		period: { from: new Date(2022, 5, 1)}, // assuming it starts in June 2022 and ends in August 2025
		shortDescription: 'Maîtrise en informatique avec un accent sur le développement, l\'infrastructure cloud, et les nouvelles technologies.',
		slug: 'epitech-masters-degree',
		subjects: ['Linux', 'Microsoft Azure', 'Ansible', 'Kubernetes', 'Docker', 'Grafana', 'Prometheus.io', 'JavaScript', 'TypeScript', 'Java', 'Node.js', 'Express.js', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Prisma', 'React.js', 'Gestion de projet', 'Méthodes agiles', 'GitLab']
	},
	{
		degree: 'Brevet de technicien supérieur (BTS) en Programmation Informatique',
		description: 'Programme intensif couvrant les fondamentaux de la programmation et du développement informatique. Ce diplôme a permis de consolider mes compétences en développement web et en gestion de projets techniques.',
		location: 'France',
		logo: Assets.Openclassrooms,
		name: 'OpenClassrooms',
		organization: 'OpenClassrooms',
		period: { from: new Date(2022, 0, 1), to: new Date(2022, 11, 31) }, // assuming it covers the whole year 2022
		shortDescription: 'Diplôme technique en développement informatique, avec un accent sur la programmation et les technologies web.',
		slug: 'openclassrooms-bts',
		subjects: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Sass', 'Accessibilité W3C', 'Gestion de projets']
	}
];

export const title = 'Education';
