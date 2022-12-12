<script lang='ts'>
	import { hidden } from './store';

	function handleHide(event:MouseEvent) {
		$hidden = !$hidden
	}
</script>

<button on:click={handleHide} class="button"> Button </button>

<style>
	.button {
		background-color: #4a52ff;
		border-radius: 2.8rem;
		display: inline-block;
		cursor: pointer;
		color: #ffffff;
		font-family: Arial;
		font-size: 1rem;
		padding: 0.5rem 1.5rem;
		text-decoration: none;
		border: 0;
	}
	.button:hover {
		background-color: #222647;
	}
	.button:active {
		position: relative;
		top: 1px;
	}
</style>
