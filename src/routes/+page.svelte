<script>

	// Imports:
	import { onMount } from 'svelte';

	// Initializations & Exports:
	// :3

	onMount(() => {
		// :3
	});
	
</script>

<!-- #################################################################################################### -->

<!-- SvelteKit Dynamic Header -->
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home Page" />
</svelte:head>

<!-- Page Content -->
<section>
	<div class="container">
    <!-- ================================================================================================== -->
    <div id="leftcolumn">
      <div class="info">
        <h1>Hi. I'm Garen.</h1>
        <h2>I'm a Software Developer.</h2>
        <br />
        <p>
          I dabble in the dark arts of Java Springboot and let it out in a fiery
          display in Angular.
        </p>
        <br />
        <p>
          In my spare time I study other frameworks and become impressed with
          human ingenuity. I guess humans truly are beautiful when applied
          properly lmao.
        </p>
      </div>
    </div>
    <!-- ================================================================================================== -->
    <div id="rightcolumn">
    </div>
  </div>
</section>

<!-- #################################################################################################### -->

<style>

.container {
    display: grid;
    grid-template-columns: 2.5fr 2fr;
    grid-template-areas: "leftcolumn rightcolumn";
    border-radius: 5rem;
    padding: 1rem 10rem;
    background-image: url("/images/ascent.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 120vh;
    min-height: 120vh;
  }

  #leftcolumn {
    font-weight: 800;
    font-size: 20px;
    grid-area: leftcolumn;
    border-radius: 20px;
    line-height: 2.5rem;
    padding: 15rem 5rem 2rem 5rem;
  }

  #rightcolumn {
    grid-area: rightcolumn;
    border-radius: 20px;
    padding: 5rem 12rem 5rem 0rem;
    filter: blur(1px);
    background-image: url("/images/portrait2.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 120vh;
    min-height: 120vh;
  }

  .info > h1 {
    font-size: 4rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #eaeeb3;
    line-height: 4rem;
    letter-spacing: 0.5px;
  }

  .info > h2 {
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #eaeeb3;
    line-height: 4rem;
    letter-spacing: 2px;
  }
  .info > p {
    color: whitesmoke;
    font-size: 1.7rem;
  }
	
</style>