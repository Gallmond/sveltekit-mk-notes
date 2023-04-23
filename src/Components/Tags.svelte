<script lang="ts">
	import SmallInput from './Bootstrap/SmallInput.svelte'
	import Badge from './Bootstrap/Badge.svelte'
	import type { Tag } from '../app/types'

	export let tags: Tag[] = []
	export let onChange: (tags: Tag[]) => void = () => {
		// do nothing
	}

	let newTagInput = ''

	const addTag = (tag: Tag) => {
		// do nothing if tag already exists
		if(tags.includes(tag)) return
		
		tags = [...tags, tag]

		onChange(tags)
	}

	const deleteTag = (tag: Tag) => {
		const index = tags.indexOf(tag)

		if (index === -1) return

		

		tags.splice(index, 1)
		tags = tags

		onChange(tags)
	}
</script>

<div class="utility-item">
	<SmallInput
		label={'add'}
		bind:value={newTagInput}
		on:click={() => {
			if (newTagInput === '') return
			addTag(newTagInput)
			newTagInput = ''
		}}
	/>
</div>
<div class="utility-item">
	{#each tags as tag, i}
		<Badge
			on:click={() => {
				deleteTag(tag)
			}}>{tag}</Badge
		>
	{/each}
</div>
