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
      <div class="col-md-3 step-1">
        <div class="container" style="display: flex;">
          <div style="width: 80%; ">
            <h3>UBC</h3>
            <p>Programmer / Developer</p>
          </div>
          <div style="flex-grow: 1; ">
            <p>19-21</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 step-2">
        <div class="container" style="display: flex;">
          <div style="width: 80%; ">
            <h3>Canopy Growth Corp.</h3>
            <p>Engineering Intern</p>
          </div>
          <div style="flex-grow: 1; ">
            <p>19-20</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 step-3">
        <div class="container" style="display: flex;">
          <div style="width: 80%; ">
            <h3>Nike</h3>
            <p>Developer Consultant</p>
          </div>
          <div style="flex-grow: 1; ">
            <p>21-22</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 step-4">
        <div class="container" style="display: flex;">
          <div style="width: 80%; ">
            <h3>Visa</h3>
            <p>Developer / Deesignere Consultant</p>
          </div>
          <div style="flex-grow: 1; ">
            <p>22 ~</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* ================================================================ */

  .row {
    display: flex;
    flex-wrap: wrap;
    background: lightslategray;
    border-radius: 50px;
  }
  .col-md-3 {
    width: 100%;
    /* font-size: medium; */
    background: darkolivegreen;
  }
  /* ================================================================ */

  @media (min-width: 768px) {
    .col-md-3 {
      max-width: 25%;
      padding: 1rem;
      background: darkmagenta;
      font-size: medium;
      border-radius: 10px;
    }
    .step-1 {
      margin-top: 150px;
      margin-bottom: -50px;
    }
    .step-2 {
      margin-top: 100px;
      margin-bottom: 0px;
    }
    .step-3 {
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .step-4 {
      margin-top: 0;
      margin-bottom: 100px;
    }
  }

  /* ======================================================================================== */
  /* ================================================================ */

  /* .col-md-3 {
    width: 100%;
    font-size: medium;
  }
  .step-1 {
    background: red;
    font-size: medium;
  } */
</style>
