<nav>
	<a href="." id="title"><h1>Shushicate</h1></a>
	<a href="." class="link selected">Home</a>
	<a href="contact-info" class="link">Contact Info</a>
</nav>

<slot />

<style>
	:global(*) {
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
		font-weight: 300;
		color: var(--theme-dark);
	}

	:global(body) {
		margin: 0;
		background-image: url('/img/background.jpg');
		background-repeat: no-repeat;
		background-attachment: fixed;
	}

	:global(:root) {
		--background-color: white;
		--theme-light: #9f9f9f;
		--theme-dark: #434343;
	}

	:global(h1) {
		font-weight: 400;
	}

	:global(img) {
  max-width: 100%;
}

	#title {
		margin-right: 10px;
	}

	nav {
		background-color: lightgreen;
		width: 100%;
		display: flex;
		flex-direction: row;
		padding: 10px;
		align-items: center;
		gap: 5%;
	}

	h1 {
		margin-top: 0;
		margin-bottom: 0;
	}

	.selected {
		color: var(--theme-light);
	}
</style>
