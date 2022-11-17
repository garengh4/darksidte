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
          I've spent the last 2+ years working across different areas of Java
          framework; frontend-development, pdf controlled-document design, app
          UI/UX, to my current task migrating from monolithic into
          micro-frontend angular.
        </p>
        <p>
          These days my time is spent researching, designing, prototyping and
          coding. I also help colleagues get started with the Java or Angular
          framework.
        </p>
        <br />
        <p>
          Out of office you'll find me dreaming of rock-climbing, playing
          classical guitar, and teaching cat tricks.
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
      padding: 1rem;
      font-size: medium;
      border-radius: 10px;
      width: 24.5%;
    }
    .step-1 {
      margin-bottom: 0px;
      margin-top: 150px;
    }
    .step-2 {
      margin-bottom: 50px;
      margin-top: 100px;
    }
    .step-3 {
      margin-bottom: 100px;
      margin-top: 50px;
    }
    .step-4 {
      margin-bottom: 150px;
      margin-top: 0px;
    }
  }

  .history-container {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    border-radius: 15px;
    gap: 0.2rem;
    margin:-3% 10%;
  }

  /* ===========================FLEX====================================== */
  .currently-reading {
    display: flex;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
    padding-bottom: 10%;
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
    margin:8% 10% 3% 10%;
    font-size: x-large;
    text-decoration: underline;
  }
  /* ===========================GRID====================================== */

  #about-portrait > img {
    width: 525px;
    border-radius: 10%;
  }
  #about-portrait {
    grid-area: b;
  }
  #about-dscpt {
    grid-area: c;
  }
  #about-title > h1 {
    font-size: xx-large;
    font-weight: bold;
    line-height: 2.8rem;
    margin-right: 15%;
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
    gap: 2rem;
    margin-left: 12%;
    margin-right: 13%;
    padding-top: 6rem;
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
</style>
