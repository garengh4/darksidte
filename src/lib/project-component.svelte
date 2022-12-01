<script lang="ts">
  import type { Project } from "$lib/types";
  export let project: Project;
</script>

<section>
  <div class="container">
    {#if project.background}
      <div
        class="project"
        style="background-image: url('{project.background}');background-position: center center;"
      >
        <!-- <img src="'{project.background}" alt="" /> -->
        {#if project.logo}
          <img class="center" src={project.logo} alt={project.project} />
        {:else}
          <img class="default" src="/images/default-logo-1.svg" alt="HELLO WORLD" />
        {/if}
      </div>
    {/if}

    <div class="info">
      <h3>{project.project}</h3>
      <span>{project.description}</span>
    </div>
  </div>

  <!-- Project Links -->
  {#if project.link || project.repo}
    <div class="links">
      {#if project.link}
        <a href={project.link} target="__blank">Live Project</a>
      {/if}
      {#if project.repo}
        <a href={project.repo} target="__blank">Source Code</a>
      {/if}
    </div>
  {/if}
</section>

<style>
   .container > .project>.default{
    display: block;
    width: 20em;/* @media */
  }
  .container > .project> .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20em;/* @media */
  }
  .container > .project > img {
    width: 10em; /* @media */
    margin-left: 2em;
  }
  .container > .project {
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }
  .info {
    background: rgba(53, 53, 53, 0.47);
    backdrop-filter: blur(62px);
    color: white;
    padding: 2em;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 40em; /* @media */
  }
  h3 {
    font-size: x-large;
    margin-bottom: 1em;
    font-weight: bold;
  }
  span {
    line-height: 1.5em;
    /* font-family: Poppins,Helvetica,system-ui; */
  }

  /* @media screen and (min-width: 750px) {
    .container > .project > img {
      width: 20em;
    }
    .container > .project {
      width: 40em;
    }
  } */
</style>
