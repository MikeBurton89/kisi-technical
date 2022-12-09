<script>
	import ArrowButton from './ArrowButton.svelte';
</script>

<div class="overlay">
	<div class="overlay-container">
		<p class="overlay-container_caption">
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			
		</p>
	</div>
	<div class="overlay-button">
		<ArrowButton />
	</div>
</div>

<style>
	.overlay {
		position: relative;
		opacity: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.overlay:hover, .overlay:active, .overlay:focus {
		opacity: 1;
		-moz-transition: all 0.4s ease-out;
		-o-transition: all 0.4s ease-out;
		-webkit-transition: all 0.4s ease-out;
		-ms-transition: all 0.4s ease-out;
		transition: all 0.4s ease-out;
		border-radius: 3px;
		background-color: #4a52ff;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.overlay:not(:hover) {
		opacity: 0;
		-moz-transition: all 0.4s ease-out;
		-o-transition: all 0.4s ease-out;
		-webkit-transition: all 0.4s ease-out;
		-ms-transition: all 0.4s ease-out;
		transition: all 0.4s ease-out;
	}
	.overlay-container {
		min-width: 250px;
		margin-top: 3rem;
	}
	.overlay-container_caption {
		position: static;
		top: 3em;
		padding: 0 1rem 0 1rem;
		overflow-wrap: break-word;
        font-size: 1rem;
        width: 15rem;
        
	}

    @media screen and (max-width: 500px) {
        .overlay-container_caption {
		position: static;
		top: 0.2em;
		padding: 0 0.5em 0 0.5em;
		overflow-wrap: break-word;
        font-size: 0.7rem;
        width: 10rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
	}

        .overlay-container {
		width: 20%;
		margin-top: 3rem;
	}
    
    }
	.overlay-button {
		color: #ffffff;
		height: 1rem;
		width: 1rem;
		margin: auto;
		position: absolute;
		bottom: 2rem;
		right: 2rem;
	}
</style>
