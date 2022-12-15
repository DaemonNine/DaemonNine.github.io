<script>
	var count = 0;
	let bakerCount = 0;
	let factoryCount = 0;
    function handleClick() {
		count += 1;
	}

    
    function bakerHandler(){
        if (count >=5){
            bakerCount += 1;
            count-=5
        }
    }
    function factoryHandler(){
        if (count >= 1000){
            factoryCount +=1;
            count -=1000;
        }
    }
    
    setInterval(function(){
        
    if(bakerCount > 0){
        count += (bakerCount*1);
        }
    }, 1000);
    setInterval(function(){
        
        if(factoryCount > 0){
            count += (factoryCount*100);
            }
        }, 1000);  

</script>

<style>
:global(body) {background-color: lavender;}
.buttton {
    cursor: pointer;
    border: 0px solid #3498db;
    background-color: transparent;
    height: 100px;
    width: 90px;
    margin-left: -95px;
    color: #3498db;
    font-size: 1.5em;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.6);
    border-radius: 50%;
}
</style>
<head>
    <title>Clicker!</title>
</head>

<main>
    <p>Get free cookies!</p>
        <div class="container">
            
            
            
        </div>
        
    <br>
        <button on:click={handleClick}>
    Cookies: {count}
    </button>
    <form action="/action_page.php">
        <label for="fname">Set cookie amount:</label>
        <input type="text" id="fname" name="fname">
    </form>
    <br>
    <br>
    <button on:click={bakerHandler}>
        Purchase Baker
    </button>
    Bakers = {bakerCount}
    <br>
    <br>
    <button on:click={factoryHandler}>
        Purchase Factory
    </button>
    Factories = {factoryCount}
</main>




