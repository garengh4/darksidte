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
  <div class="background">
    <!-- =========================================================================================================== -->
    <div class="about-container">
      <div id="about-portrait">
        <img src="/images/portrait3.jpg" alt="sideways-portrait" />
      </div>
      <div id="about-title">
        <h1>
          I'm Garen, a Web-App Developer working remotely for
          <a
            href="https://www.visa.vg/partner-with-us/info-for-partners/info-for-fintechs.html"
            >Visa</a
          >
          on their ShiftLeft portal in beautiful Toronto, Canada.
        </h1>
      </div>
      <div id="about-dscpt">
        <p>
          Since graduating from UBC, I've worked across different concepts and
          architectures of Java in industry. I remember my first jira being
          something like <button>this</button> or <button>that</button>.
        </p>
        <br />
        <p>
          In my free time I study, design and prototype new open-source
          framework and be impressed with humanity.
        </p>
        <br />
        <p>
          When people ask me what I do for fun and I usually say rock-climbing, playing
          the guitar, and teaching my cat tricks.
        </p>
      </div>
    </div>
    <!-- =========================================================================================================== -->
    <div class="heading">
      <h1>A brief history</h1>
    </div>
    <div class="history-container">
      <div class="history-block step-1">
        <div style="display:flex">
          <div style="width:80%">
            <h3>UBC</h3>
            <p>Programmer / Developer</p>
          </div>
          <p>19-21</p>
        </div>
      </div>
      <div class="history-block step-2">
        <div style="display:flex">
          <div style="width:80%">
            <h3>Canopy Growth Corp.</h3>
            <p>Engineering Intern</p>
          </div>
          <p>19-20</p>
        </div>
      </div>
      <div class="history-block step-3">
        <div style="display:flex">
          <div style="width:80%">
            <h3>Nike</h3>
            <p>Developer Consultant</p>
          </div>
          <p>21-22</p>
        </div>
      </div>
      <div class="history-block step-4">
        <div style="display:flex">
          <div style="width:85%">
            <h3>Visa</h3>
            <p>Designer / Developer Consultant</p>
          </div>
          <p>22 ~</p>
        </div>
      </div>
    </div>

    <!-- =========================================================================================================== -->
    <div class="heading">
      <h1>Currently reading</h1>
    </div>
    <div class="currently-reading">
      <div class="box">
        <img src="/images/book_EverydayThings.jpg" alt="DESIGN BOOK" />
        <h3>Design of Everyday Things</h3>
        <p>Don Norman</p>
      </div>
      <div class="box">
        <img src="/images/book_javaEighth.jpg" alt="JAVA BOOK" />
        <h3>A Beginner's Guide</h3>
        <p>Herbert Schildt</p>
      </div>
      <div class="box">
        <img src="/images/book_hacks.jpg" alt="HACKS BOOK" />
        <h3>Art of Exploitation</h3>
        <p>Jon Erickson</p>
      </div>
    </div>
  </div>
</section>

<style>
  @media (min-width: 768px) {
    .history-block {
      background-color: #222222;
      padding: 1.5em;
      font-size: medium;
      border-radius: 10px;
      width: 21em;/* add @media */
    }
    .step-1 {
      margin-bottom: 0em;
      margin-top: 12em;
    }
    .step-2 {
      margin-bottom: 4em;
      margin-top: 8em;
    }
    .step-3 {
      margin-bottom: 8em;
      margin-top: 4em;
    }
    .step-4 {
      margin-bottom: 12em;
      margin-top: 0em;
    }
  }

  .history-container {
    /* background-color: red; */
    display: flex;
    flex-wrap: wrap;
    border-radius: 15px;
    gap: 0.2em;
    margin-top: -10em;
    justify-content: center;
    padding-top: 5em;
    padding-bottom: 20em;
  }

  /* ===========================FLEX====================================== */
  .currently-reading {
    display: flex;
    justify-content: space-between;
    margin: -7em 8em;/* add @media */
    padding-bottom: 25em;
  }
  .box > h3 {
    margin-top: 1em;
  }
  .box {
    margin-top: auto;
  }

  .box > img {
    width: 250px;
    filter: grayscale(100%) blur(0.8px);
  }
  /* ===================================================================== */
  .heading {
    color: #eaeeb3;
    font-size: x-large;
    text-decoration: underline;
    margin: 8em 9em; /* add @media */
  }
  /* ===========================GRID====================================== */


  #about-portrait > img {
    width: 450px;
    border-radius: 20px;
  }
  #about-portrait {
    grid-area: b;
  }
  #about-dscpt {
    grid-area: c;
    line-height: 1.5em;
  }
  #about-title > h1 {
    font-size: xx-large;
    font-weight: bold;
    line-height: 1.5em;
  }
  #about-title > h1 > a:hover {
    text-underline-offset: 0.2em;
  }
  #about-title > h1 > a {
    color: #eaeeb3;
  }
  #about-title {
    color: #eaeeb3;
    grid-area: a;
  }

  .about-container {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 0.5fr auto;
    grid-template-areas:
      "b a a"
      "b c c"
      "b c c";
    gap: 2em;
    margin: 10em; 
  }
  /* ===================================================================== */
  .background {
    background: url("/images/valorant_breeze1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* max-height: 120vh;
    min-height: 120vh; */
  }

  @media screen and (min-width: 980px) {
    .about-container{
      padding: 2em 8em 4em 6em; 
    }
    .heading {
      margin: 8em 13em; /* add @media */
    }
    .history-block{
      width: 25em;/* add @media */
    }
    .currently-reading{
      margin: -5em 15em;/* add @media */
    }
  }
</style>
