<script>
  // Imports:

  import { config } from "$lib/config";
  import FrameworkComponent from "$lib/framework-component.svelte";
  import ProjectComponent from "$lib/project-component.svelte";
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
        I'm also a frontend web-designer and a student of new frameworks. I
        think it's really cool to think of different ways to solve a singular
        problem. :)
      </span>
      <br />
    </div>
    <div id="fullbody">
      <img src="/images/portrait2.png" alt="Full-body-portrait" />
    </div>
  </div>
  <!-- ======================================================================================= -->
  <div class="heading">
    <h1>Frameworks and languages I love and work with...</h1>
  </div>

  <div class="framework-container">
    {#each config.frameworks as framework} 
      <FrameworkComponent {framework} />
    {/each}
  </div>















  <div class="project-component">
    {#each config.projects as project}
      <ProjectComponent {project} />
    {/each}

  </div>
</section>

<!-- #################################################################################################### -->
<style>



  /* ============================================================= */
  .project-component {
    display: flex;
    gap: 3em;
    flex-direction: column;
    align-items: center;
    margin-top: 6em;
  }
  /* ====================================================== */
  .heading {
    /* background-color: darkorange; */
    margin-left: 10em;
    margin-top: 10em;
    font-size: x-large;
  }

  /* ====================================================== */
  .framework-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 4.5em;
    margin: 5em 7em 10em 10em; /* @media */
    /* background-color: darkblue; */
  }
  /* ====================================================== */
  #title {
    grid-area: a;
    font-size: xxx-large;
  }
  #description {
    grid-area: c;
    font-size: xx-large;
    margin-top: -3.5em;
  }
  #fullbody > img {
    width: 350px;
    margin-top: -8em;
  }
  #fullbody {
    grid-area: b;
    /* background-color: darkred; */
  }

  .grid-template-columns {
    display: grid;
    grid-template-columns: 50em auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "a b b"
      "c b b"
      "c b b"
      "d d d";
    justify-content: center;
    margin-top: 15em;
  }
  @media screen and (max-width: 1050px) {
    .framework-component{
      gap: 5em;
    }
    .grid-template-columns {
      margin-top: 10em;
      grid-template-columns: auto auto;
    }
    #title {
      font-size: xx-large;
      margin-left: 3em;
    }
    #description {
      font-size: x-large;
      margin-left: 4em;
      margin-top: -4em;
    }
    #fullbody > img {
      width: 300px;
      margin-top: -7em;
    }
  }
  @media screen and (max-width: 730px) {
    .framework-component{
      gap: 3em;
    }
    .grid-template-columns {
      margin-top: 10em;
      grid-template-columns: auto auto;
    }
    #title {
      font-size: x-large;
      margin-left: 3em;
    }
    #description {
      font-size: large;
      margin-left: 4em;
      margin-top: -5em;
    }
    #fullbody > img {
      width: 250px;
      margin-top: -7em;
    }
  }
  @media screen and (max-width: 585px) {
    .grid-template-columns {
      margin-top: 6em;
      grid-template-columns: auto auto;
    }
    #title {
      font-size: large;
      margin-left: 1.5em;
    }
    #description {
      font-size: medium;
      margin-left: 1.75em;
      margin-top: -4em;
    }
    #fullbody > img {
      width: 200px;
      margin-top: -5em;
    }
  }
  /* ===================================================================== */
</style>
