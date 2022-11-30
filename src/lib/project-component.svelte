<script lang="ts">
  import type { Project } from "$lib/types";
  export let project: Project;
</script>

<section id="container">
  <div class="info">
    <h3>{project.project}</h3>
    <span>{project.description}</span>
    <!-- <p>{project.pro}</p> -->
  </div>
  <!-- <img src={project.image} alt={project.subtitle} /> -->

  	<!-- Project Links -->
	{#if project.link || project.repo}
  <div class="links">
    {#if project.link}
      <a href="{project.link}" target="__blank">Live Project</a>
    {/if}
    {#if project.repo}
      <a href="{project.repo}" target="__blank">Source Code</a>
    {/if}
  </div>
{/if}
</section>

<style>
  #container {
    position: relative;
    display: flex;
    align-items: center;
    /* gap: 100em;     */
    width: min(55em, 100%);
    padding: 1em 2em;
    border: 3px solid whitesmoke;
    /* font-weight: normal; */
  }
  /* img {
    height: 6em;
    width: 6em;
    filter:drop-shadow(0 0 .5em darkblue);
  } */
  .info {
    /* background: red; */
    flex: 1;
		display: flex;
		flex-direction: column;
		gap: .5em;
  }
  /* .info > p {
    color: whitesmoke;
    font-size: 1em;
  } */
  #container:hover > div.links {
    visibility: visible;
  }
  .links {
    visibility: hidden;
		position: absolute;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2em;
		backdrop-filter: brightness(.8) blur(6px);
  }
  .links > a {
		padding: .4em 1em .5em;
		color: darkgoldenrod;
		text-decoration: none;
		background:whitesmoke;
		border: 3px solid transparent;
		border-top-color:whitesmoke;
		border-bottom-color:whitesmoke;
	}
  .links > a:hover {
		color:darkblue;
	}
</style>
