<script>

	// Initializations:
	const links = [
		{ route: '/', name: 'Work' },
		{ route: '/about', name: 'About' },
    { route: '/projects', name: 'Projects' },
		{ route: '/contact', name: 'Contact' }

	];

</script>

<!-- #################################################################################################### -->

<nav>

	<!-- Navigation Links -->
	<ul class="links">
		{#each links as link}
			<li><a href="{link.route}">{link.name}</a></li>
		{/each}
	</ul>

</nav>

<!-- #################################################################################################### -->

<style>

	nav {
		display: flex;
		align-items: center;
		height: 53px;
		width: 100%;
		padding: 0 32px;
		background: whitesmoke;
		border-bottom: 2px solid rgba(34,40,49,0.3);
    font-size: 20px;
	}

	.links {
		display: flex;
	}
	
	.links li {
		margin: 0 2em 0 0;
		list-style: none;
	}

	.links a {
		color: black;
		text-decoration: none;
	}
	
</style>