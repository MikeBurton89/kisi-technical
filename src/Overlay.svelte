<script>
	import ArrowButton from './ArrowButton.svelte';
</script>

<div class="overlay">
	<div class="overlay-container">
		<p class="overlay-container_caption">
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua
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
		background-size: contain;
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
		max-width: 95%;
		margin-top: 4.5rem;
	}
	.overlay-container_caption {
		position: static;
		top: 5em;
		margin: 0 0.7rem 0 0.7rem;
		overflow-wrap: break-word;
        font-size: 1rem;
		font-weight: normal;
        width: 100%;
        
	}

	.overlay-button {
		color: #ffffff;
		height: 1rem;
		width: 1rem;
		margin: auto;
		position: absolute;
		bottom: 0.5rem;
		right: 1rem;
	}

	/* tablet responsive style */
	@media screen and (max-width: 1368px) {
        

        .overlay-container {
		width: 70%;
		margin-top: 3rem;
	}
	.overlay-container_caption {
		position: static;
		top: 1rem;
		padding:0 ;
		overflow-wrap: break-word;
        font-size: 0.7rem;
        max-width: 70%;
       
	}
    
    }
		 /* smartphones responsive style */
    @media screen and (max-width: 1024px) {
        .overlay-container_caption {
		position: static;
		top: 0.2rem;
		padding: 0 0.5rem 0 0.5rem;
		overflow-wrap: break-word;
        font-size: 0.7rem;
        width: 100%
       ;
	}

        .overlay-container {
		width: 100%;
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
