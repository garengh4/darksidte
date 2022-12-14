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
      <img src="/images/portrait4.jpg" alt="portrait">
    </div>
    <div class="rightconsole">
      <h1>Hi, I'm Garen.</h1>
      <h3>Welcome to my portfolio app.</h3>
      <hr>
      <p>
        I'm a java-angular developer whom has taken an interest in frameworks and cybersecurity. 
        <br><br>
        As you scroll down you'll get to see the technologies I work with, my past experiences, and the projects I'm currently working. I hope you enjoy them!
      </p>
    </div>
  </div>

  <!-- <div class="grid-template-columns">
    <div id="box-hi">
      <span>Hi. I'm Garen.</span>
      <br />
      <span>A Developer.</span>
    </div>

    <div id="description">
      <span>
        I'm also a frontend web-designer and a student of new frameworks.
      </span>
      <br><br>
      <span>
        I'd like to say I'm a highly self-motivated fullstack developer figuring
        out the quirks of frontend. Who's to say?
      </span>

      <br />
    </div>
    <div id="fullbody">
      <img src="/images/portrait2.png" alt="Full-body-portrait" />
    </div>
  </div> -->

  <h2>My Past experiences</h2>
  <hr style="width: 40%;">
  <div class="resume-component">
    {#each config.resume as resume}
      <ResumeComponent {resume} />
    {/each}
  </div>

  <h2>Frameworks I love and work with...</h2>
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


  .content {
    display: grid;
    grid-template-areas: "left left right right right";
    gap: 1em;
    padding: 3em;
  }

  .rightconsole {
    grid-area: right;
  }
  .leftconsole {
    grid-area: left;
  }
  img {
    width: 12em;
    border-radius: 2px;
  }
  hr{
    height:1px;
    border-width:0;
    color:gray;
    background-color:gray;
    margin-bottom: 0.5em;
  }
  h1{
    font-size: 17pt;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
  }
  h3{
    font-size: 10pt;

  }
  /* ================================================================= */
  /* ================================================================= */
  .resume-component {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
  }
  /* ================================================================= */
  /* iphone 12 pro */
  .grid-template-columns {
    display: grid;
    grid-template-columns: 16em auto; /* @media */
    grid-template-rows: auto auto;
    grid-template-areas:
      "a b b"
      "c b b"
      "c b b"
      "d d d";
    justify-content: center;
    gap: 1em;
    margin-top: 5em;
    margin-bottom: 10em;
  }
  #box-hi {
    grid-area: a;
    margin-top: 3em;
    margin-bottom: -2.5em;
    font-size: 20pt;
    font-weight: bold;
  }
  #description {
    grid-area: c;
    margin-bottom: -5em;
  }
  #fullbody {
    grid-area: b;
  }
  #fullbody > img {
    width: 150px;
  }
  /* h2 {
    grid-area: d;
    font-size: 15pt;
    margin-left: 0.5em;
  } */
  .framework-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 2em;
    justify-content: center;
  }
  .project-component {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .scroll-container {
    overflow: auto;
    white-space: nowrap;
    padding: 1em 2em;
    background: transparent;
    height: 100%;
    border-radius: 15px;
    margin-bottom: 10em;
  }

  .gridscroll {
    display: inline-block;
  }

  /* ipad */
  @media screen and (min-width: 450px) and (max-width: 768px) {
    .grid-template-columns {
      grid-template-columns: 30em auto;
    }
    #box-hi {
      margin-bottom: -2em;
      font-size: xx-large;
    }
    h2 {
      font-size: x-large;
    }
    #description {
      font-size: medium;
    }
    #fullbody > img {
      width: 200px;
    }
    .framework-container {
      margin-bottom: 2em;
    }
  }
  /* MacAirBook */
  @media screen and (min-width: 769px) and (max-width: 1680px) {
    .grid-template-columns {
      grid-template-columns: 65em auto; /* @media */
    }
    #box-hi {
      font-size: 54pt;
    }
    h2 {
      font-size: 35pt;
      margin-left: 2em;
      margin-bottom: 0.5em;
    }
    #description {
      font-size: 26pt;
    }
    #fullbody > img {
      width: 450px;
    }
    .framework-container {
      gap: 6em;
    }
    .scroll-container {
      margin-bottom: 25em;
    }
  }
  /* desktop */
  @media screen and (min-width: 1681px) {
    .grid-template-columns {
      grid-template-columns: 80em auto; /* @media */
    }
    #box-hi {
      font-size: 54pt;
    }
    h2 {
      font-size: 35pt;
      margin-left: 2em;
      margin-bottom: 0.5em;
    }
    #description {
      font-size: 26pt;
    }
    #fullbody > img {
      width: 450px;
    }
    .framework-container {
      padding-left: 5em;
      gap: 6em;
    }
    .scroll-container {
      margin-bottom: 25em;
    }
  }
</style>
