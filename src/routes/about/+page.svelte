<script>
  // Imports:
  import { onMount } from "svelte";

  // Initializations & Exports:
  // :3

  onMount(() => {
    // :3
  });
</script>

<!-- #################################################################################################### -->

<!-- SvelteKit Dynamic Header -->
<svelte:head>
  <title>About</title>
  <meta name="description" content="About Page" />
</svelte:head>

<!-- Page Content -->
<section>
  <div class="background">
    <div class="container-1">
      <div class="container-1-box">
        <img src="/images/portrait3.jpg" alt=" self-portrait3 " />
      </div>
      <div class="container-1-box">
        <h1>
          I'm Garen, a Web Developer working remotely for Visa on their gateway
          portal in beautiful Toronto, Canada.
        </h1>
        <br />
        <br />
        <p>
          I've spent the last 2+ years working across different areas of Java
          framework; frontend-development, pdf controlled-document design, app
          UI/UX, to my current task migrating from monolithic into
          micro-frontend angular.
        </p>
        <br />
        <br />
        <p>
          These days my time is spent researching, designing, prototyping and
          coding. I also help colleagues get started with the Java or Angular
          framework.
        </p>
        <br />
        <br />
        <p>
          Out of office you'll find me dreaming of rock-climbing, playing
          classical guitar, and teaching cat tricks.
        </p>
      </div>
    </div>
    <!-- =========================================================================================================== -->
    <div class="timeline-container">
      <h1>A Brief History</h1>
      <div class="timeline">
        <!-- START -->
        <div class="swiper-slide">
          <span>June 2018</span>
          <div class="status">
            <span>
              UBC
              <br />
              Research Assistant
            </span>
          </div>
        </div>

        <div class="swiper-slide">
          <span>Sept 2019</span>
          <div class="status">
            <span>
              Canopy Growth Corp.
              <br />
              Engineering Intern
            </span>
          </div>
        </div>

        <div class="swiper-slide">
          <span>June 2021</span>
          <div class="status">
            <span>
              Infosys
              <br />
              Associate
            </span>
          </div>
        </div>

        <div class="swiper-slide">
          <span>Mar 2022</span>
          <div class="status">
            <span>
              Visa
              <br />
              Consultant
            </span>
          </div>
        </div>
        <!-- END -->
      </div>
    </div>
    <!-- =========================================================================================================== -->

    <div class="current">
      <h1>Currently Reading</h1>
      <div class="flex-container">
        <div><img src="/images/book_javaEighth.jpg" alt="JAVA BOOK"></div>
        <div><img src="/images/book_hacks.jpg" alt="HACKS BOOK"></div>
        <div><img src="/images/book_EverydayThings.jpg" alt="DESIGN BOOK"></div>
      </div>
    </div>
  </div>
</section>

<!-- #################################################################################################### -->
<style>
  .flex-container > div > img {
    height: 250px;
  }
  .flex-container > div {
    background-color: brown;
    width: 100px;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
    padding: 50px 20px;
  }
  .flex-container {
    display: flex;
    flex-wrap: nowrap;
    background-color: dodgerblue;
    justify-content: space-around;
    padding: 20px 0px 50px 0;
  }

  .current > h1 {
    background-color: aquamarine;
    padding: 50px;
  }
  /* ===================================================================== */
  .swiper-slide > span {
    width: 100%;
    margin-bottom: 20px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  .timeline {
    margin: 50px 0;
    list-style-type: none;
    display: flex;
    text-align: center;
  }

  .timeline-container {
    padding: 10px 100px;
    color: #eaeeb3;
  }
  .timeline-container > h1 {
    border-bottom: 3px solid #eaeeb3;
    display: inline;
  }

  .status {
    padding: 0px 40px;
    display: flex;
    justify-content: center;
    border-top: 4px solid #3e70ff;
    position: relative;
    transition: all 200ms ease-in;
  }

  .status span {
    font-weight: 600;
    padding: 20px;
    color: whitesmoke;
    font-size: 1rem;
    line-height: 1.7rem;
    font-weight: 800;
    background-color: dimgray;
    border-radius: 20px;
  }

  /* circle on timeline */
  .status span:before {
    content: "";
    width: 25px;
    height: 25px;
    background-color: #e8eeff;
    border-radius: 25px;
    border: 4px solid #3e70ff;
    position: absolute;
    top: -15px;
    left: calc(50% - 12px);
    transition: all 200ms ease-in;
  }

  .swiper-slide:nth-child(2n) {
    width: 25%;
  }
  .swiper-slide:nth-child(3n) {
    width: 25%;
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

  .container-1 div {
    border: 1px #ccc solid;
    padding: 10px;
    color: aliceblue;
  }
  .container-1 {
    display: flex;
    justify-content: space-around;
    padding: 10rem 15rem 1rem 9rem;
    /* background-color: aliceblue; */
  }
  .container-1-box {
    flex-basis: inherit;
    /* background-color: darkcyan; */
  }
  .container-1-box > h1 {
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #eaeeb3;
    line-height: 2rem;
    font-weight: 800;
  }

  .container-1-box > p {
    color: whitesmoke;
    font-size: 1.2rem;
    line-height: 1.7rem;
    font-weight: 800;
  }

  .container-1-box > img {
    padding-top: 4rem;
    width: 600px;
    justify-content: center;
    transform: rotate(270deg);
  }
</style>
