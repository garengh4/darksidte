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
      <div class="data">
        <h3>{project.project}</h3>
        <p>{project.description}</p>
      </div>

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
    width: 20em;
    padding-bottom: 10em;
  }
  .display > img {
    width: 20em;
  }
  .console > .data > h3 {
    font-size: 15.5pt;
    margin-bottom: 0.5em;
    font-weight: bold;
  }
  .console > .data > p {
    line-height: 1.5em;
    font-size: 11pt;
    margin-bottom: 2em;
  }
  .console > .links {
    text-align: center;
  }

  .console > .links > a {
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
  .console > .links > a:hover {
    background-color: darkred;
    color: bisque;
    opacity: 1;
  }

  .console {
    background: rgba(53, 53, 53, 0.47);
    backdrop-filter: blur(62px);
    color: white;
    padding: 1.5em;
  }

  @media screen and (min-width: 450px) and (max-width: 768px) {
    .container {
      width: 30em;
    }
    .display > img {
      width: 30em;
    }
    .console > .data > p {
      font-size:  11pt;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1680px) {
    .container {
      width: 40em;
    }
    .display > img {
      width: 40em;
    }
    .console > .data > h3 {
      font-size: 28pt;
    }
    .console > .data > p {
      font-size:  16pt;
    }
    .console > .links > a {
      font-size: 20pt;
    }
  }
  @media screen and (min-width: 1681px) {
    .container {
      width: 60em;
    }
    .display > img {
      width: 60em;
    }
    .console > .data > h3 {
      font-size: 44pt;
    }
    .console > .data > p {
      font-size:  24pt;
    }
    .console > .links > a {
      font-size: 32pt;
    }
  }
</style>
