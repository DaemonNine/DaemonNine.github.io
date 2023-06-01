<script>
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";
  import { writable } from "svelte/store";

  let eliza = new ElizaBot();

  const chatStore = writable(getChat());

  function getChat() {
    let chat = JSON.parse(localStorage.getItem("chat"));
    return chat ? chat : [{ user: "eliza", text: eliza.getInitial() }];
  }

  async function write(message) {
    // add the new message to the chat
    chatStore.update((chat) => {
      return [...chat, { user: 'you', text: message }];
    });

    // random delay for writing
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

    // add Eliza's response to the chat
    chatStore.update((chat) => {
      return [...chat, { user: 'eliza', text: eliza.transform(message) }];
    });

    // save the updated chat to localStorage
    localStorage.setItem("chat", JSON.stringify($chatStore));
  }
 
</script>





<div data-theme="dark" class="container">
  <h1>Prata med Eliza</h1>
  <div class="scrollable">
    {#each $chatStore as message}
      <article>
        <span>{message.text}</span>
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
      form.reset();
    }}
  >
    <input type="text" name="text" />
  </form>
</div>