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
      <div id="portrait">
        <img src="../images/portrait.jpg" alt="portrait" />
      </div>
      <div class="info">
        <h1>Hello</h1>
        <p>
          I am a software developer in the Java-Springboot-Angular framework.
        </p>
        <p>
          I look at why this clicky <button>button</button> is not downloading.
        </p>
        <p>
          If it doesn't make any changes to your information, I can fix it in a
          day probably.
        </p>
        <p>
          Otherwise I am going to have to go into the smudgy ball we call
          springboot and trace the APIs.
        </p>
      </div>

      <!-- <p>
        One time I had to initialize api documentation on the project by the end
        of the sprint and
      </p> -->
      <br />
    </div>
    <div id="rightcolumn">Table of contents, socials</div>
  </div>
</section>

<!-- #################################################################################################### -->
<style>
  .container {
    position: relative;
    display: flex;
    align-items: left;
    gap: 10rem;

    display: grid;
    height: 100vh;
    grid-template-columns: 2.5fr 1.25fr;
    grid-template-rows: 2.75fr 1.25fr;
    grid-template-areas: "leftcolumn rightcolumn";
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
  #portrait {
    background: lightslategray;
    border-radius: 20px;
    padding: 10px 10px 10px 10px;
    float: left;
    /* width:1px;
    height: auto; */
  }

  #rightcolumn {
    background: lightcoral;
    grid-area: rightcolumn;
    border-radius: 20px;
    padding-top: 10px;
  }
  .info {
    font-size: x-large;
    padding: 100px 100px 600px;
  }
</style>
