import { Platform } from '$lib/types';
import { getSkills } from './skills';

// todo:
// Mettre a jour profil github

// Faire une photo professionnel et mettre sur linkedin, malte, cv, github, portfolio
// Faire site digital express
// Imprimer carte vistaprint

export const title = 'Home';

export const name = 'Marius';

export const lastName = 'Isoardi';

export const description =
	'Développeur Fullstack avec une forte expertise DevOps, je conçois des solutions techniques complètes alliant backend, frontend et infrastructure. Certifié AWS Cloud Practitioner, je m\'oriente vers les métiers du Cloud avec passion et détermination.'

export const subDescription =
	'Stack Dev: Spring Boot · Express · Flask · React · Java · JS · TS · Go · gRPC · Redis · MySQL\nStack Ops: Terraform · Kubernetes · Ansible · Docker · GitLab CI/CD · GitHub Actions · AWS · Azure\n\nActuellement disponible pour des projets freelance ambitieux ou une opportunité d\'emploi dans un environnement technique stimulant.'

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

export const skills = getSkills(
	'java', 'spring-boot', 
	'js', 'ts', 'node', 'express', 'reactjs',
	'go', 
	'mysql', 'redis',
	'docker', 'kubernetes', 
	'terraform', 'ansible', 
	'aws', 'azure',
	'linux', 'nginx'
)
