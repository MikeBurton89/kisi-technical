<script lang="ts">
	let redirect: boolean = false;
</script>

<div class="error-div">
	<div class="error-div_container">
		{#if redirect === false}
			<h1 class="error-text">Sorry, our bad.</h1>
			<h3 class="error-text">
				<a
					on:click={() => (redirect = true)}
					target="__blank"
					href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Here's</a
				> a funny video to cheer you up.
			</h3>
		{:else}
			<h1 class="error-text">Rickrolled!</h1>
			<h3 class="error-text">Sorry again though, we're working on it.</h3>
		{/if}
	</div>
</div>

<style>
	h1 {
		font-size: 1.5rem;
	}

	h3 {
		font-size: 1rem;
	}
	.error-div {
		border-radius: 3px;
		background: #c7c5c3;
		width: 100%;
		height: 100%;
		display: grid;
		justify-items: center;
		align-items: center;
	}
	.error-div_container {
		padding: 2rem;
	}
	.error-text {
		color: #222647;
	}
</style>
