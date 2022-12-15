<script lang="ts">
  import type { Resume } from "$lib/types";
  export let resume: Resume;
</script>

<section>
  <div class="container">
    <div class="left-console">
      <h1>{resume.title}</h1>
      <span>{resume.company}</span>
    </div>
    <div class="right-console">
      <span>{resume.date}</span>
    </div>
  </div>
  <div class="container">
    <p>{resume.description}</p>
  </div>
</section>

<style>
  .container {
    width: 30em;
    padding: 1em;
    backdrop-filter: blur(62px);
    background: rgba(53, 53, 53, 0.47);
    color: white;
    opacity: 0.6;
    display: flex;
  }
  p:hover {
    filter: blur(0px);
  }
  p {
    filter: blur(5px);
  }
  .left-console {
    flex: 1 1 0;
  }
  /* ipad */
  @media screen and (min-width: 450px) and (max-width: 768px) {
    .container {
      width: 50em;
    }
    h1 {
      font-size: 12pt;
      line-height: 1.5em;
    }
    span {
      font-size: 10pt;
    }
    p{
      font-size: 9pt;
    }
  }
</style>
