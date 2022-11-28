<script lang="ts">
  import type { Project } from "$lib/types";
  export let project: Project;
</script>

<section id="container">
  <div class="logo">
    <img src={project.image} target="__blank" alt={project.title} />
    <p>{project.title}</p>
  </div>
</section>

<style>
  #container {
    position: relative;
    display: flex;
    align-items: center;
    font-size: medium;
  }
  .logo {
    text-align: center;
    line-height: 2em;
  }
  .logo > img {
    width: 8em;
  }
</style>
