<script lang='ts'>
    import Title from "../Title.svelte";
    import Button from "../Button.svelte";
	import Overlay from "../Overlay.svelte";
</script>

<div class="main-container">
	<div class="main-container_grid">
		<div class="grid-div1">
			<h1>{`Connect people & spaces`}</h1>
		</div>
		<div class="grid-div grid-div2">
            <Title title={`Trial`}/> 
            <Overlay/>
        </div>
		<div class="grid-div grid-div3">
            <Title title={`Shared workspaces`}/>
            <Overlay/>
        </div>
		<div class="grid-div grid-div4">
            <Title title={`Capacity management`}/>
            <Overlay/>
        </div>
		<div class="grid-div grid-div5">
            <Title title={`Credentials`}/>
            <Overlay/>
        </div>
		<div class="grid-div grid-div6">
            <Title title={`Cloud`}/>
            <Overlay/>
        </div>
		<div class="grid-div grid-div7">
            <Title title={`Connect People & spaces`}/>
            <Overlay/>
        </div>
		<div class="grid-div grid-div8">
            <Title title={`Intrusion detection`}/>
            <Overlay/>
        </div>
		<div class="grid-div9">
            <Button/>
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
        font-weight: 100;
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
		padding: 4rem;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(6, 1fr) 0.5fr 1fr;
		grid-column-gap: 10px;
		grid-row-gap: 20px;
	}

    @media screen and (max-width: 992px) {
        .main-container_grid{
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(4, 1fr) 0.5fr 1fr;
		grid-column-gap: 10px;
		grid-row-gap: 20px;
        }
    }
    @media screen and (max-width: 600px) {
        .main-container_grid{
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(12, 1fr);
		grid-column-gap: 10px;
		grid-row-gap: 20px;

        }
    }

    .grid-div {
        border-radius: 5px;
		background: url('/laptop.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
    } 
	.grid-div1 {
        justify-content: baseline;
		grid-area: 1 / 1 / 2 / 5;
	}
	.grid-div2 {
		grid-area: 1 / 5 / 5 / 10;
	}
	.grid-div3 {
		grid-area: 2 / 1 / 5 / 5;
	}
	.grid-div4 {
		grid-area: 5 / 1 / 7 / 4;
	}
	.grid-div5 {
		grid-area: 5 / 4 / 7 / 6;
	}
	.grid-div6 {
		grid-area: 5 / 6 / 9 / 10;
	}
	.grid-div7 {
		grid-area: 7 / 3 / 9 / 6;
	}
	.grid-div8 {
		grid-area: 5 / 10 / 8 / 13;
	}
	.grid-div9 {
		grid-area: 8 / 10 / 9 / 11;
	}
</style>
