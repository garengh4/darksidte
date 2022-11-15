<script>
  // Imports:
  import { onMount } from "svelte";

  // Initializations & Exports:
  // :3

  onMount(() => {
    // :3
  });
</script>

<!-- SvelteKit Dynamic Header -->
<svelte:head>
  <title>About</title>
  <meta name="description" content="About Page" />
</svelte:head>

<section>
  <div class="container">
    <div class="row">
      <div class="col-md-3 step-1">Step 1</div>
      <div class="col-md-3 step-2">Step 2</div>
      <div class="col-md-3 step-3">Step 3</div>
      <div class="col-md-3">Step 4</div>
    </div>
  </div>
</section>

<style>
  @media (min-width: 768px) {
    .col-md-3 {
      max-width: 25%;
    }
    .step-1 {
      margin-top: 150px;
    }
    .step-2 {
      margin-top: 100px;
    }
    .step-3 {
      margin-top: 50px;
    }
  }

  /* ======================================================================================== */
  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .col-md-3 {
    position: relative;
    width: 100%;
  }


</style>
