<script lang='ts'>  
    export let title: string | undefined
</script>
<div class="card-title">
    <h3 class='card-title_text'>
    {title}
</h3>
</div>
<style>
    .card-title{
        position:absolute;
        margin-left: 1rem;
        margin-top: 0.5rem;
        z-index:999;
        min-width: 50%;
   
    }
    .card-title_text{
        font-size: 1.3rem;
        overflow-wrap: break-word;
        font-weight: normal;
    }
    
    @media screen and (max-width: 1368px) {
        .card-title_text{
        font-size: 1rem;
    }
    .card-title{
        position:absolute;
        margin-left: 1rem;
        margin-top: 0.5rem;
        z-index:999;
        max-width: 200px;
    }
    }
    @media screen and (max-width: 1024px) {
        .card-title_text{
        font-size: 0.7rem;
    }}
    .card-title{
        position:absolute;
        margin-left: 0.5rem;
        margin-top: 0.5rem;
        z-index:999;
        max-width: 200px;
    }
</style>