import { Platform } from '$lib/types';
import { getSkills } from './skills';

// todo:
// Revoir tous les textes
// Ajouter phrase sur experience pour expliquer d'aller voir en detail sur linkedin
// Mettre a jour profil github

// Faire une photo professionnel et mettre sur linkedin, malte, cv, github, portfolio
// Faire site digital express
// Imprimer carte vistaprint

export const title = 'Home';

export const name = 'Marius';

export const lastName = 'Isoardi';

export const description =
	'Développeur et expert DevOps, je conçois des solutions digitales sur mesure qui allient innovation et performance. Disponible pour donner vie à vos projets freelance dès 250€ par jour. Construisons ensemble l\'avenir de votre entreprise.'

export const subDescription =
	'Vous avez ci-dessous différents liens, comme mon Github, Linkedin, mon mail, etc. Pour un premier contact n\'hésitez pas à me contact idéalement par Linkedin / email.'
export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/IsoardiMarius' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/marius-isoardi-057338233/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/19590717/marius-isoardi'
	},
	{
		platform: Platform.Email,
		link: 'misoardi13100@gmail.com'
	}
];

export const skills = getSkills('ansible', 'kubernetes', 'grafana', 'prometheus', 'nginx', 'linux', 'java', 'spring-boot', 'js', 'ts', 'node', 'express', 'mysql', 'alertmanager', 'postgres', 'prisma', 'jest', 'reactjs', 'tailwindcss', 'sass', 'android')
