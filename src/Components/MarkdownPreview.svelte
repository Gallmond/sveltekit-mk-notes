<script lang="ts">
	export let html = ''
</script>

<div class="markdown-preview">
	<div class="markdown-output">
		{@html html}
	</div>
</div>

<style>
	.markdown-preview {
		flex: 1;

		display: flex;
	}

	.markdown-output {
		flex: 1;

		overflow-y: scroll;
		padding: 1em;
	}
</style>
