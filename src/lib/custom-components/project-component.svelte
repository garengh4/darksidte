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
      <p>{project.description}</p>
      <div class="links">
        <a href={project.repo}>Source code</a>
        {#if project.link}
          <a href={project.link}>Live Project</a>
        {/if}
      </div>
    </div>

  </div>
</section>

<style>
  .container {
    width: 30em;
    margin-bottom: 5em;
  }
  .display > img {
    width: 30em;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }
  .console > h3 {
    font-size: 12pt;
    margin-bottom: 0.5em;
    text-decoration: underline;
  }
  .console > p {
    margin-bottom: 1em;
  }

  .console > .links {
    text-align: center;
  }

  .console > .links > a {
    color: white;
    padding: 10px 30px;
    text-decoration: none;
    display: inline-block;
    border-radius: 4px;
    transition-duration: 0.4s;
    opacity: 0.6;
    background-color: #555;
  }
  .console > .links > a:hover {
    background-color: darkred;
    color: bisque;
    opacity: 1;
  }

  .console {
    background: rgba(53, 53, 53, 0.47);
    backdrop-filter: blur(62px);
    padding: 1.5em;
  }

  @media screen and (min-width: 450px) and (max-width: 768px) {
    .container {
      width: 45em;
    }
    .display > img {
      width: 45em;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1680px) {
    .container {
      width: 70em;
    }
    .display > img {
      width: 70em;
    }

    .console > .links > a {
      font-size: 20pt;
    }
  }
  @media screen and (min-width: 1681px) {
    .container {
      width: 80em;
    }
    .display > img {
      width: 80em;
    }
    .console > .links > a {
      font-size: 32pt;
    }
  }
</style>
