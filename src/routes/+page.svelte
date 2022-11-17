<script>
  // Imports:

  // Initializations & Exports:
  // :3

</script>

<!-- #################################################################################################### -->

<!-- SvelteKit Dynamic Header -->
<svelte:head>
  <title>Home</title>
  <meta name="description" content="Home Page" />
</svelte:head>

<!-- Page Content -->
<section>
  <div class="background">
    <div class="container">
      <!-- ================================================================================================== -->
      <div id="heading">
        <h1>Hi. I'm Garen.</h1>
        <h2>A Developer.</h2>
      </div>
      <div id="intro">
        <p>
          I dabble in the dark arts of Java Springboot and let it out in a fiery
          display of Angular.
        </p>
        <br />
        <p>
          In my spare time I study other frameworks and become impressed with
          human ingenuity. I guess humans truly are beautiful when applied
          properly lmao.
        </p>
      </div>
      <div id="fullbody">
        <img src="/images/portrait2.png" alt="Full-body-portrait" />
      </div>
    </div>
  </div>
</section>

<!-- #################################################################################################### -->
<style>
  #heading {
    grid-area: a;
    margin-top: 30%;
    margin-left: 25%;
    font-size: xx-large;
    font-family: Arial, Helvetica, sans-serif;
    color: #eaeeb3;
    line-height: 3rem;
    letter-spacing: 0.3px;

  }
  #intro {
    grid-area: c;
    margin-left: 25%;
    
  }
  #fullbody > img {
    position: absolute;
    margin: auto;
    top: 10rem;
    left: 0;
    right: 0;
    bottom: 0;
    width: 500px;
  }
  #fullbody {
    grid-area: b;
    filter: blur(0.5px);
    margin-top: 40%;
    margin-right: 20%;
  }
  .container {
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "a b b"
      "c b b"
      "c b b";
    /* margin-left: 100px; */
    gap: 1.5rem;
  }
  /* ===================================================================== */

  .background {
    background: url("/images/valorant_ascent.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 120vh;
    min-height: 120vh;
  }

</style>
