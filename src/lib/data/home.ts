import { Platform } from '$lib/types';
import { getSkills } from './skills';

// todo:
// 1. Delete list contact on home
// 2. Add navbar from Magic UI
// 3. Add data for skills, experience, education, projects, resume
// 4. Add multiple languages
// 5. Add picture of me


export const title = 'Home';

export const name = 'Marius';

export const lastName = 'Isoardi';

export const description =
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis laudantium quaerat iure ipsum!';

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
