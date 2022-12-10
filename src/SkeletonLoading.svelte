<div class="skeleton-div" />

<style>
	.skeleton-div {
		border-radius: 3px;
		width: 100%;
		height: 100%;
		animation: skeleton-div_loading 0.5s linear infinite alternate;
		background-size: cover;
	}

	@keyframes skeleton-div_loading{
		0% {
    background-color:  	hsl(234, 35%, 21%);
  }
  100% {
    background-color:  	hsl(234, 35%, 30%);
  }

	}
</style>
