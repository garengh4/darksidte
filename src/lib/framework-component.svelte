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
    font-size: medium;
  }
  .logo {
    text-align: center;
    line-height: 2em;
  }
  .logo > img {
    width: 5.5em;
  }
  @media screen and (max-width:1281px) {
    .logo > img {
      width: 5em;
    }
  }
</style>
