
<script>
    let newTask ="";
    let tasks = [];
    function appendTask(){
        if (newTask === ''){
        alert("You have to type something");
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
    text-decoration: line-through;
}
.removeButton{
    background-color: rgb(251, 146, 146);
}
.button{
    background-color: rgb(132, 255, 132);
    padding: 10px;

}
.concatenateButton{
    margin: 0px;
    width: 40px;
    height: 30px;
    float: right;

}
.input{
    float: left;
    height: 30px;

}
</style>


<main>




    
<h2>Todo's</h2>
<br>
<title>TodoApp</title>

<div style='float: left;'>
    <input class=input bind:value={newTask}>

<button class = concatenateButton on:click={appendTask}>
+
</button>
</div>
<ul>
	{#each tasks as  task, i}
		<li class={task.done?  `done` : undefined}>
			{i + 1}: {task.task}
            <button class='button' on:click={()=>{
                task.done = !task.done;
                tasks = tasks;}}>Finished task ✓</button>
                
                <button class='removeButton' on:click={()=>{
                    if(task.done){
                        tasks.splice(i,1);
                        tasks = tasks;
                    } else{
                        alert("You haven't finished the task!");
                    }}}> Remove
                </button>
                    
                
		</li>
	{/each}
</ul>

</main>


