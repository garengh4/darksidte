<script>
  // Imports:
	import { config } from '$lib/config';
  import ProjectComponent from '$lib/project-component.svelte'
  // Initializations & Exports:

</script>

<!-- SvelteKit Dynamic Header -->
<svelte:head>
  <title>Project</title>
  <meta name="projects" content="Projects Page" />
</svelte:head>

<section>
  <div class="container">
    <h3>Personal projects customized</h3>
    {#each config.projects as project }
      <ProjectComponent {project} />
    {/each}

  </div>

</section>

<style>
  .container{
    /* background-color: darkcyan; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
    margin-top: 5em;
    margin-bottom: 8em;
  }
</style>
