<script>
	let count = 0;
	let bakerCount = 0;
	let factoryCount = 0;
    function handleClick() {
		count += 1;
	}

    
    function bakerHandler(){
        if (count >=5){
            bakerCount += 1;
            count-=5;
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


<head>
    <title>Clicker!</title>
</head>



<main>
    
    <p>Get free cookies!</p>
        
        
    <br>
        <button type="button" on:click={()=>handleClick()}>
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





