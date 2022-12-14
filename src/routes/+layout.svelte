<script>

	// Imports:
	import Nav from '$lib/nav-component.svelte';
	import Footer from '$lib/footer-component.svelte';
	import '../app.css';
	
</script>

<!-- #################################################################################################### -->

<!-- Navbar -->
<Nav />

<!-- App Content -->
<main><slot /></main>

<!-- Footer -->
<Footer />

<!-- #################################################################################################### -->

<style>

	main {
		padding: 1em;
    /* background: #121212; */
    background-image: url("/images/valorant_ascent.jpg");
       /* max-height: 120vh;
    min-height: 120vh; */
    
	}

</style>