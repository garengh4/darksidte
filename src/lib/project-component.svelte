<script lang="ts">
  import type { Project } from "$lib/types";
  export let project: Project;
</script>

<section>
  <div class="container">
    <div class="display">
      {#if project.background}
        <img src={project.background} alt={project.project} />
      {:else}
        <img
          src="/images/default-background-1.jpg"
          alt="DEFAULT BACKGROUND 1"
        />
      {/if}
    </div>
    <div class="console">
      <h3>{project.project}</h3>
      <span>{project.description}</span>
      
    </div>
    <div class="links">
      <a href={project.repo}>Source code</a>
      {#if project.link}
        <a href={project.link}>Live Project</a>
      {/if}
    </div>

  </div>
</section>

<style>
  .links {
    text-align: center;
  }
  a {
    /* background-color: #4caf50; /* Green */
    color: white;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    transition-duration: 0.4s;
    opacity: 0.6;
    background-color: #555;
  }
  a:hover {
    background-color: darkred;
    color: bisque;
    opacity: 1
  }
  .container {
    width: 20em;
  }

  .console {
    background: rgba(53, 53, 53, 0.47);
    backdrop-filter: blur(62px);
    color: white;
    padding: 1.5em;
  }
  img {
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
  }
</style>
