<script lang="ts">
	import { lazyLoad } from './lazyLoading'
	import Title from './Title.svelte';
	import Overlay from './Overlay.svelte';
	export let title: string | undefined;
	export let imageUrl: string;
	export let imageAlt: string;
	
</script>

<div class="image-container">
	<Title {title} />
	<img class='fade-in-image' use:lazyLoad={imageUrl} alt={imageAlt} />
	<div class="after">
		<Overlay />
	</div>
</div>

<style>
	img {
		display: block;
		object-fit: cover;
		border-radius: 3px;
		width: 100%;
		height: 100%;
	}
	.image-container {
		border-radius: 3px;
		position: relative;
		width: 100%;
		height: 100%;
	}
	.image-container .after {
		border-radius: 3px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: none;
		color: #fff;
	}
	.image-container:hover .after {
		display: block;
	}
	.fade-in-image { 
		animation: fadeIn 5s;
		
	 }
	@keyframes fadeIn {
       0% { opacity: 0; }
       100% { opacity: 1; }
    }
</style>
