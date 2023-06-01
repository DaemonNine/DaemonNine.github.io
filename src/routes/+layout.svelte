

<svelte:head>
  

  <!-- Pico.css -->
  <link rel="stylesheet" href="/pico.min.css">

  <!-- Custom template-->
 <link rel="stylesheet" href="/css/custom.css">

  <!-- Minimal theme switcher -->
  <script src="/js/minimal-theme-switcher.js"></script>

  <!-- Modal -->
  <script src="/js/modal.js"></script>
  

      

</svelte:head>

<nav>
  <a href="/">Hem</a>
  <a href="/telltale">Telltale</a>
  <a href="/memory">Memory</a>
  <a href="/clicker">clicker</a>
  <a href="/TodoApp">TodoApp</a>
  <a href="/ChatBot">ChatBot</a>
  <a href="/search">Search</a>
  <a href="/blog">Blog</a>
</nav>

<script>
  import "../app.css";
</script> 

<style>
  nav{
    margin-left: 10%;
    margin-right: 10%;
  }
</style>

<slot></slot>