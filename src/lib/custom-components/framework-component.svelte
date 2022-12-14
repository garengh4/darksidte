<script lang="ts">
  import type { Framework } from "$lib/types";
  export let framework: Framework;
</script>

<section id="container">
  <div class="logo">
    <img src={framework.frameworkLogo} alt={framework.project} />
    <p>{framework.frameworkTitle}</p>
  </div>
</section>

<style>
  #container {
    display: flex;
    align-items: flex-end;

  }
  .logo {
    text-align: center;
    line-height: 1.5em;
  }
  .logo > p {
    font-size: 6pt;
  }
  .logo > img {
    width:3em;
  }

  @media screen and (min-width: 450px) and (max-width: 768px) {
    .logo > img {
      width:6em;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1680px) {
    .logo > p {
      font-size:18pt;
    }
    .logo > img {
      width:10em;
    }
  }
  @media screen and (min-width: 1681px) {
    .logo > p {
      font-size:18pt;
    }
    .logo > img {
      width:11.5em;
    }
  }

</style>
