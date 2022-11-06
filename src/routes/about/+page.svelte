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
      <div class="info">
        <h1>Hello!</h1>
        <p>My name is Garen and I am a software developer.</p>
        <br />
        <p>
          In my work I am usually assigned tasks like fixing this
          <button>button</button> or initializing api-documentation for the entire
          Java service.
        </p>
        <br />
        <p>
          Most times I get to go into the Java backend to see whats up with the
          database. I think its pretty cool!
        </p>

        <br />
        <p>
          In my free time I learn other frameworks that accomplish the same
          tasks but in a totally unique way.
        </p>
        <br />
        <p>
          Sometimes humans truly amaze me, and I can forget we are horrible
          creatures destroying the planet lmao.
        </p>
      </div>
    </div>
    <div id="midcolumn">
      <img src="../images/portrait.jpg" alt="portrait" />
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
    gap: 5rem;

    display: grid;
    height: 100vh;
    grid-template-columns: 2.5fr 2fr 1.25fr;
    grid-template-rows: 2.75fr 1.25fr;
    grid-template-areas: "leftcolumn midcolumn rightcolumn";

    border-radius: 5rem;
    padding: 1rem;
    background-color: palegoldenrod;
  }

  #leftcolumn {
    font-weight: 800;
    font-size: 20px;
    background: lightblue;
    grid-area: leftcolumn;
    border-radius: 20px;
    line-height: 2.5rem;
    padding: 2rem;
  }

  #midcolumn {
    background: lightpink;
    grid-area: midcolumn;
    border-radius: 20px;
    padding: 10px;
  }

  #rightcolumn {
    background: lightcoral;
    grid-area: rightcolumn;
    border-radius: 20px;
    padding-top: 10px;
  }
  .info {
    font-size: x-large;
    /* padding: 100px 100px 600px; */
  }
</style>
