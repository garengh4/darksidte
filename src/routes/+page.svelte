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
      <br />
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

  <div class="scroll-container">
    <div class="gridscroll">
      <div class="framework-container">
        {#each config.frameworks as framework}
          <FrameworkComponent {framework} />
        {/each}
      </div>
    </div>
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
    grid-template-columns: 10em auto; /* @media */
    grid-template-rows: auto auto;
    grid-template-areas:
      "a b b"
      "c b b"
      "c b b"
      "d d d";
    justify-content: center;
    gap: 1em;
    margin-bottom: 3em;
  }
  #box-hi {
    grid-area: a;
    font-size: 20.5pt;
    margin-top: 2em;
    margin-bottom: -2em;
  }
  #description {
    grid-area: c;
    font-size: small;
    line-height: 1.5em;
    margin-bottom: -2em;
  }
  #fullbody {
    grid-area: b;
  }
  #fullbody > img {
    width: 150px;
  }
  #heading {
    grid-area: d;
    font-size: 11pt;
    margin-left: 1.5em;
    margin-bottom: 2em;
  }

  .framework-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 2em;
    justify-content: center;
  }
  .project-component {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .scroll-container {
    overflow: auto;
    white-space: nowrap;
    padding: 1em 2em;
    background: transparent;
    height: 100%;
    border-radius: 15px;
    margin-bottom: 5em;
  }

  .gridscroll {
    display: inline-block;
  }

  @media screen and (min-width: 768px) {
    .grid-template-columns {
      grid-template-columns: 20em auto; /* @media */
    }
    #box-hi {
      font-size: 28pt;
      margin-bottom: -2em;
    }
    #description {
      font-size: medium;
    }
    #fullbody > img {
      width: 200px;
    }
    #heading{
      font-size:large;
      padding-left: 3em;
    }

  }
</style>
