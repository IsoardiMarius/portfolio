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

<div class="hero-container">
	<div class="gradient-bg"></div>
	<div class="content-wrapper">
		<div class="intro-section" class:fade-in={visible}>
			<MainTitle classes="main-title">
				<span class="first-name">{name}</span> 
				<span class="last-name">{lastName}</span>
			</MainTitle>
			
			<div class="job-title-wrapper">
				<p class="job-title">{currentJobTitle}<span class="cursor">|</span></p>
			</div>
			
			<p class="description" class:slide-in={visible}>
				{description}
			</p>
			
			<div class="stack-info" class:fade-in-delay={visible}>
				<p class="stack">
					{subDescription}
				</p>
			</div>
			
			<div class="social-links" class:slide-up={visible}>
				{#each links as link}
					<a
						class="social-icon-link"
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
		
		<div class="skills-showcase" class:slide-in-right={visible}>
			<Carrousel items={skills ?? skillsItems} />
		</div>
	</div>
</div>

<style lang="scss">
	.hero-container {
		position: relative;
		min-height: calc(100vh - 80px);
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	
	.gradient-bg {
		position: absolute;
		top: -100px;
		right: -100px;
		width: 600px;
		height: 600px;
		border-radius: 50%;
		background: radial-gradient(
			circle,
			rgba(var(--accent-rgb), 0.08) 0%,
			rgba(var(--accent-rgb), 0.05) 35%,
			rgba(var(--accent-rgb), 0.01) 70%,
			transparent 100%
		);
		z-index: 0;
		opacity: 0.7;
		filter: blur(40px);
	}
	
	.content-wrapper {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 2rem 1rem;
		z-index: 1;
		
		@media (min-width: 1024px) {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
	}
	
	.intro-section {
		padding: 0 1rem;
		z-index: 2;
		max-width: 600px;
		
		@media (min-width: 768px) {
			padding: 0 2rem;
		}
	}
	
	.main-title {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		text-align: center;
		
		@media (min-width: 768px) {
			font-size: 3rem;
			text-align: left;
		}
		
		.first-name {
			color: var(--main-text);
		}
		
		.last-name {
			color: var(--accent-text);
			position: relative;
			
			&::after {
				content: '';
				position: absolute;
				bottom: -8px;
				left: 0;
				width: 100%;
				height: 3px;
				background: linear-gradient(90deg, var(--accent-text), transparent);
				border-radius: 3px;
			}
		}
	}
	
	.job-title-wrapper {
		height: 32px;
		margin: 1.5rem 0;
		overflow: hidden;
	}
	
	.job-title {
		color: var(--accent-text);
		font-size: 1.5rem;
		font-weight: 500;
		margin: 0;
		text-align: center;
		
		@media (min-width: 768px) {
			text-align: left;
		}
	}
	
	.cursor {
		animation: blink 1s infinite;
	}
	
	.description {
		color: var(--tertiary-text);
		font-size: 1.2rem;
		font-weight: 300;
		line-height: 1.6;
		margin: 1.5rem 0;
		text-align: center;
		
		@media (min-width: 768px) {
			text-align: left;
		}
	}
	
	.stack-info {
		margin: 1.5rem 0;
		padding: 1.25rem;
		border-radius: 12px;
		background: linear-gradient(135deg, 
			rgba(var(--accent-rgb), 0.05) 0%, 
			rgba(var(--accent-rgb), 0.1) 100%
		);
		border-left: 3px solid var(--accent-text);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
	}
	
	.stack {
		white-space: pre-line;
		color: var(--tertiary-text);
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.6;
		text-align: center;
		
		@media (min-width: 768px) {
			text-align: left;
		}
	}
	
	.social-links {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-top: 2rem;
		
		@media (min-width: 768px) {
			justify-content: flex-start;
		}
	}
	
	.social-icon-link {
		padding: 0.75rem;
		background-color: var(--soft-bg);
		border-radius: 50%;
		transition: all 0.3s;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
		
		&:hover {
			transform: translateY(-5px) scale(1.1);
			box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
			background-color: var(--accent-text);
			
			:global(svg) {
				color: white !important;
			}
		}
	}
	
	.skills-showcase {
		flex: 1;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		
		@media (min-width: 1024px) {
			justify-content: flex-end;
		}
	}
	
	/* Animations */
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
</style>
