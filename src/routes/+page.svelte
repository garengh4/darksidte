<script>
  import { config } from "$lib/config";
  import FrameworkComponent from "$lib/custom-components/framework-component.svelte";
  import ProjectComponent from "$lib/custom-components/project-component.svelte";
  import ResumeComponent from "$lib/custom-components/resume-component.svelte";
</script>

<!-- Dynamic Header -->
<svelte:head>
  <title>Garen's portfolio</title>
  <meta name="description" content="Garen's Portfolio" />
</svelte:head>

<!-- Page Content -->
<section>
  <div class="content">
    <div class="leftconsole">
      <img src="/images/portrait4.jpg" alt="portrait" />
    </div>
    <div class="rightconsole">
      <h1>Hi, I'm Garen.</h1>
      <h3>Welcome to my portfolio app.</h3>
      <hr />
      <p>
        I'm a java-angular developer whom has taken an interest in frameworks
        and cybersecurity.
        <br /><br />
        As you scroll down you'll get to see the technologies I work with, my past
        experiences, and the projects I'm currently working. I hope you enjoy them!
      </p>
    </div>
  </div>

  <h2>My Past experiences</h2>
  <div class="resume-component">
    {#each config.resume as resume}
      <ResumeComponent {resume} />
    {/each}
  </div>

  <h2>Frameworks & technologies I work with...</h2>
  <div class="scroll-container">
    <div class="gridscroll">
      <div class="framework-container">
        {#each config.frameworks as framework}
          <FrameworkComponent {framework} />
        {/each}
      </div>
    </div>
  </div>

  <div class="project-component">
    {#each config.projects as project}
      <ProjectComponent {project} />
    {/each}
  </div>
</section>

<!-- #################################################################################################### -->
<style>
  /* iphone 12 pro */
  .content {
    display: grid;
    grid-template-areas: "left left right right right";
    gap: 1em;
    padding: 3em;
    margin-top: 3em;
  }
  .rightconsole {
    grid-area: right;
  }
  .leftconsole {
    grid-area: left;
  }
  img {
    width: 12em;
    border-radius: 4px;
    filter: blur(0.25px);
  }
  hr {
    height: 1px;
    border-width: 0;
    color: gray;
    background-color: gray;
    margin-bottom: 0.5em;
  }
  h1 {
    font-size: 17pt;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
  }
  h3 {
    font-size: 10pt;
  }
  h2 {
    text-decoration: underline;
    margin: 1em;
  }
  /* ================================================================= */
  .resume-component {
    display: flex;
    gap: 3em;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10em;
  }
  /* ================================================================= */
  .framework-container {
    display: flex;
    gap: 3em;
    /* overflow-x: auto; */
    justify-content: center;
    margin-left: 20em;
  }
  .scroll-container {
    overflow: auto;
    margin-bottom: 10em;
  }
  /* ================================================================= */
  .project-component {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* ================================================================= */
  /* ipad */
  @media screen and (min-width: 450px) and (max-width: 768px) {
    .content {
      padding: 10em;
    }
    img {
      width: 20em;
    }
    h1 {
      font-size: 24pt;
    }
    h3 {
      font-size: 16pt;
      line-height: 1em;
    }
    p {
      font-size: 12pt;
      line-height: 1em;
    }
    h2 {
      font-size: 16pt;
      text-align: center;
    }
  }
  /* MacAirBook */
  @media screen and (min-width: 769px) and (max-width: 1680px) {
    .content {
      padding: 25em;
      gap:2em;
    }
    img {
      width: 40em;
      border-radius: 8px;
    }
    h1 {
      font-size: 48pt;
      line-height: 0.5em;
    }
    hr {
      height: 4px;
      border-width: 50;
      margin-bottom: 1.5em;

    }
    h3 {
      font-size: 28pt;
      line-height: 1em;
    }
    p {
      font-size: 22pt;
      line-height: 1em;
      font-weight: bold;
    }
    h2 {
      font-size: 32pt;
      text-align:  left;
      margin-left: 3em;
    }
    .resume-component{
      margin-bottom: 25em;
      margin-top: 10em;
    }
    .framework-container{
      gap: 8em;
      margin-left: 10em;

    }
    .scroll-container {
      padding: 2em;
    }
  }
  /* desktop */
  @media screen and (min-width: 1681px) {
    .content {
      padding: 30em;
      gap:4em;
    }
    img {
      width: 40em;
      border-radius: 10px;
    }
    h1 {
      font-size: 48pt;
      line-height: 0.5em;
    }
    hr {
      height: 4px;
      border-width: 50;
      margin-bottom: 1.5em;

    }
    h3 {
      font-size: 28pt;
      line-height: 1em;
    }
    p {
      font-size: 22pt;
      line-height: 1em;
      font-weight: bold;
    }
    h2 {
      font-size: 32pt;
      text-align:  left;
      margin-left: 3em;
    }
    .resume-component{
      margin-bottom: 25em;
      margin-top: 10em;
    }
    .framework-container{
      gap: 8em;
      margin-left: 10em;

    }
    .scroll-container {
      padding: 2em;
    }
  }
</style>
