<script lang="ts">
  import type { Project } from "$lib/types";
  export let project: Project;
</script>

<section>
  <div class="container" style="background-image: url('{project.background}')">
    <div class="image">
      <img src={project.logo} alt={project.project} />
    </div>

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
  .container {
    width: 630px;
    background-color: whitesmoke;
    border-radius: 10px;
  }
  .container > .image {
  }
  .info {
    background: rgba(53, 53, 53, 0.47);
    backdrop-filter: blur(62px);
    font-weight: bold;
    color:white;
    padding: 2em;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

  }
  /* .info > p {
    color: whitesmoke;
    font-size: 1em;
  } */
</style>
