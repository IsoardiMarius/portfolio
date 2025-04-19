<script lang="ts">
	import { onMount } from 'svelte';
	import type { Skill } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import UIcon from '../Icon/UIcon.svelte';

	export let items: Array<Skill> = [];
	const delay = 3000;

	let container;
	let track;
	let currentIndex = 0;
	let isHovered = false;
	let timeout: ReturnType<typeof setTimeout> | null = null;

	$: {
		if (track) {
			track.scroll({
				left: currentIndex * track.clientWidth,
				behavior: 'smooth'
			});
		}
	}

	const nextSlide = () => {
		if (currentIndex < items.length - 1) {
			currentIndex++;
		} else {
			currentIndex = 0;
		}
	};

	const prevSlide = () => {
		if (currentIndex > 0) {
			currentIndex--;
		} else {
			currentIndex = items.length - 1;
		}
	};

	const autoPlay = () => {
		if (isHovered) return;
		
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			nextSlide();
			autoPlay();
		}, delay);
	};
	
	const handleMouseEnter = () => {
		isHovered = true;
		clearTimeout(timeout);
	};
	
	const handleMouseLeave = () => {
		isHovered = false;
		autoPlay();
	};

	onMount(() => {
		autoPlay();
		
		return () => {
			if (timeout) {
				clearTimeout(timeout);
			}
		};
	});
</script>

<div class="featured-carousel" bind:this={container} on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
	<div class="carousel-track" bind:this={track}>
		{#each items as item, i}
			<div class="featured-card" class:active={i === currentIndex}>
				<div class="card-background" style="background-image: url({getAssetURL(item.logo)}); background-color: {item.color || 'var(--soft-bg)'}"></div>
				<div class="card-content">
					<span class="feature-badge">{item.category?.name || 'COMPÉTENCE'}</span>
					<h3 class="card-title">{item.name}</h3>
					<p class="card-description">{item.description || `Expertise en ${item.name}`}</p>
				</div>
			</div>
		{/each}
	</div>
	
	<div class="carousel-navigation">
		<button class="nav-button prev-button" on:click={prevSlide} aria-label="Précédent">
			<UIcon icon="i-carbon-chevron-left" />
		</button>
		
		<div class="carousel-indicators">
			{#each items as _, i}
				<button 
					class="indicator" 
					class:active={i === currentIndex}
					on:click={() => currentIndex = i}
					aria-label={`Slide ${i + 1}`}
				></button>
			{/each}
		</div>
		
		<button class="nav-button next-button" on:click={nextSlide} aria-label="Suivant">
			<UIcon icon="i-carbon-chevron-right" />
		</button>
	</div>
</div>

<style lang="scss">
	.featured-carousel {
		width: 100%;
		max-width: 640px;
		position: relative;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
		margin: 0 auto;
	}
	
	.carousel-track {
		display: flex;
		scroll-snap-type: x mandatory;
		overflow-x: auto;
		scrollbar-width: none;
		scroll-behavior: smooth;
		height: 360px;
		
		&::-webkit-scrollbar {
			display: none;
		}
	}
	
	.featured-card {
		min-width: 100%;
		height: 100%;
		scroll-snap-align: start;
		position: relative;
		overflow: hidden;
		
		&.active {
			z-index: 2;
		}
	}
	
	.card-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(0.6);
		transition: transform 0.6s ease;
		
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
		}
		
		.featured-card:hover & {
			transform: scale(1.05);
		}
	}
	
	.card-content {
		position: relative;
		z-index: 2;
		padding: 2rem;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	
	.feature-badge {
		display: inline-block;
		background-color: rgba(59, 209, 174, 0.8);
		color: #111827;
		padding: 0.35rem 0.75rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 1rem;
		width: fit-content;
	}
	
	.card-title {
		color: #ffffff;
		font-size: 1.75rem;
		font-weight: 700;
		margin: 0 0 0.75rem 0;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}
	
	.card-description {
		color: rgba(255, 255, 255, 0.9);
		font-size: 1rem;
		line-height: 1.5;
		margin: 0;
		max-width: 90%;
	}
	
	.carousel-navigation {
		position: absolute;
		bottom: 1.5rem;
		right: 1.5rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		z-index: 3;
	}
	
	.nav-button {
		width: 36px;
		height: 36px;
		border: none;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.15);
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s;
		backdrop-filter: blur(4px);
		
		&:hover {
			background-color: rgba(255, 255, 255, 0.25);
			transform: translateY(-2px);
		}
	}
	
	.carousel-indicators {
		display: flex;
		gap: 0.5rem;
	}
	
	.indicator {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.3);
		border: none;
		padding: 0;
		cursor: pointer;
		transition: all 0.3s;
		
		&.active {
			background-color: #ffffff;
			transform: scale(1.2);
		}
		
		&:hover {
			background-color: rgba(255, 255, 255, 0.5);
		}
	}
	
	@media (max-width: 768px) {
		.featured-carousel {
			border-radius: 12px;
		}
		
		.carousel-track {
			height: 300px;
		}
		
		.card-title {
			font-size: 1.5rem;
		}
		
		.card-description {
			font-size: 0.9rem;
		}
	}
</style>

