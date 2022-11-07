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
  <div class="background">
    <div class="container-1">
      <div class="container-1-box">
        <h3>PROFILE PICTURE</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, illo?
        </p>
      </div>
      <div class="container-1-box">
        <h3>Box Five</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          voluptatibus enim a dolores quam esse!
        </p>
      </div>
    </div>
    <!-- =========================================================================================================== -->
    <div class="container-2">
      <div class="container-2-box">
        <h3>A brief History</h3>
      </div>
    </div>
    <!-- =========================================================================================================== -->
    <div class="container-3">
      
    </div>
  </div>
</section>

<!-- #################################################################################################### -->
<style>
  .background {
    background-image: url("/images/breeze1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 120vh;
    min-height: 120vh;
  }
  .container-1 div, .container-2 div {
    border: 1px #ccc solid;
    padding: 10px;
    color: aliceblue;
  }

  .container-1 {
    display: flex;
    justify-content: space-around;
    padding: 5rem;
  }
  .container-1-box {
    flex-basis: 30%;
  }
  .container-2 {
    display: flex;
    justify-content: space-around;
    padding: 5rem;
  }
  .container-2-box {
    flex-basis: 80%;
  }
</style>
