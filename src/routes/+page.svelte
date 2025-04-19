<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills, subDescription } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';
	import { onMount } from 'svelte';

	let visible = false;
	let currentJobTitle = "";
	const jobTitles = ["Développeur Fullstack", "Expert DevOps", "Cloud Engineer"];
	let jobTitleIndex = 0;
	let charIndex = 0;
	let typeDirection = 1; // 1 pour taper, -1 pour effacer

	onMount(() => {
		visible = true;
		
		// Animation d'écriture pour les titres de job
		const typingInterval = setInterval(() => {
			if (typeDirection === 1) {
				// Taper
				if (charIndex < jobTitles[jobTitleIndex].length) {
					currentJobTitle = jobTitles[jobTitleIndex].substring(0, charIndex + 1);
					charIndex++;
				} else {
					// Pause avant d'effacer
					setTimeout(() => {
						typeDirection = -1;
					}, 2000);
				}
			} else {
				// Effacer
				if (charIndex > 0) {
					currentJobTitle = jobTitles[jobTitleIndex].substring(0, charIndex - 1);
					charIndex--;
				} else {
					// Changer de titre
					jobTitleIndex = (jobTitleIndex + 1) % jobTitles.length;
					typeDirection = 1;
				}
			}
		}, 100);

		return () => clearInterval(typingInterval);
	});

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<div class="hero-container col self-center flex-1 justify-center items-center p-y-0px p-x-10px">
	<div class="content-wrapper md:flex-row md:justify-between items-center max-w-[1200px] w-full mx-auto">
		<div class="intro-section px-4 md:px-6 py-8 md:py-12 md:flex-1 transition-all"
			class:fade-in={visible}>
			
			<MainTitle classes="md:text-left">{name} {lastName}</MainTitle>
			
			<div class="job-title-wrapper h-[32px] my-3 overflow-hidden">
				<p class="job-title text-[var(--accent-text)] md:text-left text-[1.5em] font-medium">{currentJobTitle}<span class="cursor">|</span></p>
			</div>
			
			<p class="description text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-light leading-relaxed my-4 max-w-[650px]"
				class:slide-in={visible}>
				{description}
			</p>
			
			<div class="stack-info my-5 py-3 px-4 bg-[var(--card-bg)] rounded-md shadow-sm"
				class:fade-in-delay={visible}>
				<p class="stack whitespace-pre-line text-[var(--tertiary-text)] text-center md:text-left text-[1em] font-light leading-relaxed">
					{subDescription}
				</p>
			</div>
			
			<div class="social-links mt-6 row justify-center md:justify-start gap-4"
				class:slide-up={visible}>
				{#each links as link}
					<a
						class="social-icon-link p-2 bg-[var(--soft-bg)] rounded-full hover:scale-110 transition-transform"
						href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
						target="_blank"
						rel="noreferrer"
						aria-label={link.platform}
					>
						<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'24px'} />
					</a>
				{/each}
			</div>
		</div>
		
		<div class="skills-showcase md:flex-1 transition-all" class:slide-in-right={visible}>
			<Carrousel items={skills ?? skillsItems} />
		</div>
	</div>
</div>

<style lang="scss">
	.hero-container {
		min-height: calc(100vh - 80px);
	}
	
	.content-wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	
	.cursor {
		animation: blink 1s infinite;
	}
	
	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}
	
	.fade-in {
		animation: fadeIn 0.8s ease-in-out forwards;
		opacity: 0;
	}
	
	.fade-in-delay {
		animation: fadeIn 0.8s ease-in-out 0.4s forwards;
		opacity: 0;
	}
	
	.slide-in {
		animation: slideIn 0.8s ease-in-out 0.2s forwards;
		opacity: 0;
		transform: translateY(20px);
	}
	
	.slide-in-right {
		animation: slideInRight 0.8s ease-in-out 0.5s forwards;
		opacity: 0;
		transform: translateX(50px);
	}
	
	.slide-up {
		animation: slideUp 0.8s ease-in-out 0.6s forwards;
		opacity: 0;
		transform: translateY(20px);
	}
	
	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	
	@keyframes slideIn {
		from { 
			opacity: 0;
			transform: translateY(20px);
		}
		to { 
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	@keyframes slideInRight {
		from { 
			opacity: 0;
			transform: translateX(50px);
		}
		to { 
			opacity: 1;
			transform: translateX(0);
		}
	}
	
	@keyframes slideUp {
		from { 
			opacity: 0;
			transform: translateY(20px);
		}
		to { 
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	@media (max-width: 768px) {
		.content-wrapper {
			padding: 1rem 0;
		}
		
		.skills-showcase {
			margin-top: 2rem;
		}
	}
	
	.stack-info {
		border-left: 3px solid var(--accent-text);
	}
</style>
