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
    <div id="leftcolumn">ALL ABOUT ME + self-portrait</div>
    <div id="rightcolumn">Table of contents, socials</div>
  </div>
</section>

<!-- #################################################################################################### -->
<style>
  .container {
    display: grid;
    height: 100vh;
    grid-template-columns: 2.75fr 1.25fr;
    grid-template-rows: .75fr;
    grid-template-areas: "leftcolumn rightcolumn";
    gap: 1.0rem;
    font-weight: 800;
		font-size: 20px;
    border-radius: 100px;
    padding: 50px;
    background-color: palegoldenrod;
  }

	#leftcolumn {
		background: lightblue;
		grid-area: leftcolumn;
		border-radius: 20px;
		padding-top:10px;
	}

  #rightcolumn {
		background: lightcoral;
		grid-area: rightcolumn;
		border-radius: 20px;
		padding-top:10px;
	}

</style>
