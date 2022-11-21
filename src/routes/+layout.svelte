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
    background:#0b0b14;
       /* max-height: 120vh;
    min-height: 120vh; */
	}

</style>