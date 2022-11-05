<script>
  // Imports:
  import { onMount } from "svelte";

  // Initializations & Exports:
  // :3

  onMount(() => {
    // :3
  });
</script>

<!-- #################################################################################################### -->

<!-- SvelteKit Dynamic Header -->
<svelte:head>
  <title>About</title>
  <meta name="description" content="About Page" />
</svelte:head>

<!-- Page Content -->
<section>
  <div class="container">
    <div id="leftcolumn">
      <h1>Hello</h1>
      <p>I am a software developer in the Java-Springboot-Angular framework.</p>
      <p>I look at why this clicky <button>button</button> is not downloading.</p>
      <p>If it doesn't make any changes to your information, I can fix it in a day probably.</p>
      <p>Otherwise I am going to have to go into the smudgy ball we call springboot and trace the APIs.</p>
         

      
      <p>
        One time I had to initialize api documentation on the project by the end of the sprint and
      </p>
      <br />

    </div>
    <div id="rightcolumn">Table of contents, socials</div>
  </div>
</section>

<!-- #################################################################################################### -->
<style>
  .container {
    display: grid;
    height: 100vh;
    grid-template-columns: 2.5fr 1.25fr;
    grid-template-rows: 0.75fr 0.25fr;
    grid-template-areas: 
    "rightcolumn leftcolumn"
    "bottomcolumn bottomcolumn";
    gap: 10rem;
    font-weight: 800;
    font-size: 20px;
    border-radius: 5rem;
    padding: 5rem 10rem 5rem 5rem;
    background-color: palegoldenrod;
  }

  #leftcolumn {
    background: lightblue;
    grid-area: leftcolumn;
    border-radius: 20px;
    padding-top: 10px;
  }

  #rightcolumn {
    background: lightcoral;
    grid-area: rightcolumn;
    border-radius: 20px;
    padding-top: 10px;
  }
  #rightcolumn {
    background: lightslategray;
    grid-area: bottomcolumn;
    border-radius: 20px;
    padding-top: 10px;
  }
</style>
