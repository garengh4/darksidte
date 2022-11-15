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
        <br />
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
  /* ===========================GRID====================================== */


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
    margin-left: 10%;
    margin-top: 8%;
    margin-bottom: 3%;
    font-size: xx-large;
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
