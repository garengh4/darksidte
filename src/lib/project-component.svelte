<script lang="ts">
  import type { Project } from "$lib/types";
  export let project: Project;
</script>

<section>
  <div class="container">

    {#if project.background} 
      <div class="project" style="background-image: url('{project.background}');background-position: center center;
      ">
        {#if project.logo}
          <img src={project.logo} alt={project.project} />
        {/if}
      </div>
    {/if}


    <div class="info">
      <h3>{project.project}</h3>
      <span>{project.description}</span>
    </div>
  </div>

  <!-- Project Links -->
  <!-- {#if project.link || project.repo}
    <div class="links">
      {#if project.link}
        <a href={project.link} target="__blank">Live Project</a>
      {/if}
      {#if project.repo}
        <a href={project.repo} target="__blank">Source Code</a>
      {/if}
    </div>
  {/if} -->
</section>

<style>

  .container > .project >img {
    width: 150px;
    margin-left: 2em;
  }

  .container > .project {
    height:280px;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }
  
  .info {
    background: rgba(53, 53, 53, 0.47);
    backdrop-filter: blur(62px);
    color:white;
    padding: 2em;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
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
</style>
