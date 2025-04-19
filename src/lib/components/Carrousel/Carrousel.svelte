<script lang="ts">
	import { onMount } from 'svelte';
	import type { Skill } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import UIcon from '../Icon/UIcon.svelte';

	export let items: Array<Skill> = [];
	const delay = 2500;

	let element: HTMLElement;

	let timeout: unknown;
	let index = 0;
	let toRight = true;
	let isHovered = false;

	$: {
		if (element) {
			element.scroll({
				left: index * 180,
				behavior: 'smooth'
			});
		}
	}

	const slide = (right: boolean) => {
		if (right) {
			if (index < items.length - 1) {
				index = index + 1;
			} else {
				index = index - 1;
				toRight = false;
			}
		} else {
			if (index > 0) {
				index = index - 1;
			} else {
				index = index + 1;
				toRight = true;
			}
		}
	};

	const toggle = (right: boolean) => {
		if (isHovered) return;
		
		clearTimeout(timeout as number);

		timeout = setTimeout(() => {
			slide(right);
			toggle(toRight);
		}, delay);
	};

	const toggleLeft = () => {
		clearTimeout(timeout as number);
		toRight = false;
		slide(false);
		toggle(toRight);
	};

	const toggleRight = () => {
		clearTimeout(timeout as number);
		toRight = true;
		slide(true);
		toggle(toRight);
	};
	
	const handleMouseEnter = () => {
		isHovered = true;
		clearTimeout(timeout as number);
	};
	
	const handleMouseLeave = () => {
		isHovered = false;
		toggle(toRight);
	};

	onMount(() => {
		toggle(true);
	});
</script>

<div class="carrousel-container" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
	<div class="skills-title">
		<span>Compétences</span>
		<div class="skills-line"></div>
	</div>

	<div class="carrousel flex-[0.5] row-center">
		<button
			class="nav-button left-button row-center font-500 p-5px cursor-pointer"
			on:click={toggleLeft}
			aria-label="Précédent"
		>
			<UIcon icon="i-carbon-chevron-left" />
		</button>

		<div bind:this={element} class="carrousel-track row overflow-hidden w-180px">
			{#each items as item}
				<div class="skill-item box-content w-180px p-15px col-center">
					<div class="skill-logo-wrapper">
						<img class="skill-logo" src={getAssetURL(item.logo)} alt={item.name} />
					</div>
					<span class="skill-name">{item.name}</span>
				</div>
			{/each}
		</div>

		<button
			class="nav-button right-button row-center font-500 p-5px cursor-pointer"
			on:click={toggleRight}
			aria-label="Suivant"
		>
			<UIcon icon="i-carbon-chevron-right" />
		</button>
	</div>
	
	<div class="skills-indicators">
		{#each Array(Math.min(7, items.length)) as _, i}
			<div class="indicator" class:active={index === i}></div>
		{/each}
	</div>
</div>

<style lang="scss">
	.carrousel-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1.5rem;
		border-radius: 12px;
		background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.05) 0%, rgba(var(--accent-rgb), 0.1) 100%);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
		width: 100%;
		max-width: 480px;
		margin: 0 auto;
	}
	
	.skills-title {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
		
		span {
			font-size: 1.1rem;
			font-weight: 500;
			color: var(--accent-text);
		}
		
		.skills-line {
			flex: 1;
			height: 1px;
			background: linear-gradient(90deg, var(--accent-text) 0%, transparent 100%);
		}
	}
	
	.carrousel {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.carrousel-track {
		border-radius: 8px;
		padding: 0.5rem 0;
	}
	
	.skill-item {
		transition: transform 0.3s;
		
		&:hover {
			transform: translateY(-5px);
		}
	}
	
	.skill-logo-wrapper {
		width: 100px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.75rem;
		border-radius: 12px;
		padding: 0.75rem;
		background-color: var(--soft-bg);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		transition: transform 0.3s, box-shadow 0.3s;
		
		&:hover {
			transform: scale(1.05);
			box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
		}
	}
	
	.skill-logo {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	
	.skill-name {
		font-size: 0.9rem;
		font-weight: 500;
		margin-top: 0.5rem;
		color: var(--main-text);
	}
	
	.nav-button {
		width: 36px;
		height: 36px;
		border: none;
		border-radius: 50%;
		background-color: var(--soft-bg);
		color: var(--accent-text);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
		cursor: pointer;
		transition: all 0.2s;
		
		&:hover {
			background-color: var(--accent-text);
			color: var(--soft-bg);
			transform: scale(1.1);
		}
	}
	
	.left-button {
		margin-right: 0.5rem;
	}
	
	.right-button {
		margin-left: 0.5rem;
	}
	
	.skills-indicators {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 0.5rem;
		
		.indicator {
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background-color: var(--border);
			transition: all 0.3s;
			
			&.active {
				background-color: var(--accent-text);
				transform: scale(1.2);
			}
		}
	}
	
	@media (max-width: 768px) {
		.carrousel-container {
			padding: 1rem;
		}
		
		.skill-logo-wrapper {
			width: 80px;
			height: 80px;
		}
	}
</style>
