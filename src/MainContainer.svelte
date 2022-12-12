<script lang="ts">
	import Button from './Button.svelte';
	import SkeletonLoading from './SkeletonLoading.svelte';
	import Error from './Error.svelte';
	import { onMount } from 'svelte';
	/** @type {import('./$types').PageLoad} */
	import ImageContainer from './ImageContainer.svelte';

	const titles: string[] = [
		`Seamless access`,
		'Shared workspaces',
		'Capacity management',
		`Credentials`,
		'Connect people & spaces',
		`Cloud`,
		`Intrusion detection`
	];

	type Image = { urls: ImageUrls };
	type ImageUrls = {
		full: string;
		alt_description: string;
	};

	//fetch function to get random images from unsplash api

	let images: Image[] = [];
	let numberOfImages: number = 7;
	let queryString: string = `technology`;

	const url: string = `${
		import.meta.env.VITE_UNSPLASH_URL
	}random?query=${queryString}&count=${numberOfImages}&client_id=${
		import.meta.env.VITE_UNSPLASH_ACCESS_KEY
	}`;

	let fetchError: boolean = false;
	onMount(async () => {
		try {
			const response = await fetch(url);
			if (response.status !== 200) {
				throw new Error('Fetching Error');
			}
			return (images = await response.json());
		} catch (error) {
			fetchError = true;
		}
	});
</script>

<div class="main-container">
	<div class="main-container_grid">
		<div class="grid-div_title">
			<h1 class="main-title">
				{`Connect people & spaces`}
			</h1>
		</div>
		{#each images as image, index}
			<div class={`grid-div_image${index}`}>
				<ImageContainer
					imageUrl={image.urls.full}
					imageAlt={image.urls.alt_description}
					title={titles.find((el, title_index) => index === title_index)}
				/>
			</div>
		{:else}
			{#if fetchError === false}
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
			{:else}
				<div class={`grid-div_image0`}>
					<Error />
				</div>
				<div class={`grid-div_image1`}>
					<Error />
				</div>
				<div class={`grid-div_image2`}>
					<Error />
				</div>
				<div class={`grid-div_image3`}>
					<Error />
				</div>
				<div class={`grid-div_image4`}>
					<Error />
				</div>
				<div class={`grid-div_image5`}>
					<Error />
				</div>
				<div class={`grid-div_image6`}>
					<Error />
				</div>
			{/if}
		{/each}
		<div class="grid-div_button">
			<Button />
		</div>
	</div>
</div>

<style>
	.main-container {
		position: absolute;
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
		grid-column-gap: 20px;
		grid-row-gap: 20px;
	}
	.main-title {
		font-size: 2rem;
		padding: 0;
		margin: 0;
	}

	.grid-div_title {
		grid-area: 1 / 1 / 1 / 5;
		display: grid;
		align-items: end;
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

	/* tablet responsive design */
	@media screen and (min-width: 992px) and (max-width: 1368px) {
		.main-container {
		position: absolute;
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
		.main-title {
			font-size: 2rem;
			padding: 0;
			margin: 0;
		}
		.main-container_grid {
			display: grid;
			height: 100%;
			width: 90%;
			padding: 2rem;
			grid-template-columns: repeat(10, 1fr);
			grid-template-row: repeat(10, 10%);
			grid-column-gap: 10px;
			grid-row-gap: 10px;
		}
		.grid-div_title {
			display: grid;
			grid-area: 1 / 1 / 1 / 5;
			justify-items: start;
		}
		.grid-div_image0 {
			grid-area: 1 / 5 / 4 / 10;
		}
		.grid-div_image1 {
			grid-area: 2 / 1 / 4 / 5;
		}
		.grid-div_image2 {
			grid-area: 4 / 1 / 6 / 4;
		}
		.grid-div_image3 {
			grid-area: 4 / 4 / 6 / 7;
		}
		.grid-div_image4 {
			grid-area: 4 / 7 / 6 / 11;
		}
		.grid-div_image5 {
			grid-area: 6 / 1 / 8 / 4;
		}
		.grid-div_image6 {
			grid-area: 6 / 4 / 10 / 9;
		}
		.grid-div_button {
			grid-area: 6/ 9 / 6 / 10;
		}
	}
	/* // smartphones responsive style */
	@media screen and (max-width: 992px) {
		.main-title {
			font-size: 1.5rem;
		}
		.main-container {
		position: absolute;
		display: flex;
		align-items: start;
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
			padding: 0;
			grid-template-columns: repeat(4, 25%);
			grid-template-row: repeat(10, 10%);
			grid-column-gap: 10px;
			grid-row-gap: 10px;
		}

		.grid-div_title {
			grid-area: 1 / 1 / 2 / 5;
			align-content: flex-end;
		}
		.grid-div_image0 {
			grid-area: 2 / 3 / 2/ 5;
		}
		.grid-div_image1 {
			grid-area: 2 / 1 / 4 / 3;
		}
		.grid-div_image2 {
			grid-area: 4 / 1 / 5 / 3;
		}
		.grid-div_image3 {
			grid-area: 3 / 3 / 4 / 5;
		}
		.grid-div_image4 {
			grid-area: 5 / 1 / 7 / 3;
		}
		.grid-div_image5 {
			grid-area: 4 / 3 / 5 / 5;
		}
		.grid-div_image6 {
			grid-area: 5/ 3 / 6 / 5;
		}
		.grid-div_button {
			grid-area: 6 / 3 / 7 / 11;
		}
	}
</style>
