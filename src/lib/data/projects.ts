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
			'Une solution sur mesure à destination des restaurateurs.',
		links: [{ to: 'https://dashboard.digital-express.cloud/', label: 'Voir le Projet'}],
		logo: Assets.DigitalExpress,
		name: 'DigitalExpress',
		period: {
			from: new Date(2023, 12, 1),
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
	},
	{
		slug: 'tuto-ansible',
		color: '#FF6347',
		description:
			'Ce tutoriel explique comment installer et configurer Ansible sur un serveur Debian. Il couvre les bases de Ansible, y compris la création de playbooks, la gestion des variables, la gestion des inventaires, les modules et les plugins. Il est également utile pour les débutants qui souhaitent découvrir Ansible et son utilisation pour automatiser les tâches répétitives.',
		shortDescription:
			'Tutoriel Ansible pour installer et configurer Ansible sur un serveur Debian.',
		links: [{ to: 'https://pepper-trumpet-e77.notion.site/Mac-M1-deployment-ansible-galaxy-with-Debian-11-node-mysql-react-fff8e581ed67811388b0f4663d096044', label: 'Voir le tutoriel' }], // Remplacez l'URL par le lien vers le projet réel si disponible
		logo: Assets.Ansible, // Assurez-vous d'avoir un logo approprié pour "OhMyFood"
		name: 'Tutoriel Ansible',
		period: {
			from: new Date(2024, 2, 1),
			to: new Date(2024, 2, 10),
		},
		skills: getSkills('ansible'),
		type: 'Tutoriel',
	},
	{
		slug: 'le-bouddoir',
		color: '#573497',
		description:
			'Création d\'un site web pour un restaurant situé à Aix-en-Provence. Le site est conçu pour offrir une expérience utilisateur fluide et attrayante, tout en reflétant l\'identité unique du restaurant. Il intègre des fonctionnalités telles que la présentation des menus, photos, horaires et adresse, les réservations en ligne, etc ... Le site a été développé en utilisant React.js pour un front-end dynamique et Tailwind CSS pour une mise en page responsive. Le déploiement et la gestion des serveurs ont été automatisés à l\'aide de Docker et Ansible, avec Nginx servant de serveur web. Ce projet vise à augmenter la visibilité du restaurant en ligne et à simplifier l\'interaction des clients avec l\'établissement.',
		shortDescription:
			'Création d\'un site web dynamique pour un restaurant à Aix-en-Provence.',
		links: [{ to: 'https://restaurant-lebouddoir-aix.fr/', label: 'Voir le Projet'}],
		logo: Assets.DigitalExpress,
		name: 'Le Bouddoir',
		period: {
			from: new Date(2023, 5, 1),
			to: new Date(2023, 6, 31)
		},
		skills: getSkills('reactjs', 'tailwindcss', 'nginx', 'docker', 'ansible'),
		type: 'Site web',
		screenshots: [
			{
				label: 'screen 1',
				src: getAssetURL(Assets.LeBouddoir1)
			},
			{
				label: 'screen 2',
				src: getAssetURL(Assets.LeBouddoir2)
			},
			{
				label: 'screen 3',
				src: getAssetURL(Assets.LeBouddoir3)
			},
			{
				label: 'screen 4',
				src: getAssetURL(Assets.LeBouddoir4)
			}
		],
	},
	{
		slug: 'la-panthere-seo',
		color: '#1E88E5',
		description:
			'Projet d\'optimisation SEO. Le site web de l\'entreprise avait une faible visibilité sur les moteurs de recherche, ce qui affectait son activité. L\'objectif du projet était d\'analyser l\'état actuel du SEO du site, de corriger les principaux problèmes identifiés, notamment en matière de vitesse de chargement, de taille des pages et d\'accessibilité. Un rapport détaillé a ensuite été produit pour comparer les performances du site avant et après les optimisations, en utilisant différents outils d\'analyse de performance et de qualité web.',
		shortDescription:
			'Optimisation SEO du site web de "La Panthère" pour améliorer sa visibilité et ses performances.',
		links: [{ to: 'https://isoardimarius.github.io/LaPanthere/', label: 'Voir le Projet' }], // Remplacez l'URL par le lien vers le rapport réel si disponible
		logo: Assets.LaPanthere, // Assurez-vous d'avoir un logo approprié pour "La Panthère"
		name: 'La Panthère SEO',
		period: {
			from: new Date(2024, 3, 1),
			to: new Date(2024, 4, 1),
		},
		skills: getSkills('js', 'sass'),
		type: 'SEO',
		screenshots: [
			{
				label: 'screen 1',
				src: getAssetURL(Assets.LaPanthere1)
			},
			{
				label: 'screen 2',
				src: getAssetURL(Assets.LaPanthere2)
			},
			{
				label: 'screen 3',
				src: getAssetURL(Assets.LaPanthere3) },
			{
				label: 'screen 4',
				src: getAssetURL(Assets.LaPanthere4) },
		],
	},
	{
		slug: 'ohmyfood',
		color: '#FF6347',
		description:
			'OhMyFood est une jeune startup cherchant à révolutionner le marché de la restauration en offrant aux clients la possibilité de composer leur menu en ligne pour que les plats soient prêts à leur arrivée. Mon rôle dans ce projet a été d\'intégrer la maquette mobile-first conçue par le designer UI, en respectant strictement les contraintes graphiques et d\'animations, tout en évitant l\'utilisation de JavaScript. La mise en page a ensuite été adaptée librement pour les versions desktop et tablette, en maintenant une expérience utilisateur cohérente et fluide sur toutes les plateformes.',
		shortDescription:
			'Intégration mobile-first pour une startup de restauration avec respect strict des contraintes graphiques et d\'animations.',
		links: [{ to: 'https://isoardimarius.github.io/OhMyFood/', label: 'Voir le Projet' }], // Remplacez l'URL par le lien vers le projet réel si disponible
		logo: Assets.Unknown, // Assurez-vous d'avoir un logo approprié pour "OhMyFood"
		name: 'OhMyFood',
		period: {
			from: new Date(2024, 2, 1),
			to: new Date(2024, 3, 1),
		},
		skills: getSkills('js', 'sass'),
		type: 'Intégration Web',
		screenshots: [
			{
				label: 'screen 1',
				src: getAssetURL(Assets.OhMyFood1)
			},
			{
				label: 'screen 2',
				src: getAssetURL(Assets.OhMyFood2)
			},
			{
				label: 'screen 3',
				src: getAssetURL(Assets.OhMyFood3)
			},
			{
				label: 'screen 3',
				src: getAssetURL(Assets.OhMyFood4)
			},
		],
	}

];

export const title = 'Projets';
