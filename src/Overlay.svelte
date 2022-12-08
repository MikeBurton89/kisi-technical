<div class='overlay'>
    <p class='overlay_caption'>
        Lorem Ipsum
    </p>
</div>

<style>
    .overlay{
        position:relative;
        opacity: 0;
        width:100%;
        height: 100%;
        overflow:hidden; 
    }
    .overlay:hover {
        opacity: 1;
        -moz-transition: all 0.4s ease-out;  /* FF4+ */
        -o-transition: all 0.4s ease-out;  /* Opera 10.5+ */
        -webkit-transition: all 0.4s ease-out;  /* Saf3.2+, Chrome */
        -ms-transition: all 0.4s ease-out;  /* IE10? */
        transition: all 0.4s ease-out;  
        border-radius: 5px;
        background-color:#4A52FF;
        background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
    }
    .overlay:not(:hover){
        opacity: 0;
        -moz-transition: all 0.4s ease-out;  /* FF4+ */
        -o-transition: all 0.4s ease-out;  /* Opera 10.5+ */
        -webkit-transition: all 0.4s ease-out;  /* Saf3.2+, Chrome */
        -ms-transition: all 0.4s ease-out;  /* IE10? */
        transition: all 0.4s ease-out;  

    }
    .overlay_caption {
        margin:auto;
        position: absolute;
        top:3em;
        left:1rem;
    }
</style>