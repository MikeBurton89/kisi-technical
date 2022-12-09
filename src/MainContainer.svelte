<script lang="ts">
	import Button from './Button.svelte';
	import SkeletonLoading from './SkeletonLoading.svelte';
	import { onMount } from 'svelte';
	import ImageContainer from './ImageContainer.svelte';

	type Image = { urls: ImageUrls };
	type ImageUrls = {
		full: string;
		alt_description: string;
	};
	const titles: string[] = [
        `Seamless access`,
		'Shared workspaces',
		'Capacity management',
		`Credentials`,
		'Connect people & spaces',
		`Cloud`,
		`Intrusion detection`
	];

	const url: string = `https://api.unsplash.com/photos/random?query=technology&count=7&client_id=${
		import.meta.env.VITE_UNSPLASH_ACCESS_KEY
	}`;
	let images: Image[] = [];
	onMount(async () => {
		const response = await fetch(url);
		images = await response.json();
	});
</script>

<div class="main-container">
	<div class="main-container_grid">
		<div class="grid-div_title">
			<h1 class='main-title'>
				{`Connect people & spaces`}
			</h1>
		</div>
		{#each images as image, index}
			<div class={`grid-div_image${index}`}>
				<ImageContainer
					imageUrl={image.urls.full}
					imageAlt={image.urls.alt_description}
					title={titles.find((el, title_index)=> index === title_index)}
				/>
			</div>
		{:else}
			<div class={`grid-div_image0`}>
				<SkeletonLoading />
			</div>
			<div class={`grid-div_image1`}>
				<SkeletonLoading />
			</div>
			<div class={`grid-div_image2`}>
				<SkeletonLoading />
			</div>
			<div class={`grid-div_image3`}>
				<SkeletonLoading />
			</div>
			<div class={`grid-div_image4`}>
				<SkeletonLoading />
			</div>
			<div class={`grid-div_image5`}>
				<SkeletonLoading />
			</div>
			<div class={`grid-div_image6`}>
				<SkeletonLoading />
			</div>
		{/each}
		<div class="grid-div_button">
			<Button />
		</div>
	</div>
</div>

<style>
	.main-container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		font-family: Arial, Helvetica, sans-serif;
		background-color: #191919;
		height: 95vh;
		width: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.main-container_grid {
		display: grid;
		height: 90%;
		width: 100%;
		padding: 6rem;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(6, 1fr) 0.5fr 1fr;
		grid-column-gap: 10px;
		grid-row-gap: 20px;
	}

	
    .main-container_grid {
		display: grid;
		height: 90%;
		width: 100%;
		padding: 6rem;
		grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(6, 1fr) 0.5fr 1fr;
		grid-column-gap: 10px;
		grid-row-gap: 20px;
	}
    .grid-div_title {
        justify-content: baseline;
		grid-area: 1 / 1 / 2 / 5;
	}
	.grid-div_image0 {
		grid-area: 1 / 5 / 5 / 10;
	}
	.grid-div_image1 {
		grid-area: 2 / 1 / 5 / 5;
	}
	.grid-div_image2 {
		grid-area: 5 / 1 / 7 / 4;
	}
	.grid-div_image3 {
		grid-area: 5 / 4 / 7 / 6;
	}
	.grid-div_image4 {
		grid-area: 5 / 6 / 9 / 10;
	}
	.grid-div_image5 {
		grid-area: 7 / 3 / 9 / 6;
	}
	.grid-div_image6 {
		grid-area: 5 / 10 / 8 / 13;
	}
	.grid-div_button {
		grid-area: 8 / 10 / 9 / 11;
	}
		
	
	@media screen and (max-width:500px) {
        .main-title{
            font-size: 1.5rem;
        }
        .main-container_grid {
		display: grid;
		height: 100%;
		width: 100%;
		padding: 0;
		grid-template-columns: repeat(4, 25%);
        grid-template-row: repeat(10, 2fr);
		grid-column-gap: 2px;
		grid-row-gap: 5px;
	}

	h1 {
		font-size: 2rem;
	}

	.grid-div_title {
        position:relative;
		grid-area: 1 / 1 / 2 / 3;
	}
	.grid-div_image0 {
		grid-area: 1 / 3 / 3/ 5;
	}
	.grid-div_image1 {
		grid-area: 2 / 1 / 2 / 3;
	}
	.grid-div_image2 {
		grid-area: 3 / 1 / 5 / 3;
	}
	.grid-div_image3 {
		grid-area: 3 / 3 / 4 / 5;
	}
	.grid-div_image4 {
		grid-area: 5 / 1 / 6 / 3;
	}
	.grid-div_image5 {
		grid-area: 4 / 3 / 6 / 5;
	}
	.grid-div_image6 {
		grid-area:  7/ 1 / 6 / 3;
	}
	.grid-div_button {
		grid-area: 6 / 3 / 7 / 11;
	}}
</style>
