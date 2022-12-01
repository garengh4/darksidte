<script>
  // Imports:

  import { config } from "$lib/config";
  import FrameworkComponent from "$lib/framework-component.svelte";
  import ProjectComponent from "$lib/project-component.svelte";
  // Initializations & Exports:
  // :3
</script>

`<!-- #################################################################################################### -->

<!-- SvelteKit Dynamic Header -->
<svelte:head>
  <title>Home</title>
  <meta name="description" content="Home Page" />
</svelte:head>

<!-- Page Content -->
<section>
  <div class="grid-template-columns">
    <!-- ================================================================================================== -->
    <div id="box-hi">
      <span>Hi. I'm Garen.</span>
      <span>A Developer.</span>
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
    <h2>Frameworks I love and work with...</h2>
  </div>

  <div class="framework-container">
    {#each config.frameworks as framework}
      <FrameworkComponent {framework} />
    {/each}
  </div>

  <div id="heading">
    <h2>My current projects!</h2>
  </div>

  <div class="test">
    <div class="project-component">
      {#each config.projects as project}
        <ProjectComponent {project} />
      {/each}
    </div>
  </div>

</section>

<!-- #################################################################################################### -->
<style>
  /* ============================================================= */
  .test {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .project-component {
    display: flex;
    gap: 3em;
    flex-direction: column;
    align-items: center;
    /* margin-top: 3em; */
    margin-bottom: 5em;
  }
  /* ====================================================== */
  #heading {
    grid-area: d;
    margin-bottom: 5em;
    font-size: small;
    text-align: center;

  }

  /* =====================//TODO: small @media bug needs fixing======================== */
  .framework-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap:1em;
    margin-top: -3em;
    justify-content: center;
    margin-bottom: 8em;

  }
  /* ====================================================== */

  #box-hi{
    grid-area: a;
    font-size: 20.5pt;
    margin-top: -3em;
  }

  #description {
    grid-area: c;
    font-size: small;
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
    grid-template-columns: 10em auto;     /* @media */
    grid-template-rows: auto auto;
    grid-template-areas:
      "a b b"
      "c b b"
      "c b b"
      "d d d";
    justify-content: center;
    margin-top: 10em;
    margin-bottom: 5em;
    gap: 1em;
  }

  /* //TODO: SOMETHING BROKE HERE BETWEEN LAPTOP AND TABLET */
  /* @media screen and (min-width: 760px) {
    .grid-template-columns {
      grid-template-columns: 100em auto;
    }
    #title {
      font-size: xx-large;
      margin-top: -1em;
    }
    #description {
      font-size: medium;
      margin-top: -2em;
    }
    #fullbody > img {
      width: 200px;
      margin-top: -5em;
    }
    #heading {
      font-size: large;
      margin-bottom: 3em;
    }

    .project-component {
      align-items: center;
      justify-content: center;
      width: 20em;
    }
    .framework-container {
      gap: 2em;
    } 
  }*/
  /* ===================================================================== */
</style>
