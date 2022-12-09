<script>
  // Initializations:
  const githubUser = "Ncookiez";
  const githubLink = `https://github.com/${githubUser}`;
  import { config } from "$lib/config";
</script>

<!-- #################################################################################################### -->

<footer>
  <div class="real-footer">
    <h1>I occasionally take on freelance</h1>
    <h1>opportunites.</h1>
    <p>Have an exciting project and you need some help?</p>
    <p>
      Send me a message and <a
        href="https://www.linkedin.com/in/{config.linkedin}">lets chat</a
      >.
    </p>
  </div>
</footer>

<!-- #################################################################################################### -->
<style>
  .real-footer {
    background: #111111;
    padding: 10em;
    text-align: center;
  }
  .real-footer > h1 {
    font-size: 20pt;
  }
  .real-footer > p > a {
    color: #eaeeb3;
  }
  .real-footer > p {
    margin-top: 1em;
  }
  @media screen and (min-width: 450px) and (max-width: 768px) {
    .real-footer > h1 {
      font-size: 45pt;
    }
    .real-footer > p {
      font-size: 20pt;
      letter-spacing: -1px;
    }
  }
</style>
