<script lang="ts">
	import SmallInput from './Bootstrap/SmallInput.svelte';
	import Badge from './Bootstrap/Badge.svelte';

	export let tags: Tag[] = [];
	export let onChange: (tags: Tag[]) => void = (tags) => {};

	let newTagInput = '';

	const addTag = (tag: Tag) => {
		tags = [...tags, tag];

		onChange(tags);
	};

	const deleteTag = (tag: Tag) => {
		const index = tags.indexOf(tag);

		if (index === -1) return;

		tags.splice(index, 1);
		tags = tags;

		onChange(tags);
	};
</script>

<div class="utility-item">
	<SmallInput
		label={'add'}
		bind:value={newTagInput}
		on:click={() => {
			if (newTagInput === '') return;
			addTag(newTagInput);
			newTagInput = '';
		}}
	/>
</div>
<div class="utility-item">
	{#each tags as tag, i}
		<Badge
			on:click={() => {
				deleteTag(tag);
			}}>{tag}</Badge
		>
	{/each}
</div>
