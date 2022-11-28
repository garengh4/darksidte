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
    /* gap: 50em; */
    /* padding: 1em 1em; */
    /* border: 3px solid whitesmoke; */
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
