<script lang="ts">
	import { onMount } from 'svelte';

	export let value: string = '';

	let textAreaElement: HTMLTextAreaElement;

	/**
	 * when focused in the text area, tabs should add four spaces instead
	 * of iterating to the next input element
	 */
	onMount(() => {
		textAreaElement.addEventListener('keydown', (e) => {
			if (e.key !== 'Tab') return;

			e.preventDefault();

			const start = textAreaElement.selectionStart;
			const end = textAreaElement.selectionEnd;

			const prefix = textAreaElement.value.substring(0, start);
			const suffix = textAreaElement.value.substring(end);

			textAreaElement.value = `${prefix}    ${suffix}`;

			textAreaElement.selectionStart = textAreaElement.selectionEnd = start + 1;
		});
	});
</script>

<div class="markdown-editor">
	<textarea class="text-input" bind:this={textAreaElement} bind:value placeholder="text here" />
</div>

<style>
	.markdown-editor {
		flex: 1;
		background-color: rgb(197, 197, 197);

		display: flex;
	}

	.text-input {
		flex: 1;

		padding: 1em;
		border: 0px;
		resize: none;
		background-color: transparent;
		font-family: 'Courier New', Courier, monospace;
	}
</style>
