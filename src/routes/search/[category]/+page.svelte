<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  
  <main>
    <h2>{"Showing results for: " + data.params.category}</h2>
    <hr />
    <!-- TODO: Style the results -->

    <div>
      {#each data.response as item}
        <article>
          {#each Object.keys(item) as key}
           
            {#if key == "avatar"}
              <img src={item[key]} alt="">
            {:else}
            <p>{item[key]}</p>

            {/if}
            
          {/each}
        </article>
      {/each}
    </div>
  </main>

  <style>
    img {
      width: 100px;
      height: 100px;
    }
    
  </style>