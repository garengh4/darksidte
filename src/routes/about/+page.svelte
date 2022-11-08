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
        <img src="/images/portrait3.jpg" alt=" self-portrait3 " />
      </div>
      <div class="container-1-box">
        <h1>
          I'm Garen, a Web Developer working remotely for Visa on their gateway
          portal in beautiful Toronto, Canada.
        </h1>
        <br />
        <br />
        <p>
          I've spent the last 2+ years working across different areas of Java
          framework; frontend-development, pdf controlled-document design, app
          UI/UX, to my current task migrating from monolithic into
          micro-frontend angular.
        </p>
        <br />
        <br />
        <p>
          These days my time is spent researching, designing, prototyping and
          coding. I also help colleagues get started with the Java or Angular
          framework.
        </p>
        <br />
        <br />
        <p>
          Out of office you'll find me dreaming of rock-climbing, playing
          classical guitar, and teaching cat tricks.
        </p>
      </div>
    </div>
    <!-- =========================================================================================================== -->
    <div class="container-2">
      <div class="container-2-box">
        A BRIEF HISTORY
      </div>
    </div>
    <!-- =========================================================================================================== -->
  </div>
</section>

<!-- #################################################################################################### -->
<style>
  
  /* ===================================================================== */
  .background {
    background: url("/images/breeze1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 120vh;
    min-height: 120vh;
  }

  .container-1 div,
  .container-2 div {
    border: 1px #ccc solid;
    padding: 10px;
    color: aliceblue;
  }
  .container-1 {
    display: flex;
    justify-content: space-around;
    padding: 10rem 15rem 1rem 9rem;
    /* background-color: aliceblue; */
  }
  .container-1-box {
    flex-basis: inherit;
    /* background-color: darkcyan; */
  }
  .container-1-box > h1 {
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #eaeeb3;
    line-height: 2rem;
    font-weight: 800;
  }

  .container-1-box > p {
    color: whitesmoke;
    font-size: 1.2rem;
    line-height: 1.7rem;
    font-weight: 800;
  }

  .container-1-box > img {
    padding-top: 4rem;
    width: 600px;
    justify-content: center;
    transform: rotate(270deg);
  }
  .container-2 {
  }

  .container-3 {
    display: flex;
    justify-content: space-around;
    padding: 5rem;
  }
  .container-2-box {
    flex-basis: 100%;
  }
  /* ======================================================================= */
</style>
