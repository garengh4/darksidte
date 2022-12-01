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
    </div>
  </div>

  <!-- <div class="container">
    {#if project.background}
      <div
        class="display"
        style="background-image: url('{project.background}');"
      >
        {#if project.logo}
          <img class="logo" src={project.logo} alt={project.project} />
        {:else}
          <img
            class="nologo"
            src="/images/default-logo-1.svg"
            alt="HELLO WORLD"
          />
        {/if}
      </div>
    {:else}
      <div
        class="display"
        style="background-image: url('/images/default-background-2.jpg');"
      />
    {/if}

    <div class="info">
      <h3>{project.project}</h3>
      <span>{project.description}</span>
    </div>
  </div> -->

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
    /* background-color: blue; */
    width: 20em;
  }
  .display {
    /* background-position:50% 50%; */
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
  .nologo {
    width: 10em; /* @media */
    filter: blur(5px);
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20em; /* @media */
    padding: 2em;
    /* background-color: red; */
  }

  /* .container > .project {
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    background-color: blue;
  } */
  .info {
    background: rgba(53, 53, 53, 0.47);
    backdrop-filter: blur(62px);
    color: white;
    padding: 1.5em;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 20em; /* @media */
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

  /* @media screen and (min-width: 750px) {
    .container > .project > img {
      width: 20em;
    }
    .container > .project {
      width: 40em;
    }
  } */
</style>
