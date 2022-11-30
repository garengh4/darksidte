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
  <div id="heading">
    <h2>Frameworks I love...</h2>
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
    margin-top: 3em;
    margin-bottom:5em;
  }
  /* ====================================================== */
  #heading {
    grid-area: d;
    margin-top: 5em;
  }

  /* ====================================================== */
  .framework-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 3em;
    margin-top: 1em;
  }
  /* ====================================================== */
  #title {
    grid-area: a;
    margin-top: -5em;
  }

  #description {
    grid-area: c;
    font-size: small;
    margin-top: -4em;
    line-height: 1.5em;
  }
  #fullbody > img {
    width: 150px;
    margin-top: -8em;
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
      "c b b"
      "d d d";
    justify-content: center;
    margin-top: 10em;
  }
  
  /* ===================================================================== */
</style>
