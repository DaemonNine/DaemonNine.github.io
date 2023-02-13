<script>
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";

  let eliza = new ElizaBot();

  let chat = [{ user: "eliza", text: eliza.getInitial() }];

  async function write(message) {
    // TODO: yeet in the new message
    chat=[...chat,{user: 'you',text: message}]
    
    // random delay for writing
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

    // TODO: write the text
    chat=[...chat,{user: 'eliza',text: eliza.transform(message)}] 
  }
</script>


<svelte:head>
  <link rel="stylesheet" href="/pico.min.css" />
  <style>
    nav {
      margin-left: 10%;
      margin-right: 10%;
    }
  </style>
</svelte:head>

<div class="container">
  <h1>Prata med Eliza</h1>
  <div class="scrollable">
    <!-- TODO: loop over the messages and display them -->
    {#each chat as  task, i}

    <article>
      <span>
        {chat[i].text}
      </span>
    </article>
    {/each}
  </div>
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel(); //don't post anything to server
      const text = data.get("text");
      write(text);

      // TODO: reset the form using form.reset()
    }}
  >
    <input type="text" name="text" />
  </form>
</div>