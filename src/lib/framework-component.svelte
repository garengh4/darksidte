<script lang="ts">
  import type { Framework } from "$lib/types";
  export let framework: Framework;
</script>

<section id="container">
  <div class="logo">
    <img src={framework.frameworkLogo} target="__blank" alt={framework.project} />
    <p>{framework.frameworkTitle}</p>
  </div>
</section>

<style>
  #container {
    display: flex;
    align-items: flex-end;
    font-size: xx-small;
  }
  .logo {
    text-align: center;
    line-height: 2em;
  }
  .logo > img {
    width:4em;
  }

  @media screen and (min-width: 750px) {
    .logo > img {
      width:6em;
    }
    
  }

</style>
