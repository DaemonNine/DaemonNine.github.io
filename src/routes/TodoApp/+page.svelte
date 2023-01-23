
<script>
    let newTask ="";
    let tasks = [];
    function appendTask(){
        if (newTask === ''){
        alert("Du måste skriva något");
    } else{
        tasks.push({task:newTask,done: false});
        tasks = tasks;
    }
        
    }
    

</script>

<style> 

ul li:hover {
  background: #ddd;
}

.done{
    background-color: aquamarine ;
}
.button{
    background-color: red;
}
</style>


<main>

<h2>Todo's</h2>
<input bind:value={newTask}>

<button on:click={appendTask}>
+
</button>
<ul>
	{#each tasks as  task, i}
		<li class={task.done?  `done` : undefined}>
			{i + 1}: {task.task}
            <button class='button' on:click={()=>{
                task.done = !task.done;
                tasks = tasks;}}>x</button>
                
		</li>
	{/each}
</ul>

</main>


