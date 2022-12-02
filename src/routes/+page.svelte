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

    <div class="project-component">
      {#each config.projects as project}
        <ProjectComponent {project} />
      {/each}
    </div>

</section>

<!-- #################################################################################################### -->
<style>
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
  #fullbody {
    grid-area: b;
  }
  #fullbody > img {
    width: 150px;
    margin-top: -8em;
  }
  #heading {
    grid-area: d;
    margin-bottom: 5em;
    font-size: small;
    text-align: center;

  }

    .framework-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap:1em;
    margin-top: -3em;
    justify-content: center;
    margin-bottom: 8em;

  }
  .project-component {
    display: flex;
    gap: 3em;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5em;
  }

  @media screen and (min-width: 768px) {

  }
 
</style>
