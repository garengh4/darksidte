<script lang="ts">
  import type { Resume } from "$lib/types";
  export let resume: Resume;
</script>

<section>
  <div class="container">
    <div class="left-console">
      <h3>Job Title: {resume.title}</h3>
      <span>Company: {resume.company}</span>
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
  p:hover{
    filter:blur(0px)
  }
  p {
    filter: blur(5px);
  }

  .container {
    width: 30em;
    background: red;
    padding: 0.5em;
    backdrop-filter: blur(62px);
    background: rgba(53, 53, 53, 0.47);
    color: white;
    opacity: 0.6;
    display: flex;
  }
  .left-console {
    flex:1 1 0;
  }
</style>
