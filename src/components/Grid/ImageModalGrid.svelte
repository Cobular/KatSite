<script lang="ts">
    import ImageGrid from "./ImageGrid.svelte";
</script>

<div class="content wide">
    <ImageGrid />
</div>


<style>
	.content {
		max-width: 900px;
        margin: auto;
		margin-top: 20px;
		border-width: 3px;
		border-color: var(--theme-dark);
		background-color: white;
	}

    .content.wide {
        max-width: 1150px;
    }

</style>
