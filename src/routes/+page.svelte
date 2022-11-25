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
  <div class="grid-template-columns">
    <!-- ================================================================================================== -->
    <div id="title">
      <h1>Hi. I'm Garen.</h1>
      <h1>A Developer.</h1>
    </div>
    <div id="description">
      <span>
        I'm also a frontend web-designer and a student of new frameworks because
        I think its really cool to think of different ways to solve a singular
        problem.
      </span>
      <br />
    </div>
    <div id="fullbody">
      <img src="/images/portrait2.png" alt="Full-body-portrait" />
    </div>
  </div>
</section>

<!-- #################################################################################################### -->
<style>
  #title {
    grid-area: a;
    font-size: xxx-large;
  }
  #description {
    grid-area: c;
    font-size: x-large;

  }
  #fullbody > img {
    width: 350px; /* @media */
  }
  #fullbody {
    grid-area: b;
  }
  .grid-template-columns {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "a b b"
      "c b b"
      "c b b";
    gap: 2em;
    justify-content: center;
  }

  @media screen and (max-width: 530px) {
    .grid-template-columns {
      margin-top: 8em;
    }
    #title {
      font-size: large;
      margin-left: 2em;
    }
    #description {
      font-size: large;
      margin-left: 2em;
      margin-top: -4em;
    }
    #fullbody > img {
      width: 200px; /* @media */
      margin-top: -5em;
    }
  }
  /* ===================================================================== */
</style>
