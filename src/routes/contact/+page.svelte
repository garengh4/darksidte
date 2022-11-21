<script>
  // Imports:
  // import { onMount } from "svelte";
  import { config } from '$lib/config';
  import Project from '$lib/project-component.svelte';

  // Initializations & Exports:


</script>

<!-- SvelteKit Dynamic Header -->
<svelte:head>
  <title>About</title>
  <meta name="description" content="Contact Page" />
</svelte:head>

<section>
  <h3>Project Highlights</h3>
  {#each config.projects as project}
    <Project {project}></Project>
  {/each}
</section>

<style>
  /* ================================================================ */

  
</style>
