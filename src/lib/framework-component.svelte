<script lang="ts">
  import type { Project } from "$lib/types";
  export let project: Project;
</script>

<section id="container">
  <div class="logo">
    <img src={project.frameworkLogo} target="__blank" alt={project.framework} />
    <p>{project.framework}</p>
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
  @media screen and (max-width:1281px) {
    .logo > img {
      width: 5em;
    }
  }
</style>
