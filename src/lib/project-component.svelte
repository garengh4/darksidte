<script lang="ts">
  import type { Project } from "$lib/types";
  export let project: Project;
</script>

<section>
  <div class="container">
    <div class="display">
      {#if project.background}
      <img src="{project.background}" alt="{project.project}">
      {:else}
      <img src="/images/default-background-1.jpg" alt="DEFAULT BACKGROUND 1">
      {/if}
    </div>
    <div class="console">
      <h3>{project.project}</h3>
      <span>{project.description}</span>
      <div class="links">
        <a class="btn" href="{project.repo}">Source code</a>
        {#if project.link}
          <a class="btn" href="{project.link}">Live Project</a>
        {/if}

      </div>

    </div>
  </div>

  
</section>

<style>
  .container {
    width: 20em;
  }
  
  .console {
    background: rgba(53, 53, 53, 0.47);
    backdrop-filter: blur(62px);
    color: white;
    padding: 1.5em;
  }
  img{
    width: 20em;
  }
  
  h3 {
    font-size: 18pt;
    margin-bottom: 1em;
    font-weight: bold;
  }
  span {
    line-height: 1.5em;
    font-size: small;
    /* font-family: Poppins,Helvetica,system-ui; */
  }

  
</style>
