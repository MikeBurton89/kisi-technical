<style>
    .main-container{
        position:absolute; 
        background-color: #191919;
        height: 100%;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .main-container_grid{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    }
    .div1 { grid-area: 1 / 1 / 2 / 5; }
    .div2 { grid-area: 1 / 5 / 5 / 10; }
    .div3 { grid-area: 2 / 1 / 5 / 5; }
    .div4 { grid-area: 5 / 1 / 7 / 4; }
    .div5 { grid-area: 5 / 4 / 7 / 6; }
    .div6 { grid-area: 5 / 6 / 9 / 10; }
    .div7 { grid-area: 7 / 3 / 9 / 6; }
    .div8 { grid-area: 5 / 10 / 7 / 13; }
    .div9 { grid-area: 7 / 10 / 8 / 12; }
</style>

<div class='main-container'>
    <div class='main-container_grid'>
        <div class='div1'>test</div>
        <div class='div2'>test</div>
        <div class='div3'>test</div>
        <div class='div4'>test</div>
        <div class='div5'>test</div>
        <div class='div6'>test</div>
        <div class='div7'>test</div>
        <div class='div8'>test</div>
        <div class='div9'>test</div>
    </div>
</div>
