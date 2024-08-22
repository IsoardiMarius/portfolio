import Assets, { getAssetURL } from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
export const items: Array<Project> = [
	{
		slug: 'digital-express-restaurant',
		color: '#573497',
		description:
			'Une solution personnalisée pour les restaurateurs, afin de moderniser leur présence en ligne et d\'optimiser l\'expérience client. Cette solution comprend des fonctionnalités telles que la gestion simplifiée des réservations, la mise en valeur des menus en ligne, et des outils pour recueillir et analyser les retours clients.',
		shortDescription:
		// shortDescription sera plus court que description
			'Une solution sur mesure à destination des restaurateurs',
		links: [{ to: 'https://dashboard.digital-express.cloud/', label: 'Live Demo' }],
		logo: Assets.DigitalExpress,
		name: 'DigitalExpress',
		period: {
			from: new Date(2023, 5, 1),
		},
		skills: getSkills('linux', 'ansible', 'docker', 'nginx','express', 'ts', 'mysql', 'pr', 'reactjs', 'tailwind'),
		type: 'Application',
		screenshots: [
			{
				label: 'screen 1',
				src: getAssetURL(Assets.Dashboard1)
			},
			{
				label: 'screen 2',
				src: getAssetURL(Assets.Dashboard2)
			},
			{
				label: 'screen 3',
				src: getAssetURL(Assets.Dashboard3)
			},
			{
				label: 'screen 4',
				src: getAssetURL(Assets.Dashboard4)
			},

		],
	}
];

export const title = 'Projets';
