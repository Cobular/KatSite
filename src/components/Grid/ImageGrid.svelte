<script lang="ts">
    import ImageGridElement from './ImageGridElement.svelte'

    import type { ImagesResponse } from '../../routes/api/get_images'

    let loadResponse: ImagesResponse = []

    async function load() {
        const url = '/api/get_images'
        console.log("start")
		const res = await fetch(url)

		if (res.ok) {
			loadResponse = await res.json()
		}
    }

    load()
</script>

<div id="grid">
	{#each loadResponse as row}
		{#each row as element}
			<ImageGridElement url={element} alt="altttt" />
		{/each}
	{/each}
</div>

<style>
	#grid {
		display: grid;
		background-color: pink;
		padding: 5px;
		margin: 0;
		width: 100%;
		grid-template-columns: 1fr 1fr 1fr;
	}
</style>
