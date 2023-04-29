<script lang="ts">
	import type { UserNote } from '../app/Firebase'
	import type { Func } from '../app/types'
	import { dateTimeString } from '../app/utils'
	import Badge from './Bootstrap/Badge.svelte'
	import Card from './Bootstrap/Card.svelte'
	import LightButton from './Bootstrap/LightButton.svelte'
	import { createEventDispatcher, onMount } from 'svelte'
	const dispatchDelete = createEventDispatcher<{ noteDeleted: { note: UserNote } }>()
	const dispatchSelected = createEventDispatcher<{ noteSelected: { note: UserNote } }>()
	const dispatchUnpinned = createEventDispatcher<{ noteUnpinned: { note: UserNote } }>()

	export let note: UserNote
	export let selected = false

	const title = note.title
	const date = dateTimeString(note.createdAt)
	const tags = note.tags
	const pinned = note.pinned

	let deleteClicked: Func | null = null
	let noteClicked: Func | null = null
	let pinClicked: Func | null = null
	onMount(() => {
		noteClicked = () => {
			dispatchSelected('noteSelected', { note })
		}

		pinClicked = () => {
			confirm('Are you sure you want to unpin this note?') &&
				dispatchUnpinned('noteUnpinned', { note })
		}

		deleteClicked = () => {
			confirm('Are you sure you want to delete this note?') &&
				dispatchDelete('noteDeleted', { note })
		}
	})

	let cardStyles: Record<string, string> = {}
	const setCardStyles = (selected: boolean) => {
		cardStyles = selected ? { border: '2px solid black' } : {}
	}
	$: setCardStyles(selected)
</script>

<Card styles={cardStyles}>
	<div class="list-item">
		<span style="display: none">
			{JSON.stringify(note, null, 2)}
		</span>

		<div class="bit">
			<p class="title-container">{title}</p>
			<p class="date-container">{date}</p>
		</div>

		<div class="bit">
			<div class="icons">
				{#if pinned}
					<LightButton on:click={pinClicked}>📌</LightButton>
				{/if}
				<LightButton on:click={deleteClicked}>🗑️</LightButton>
				<LightButton on:click={noteClicked}>Open</LightButton>
			</div>
			<div class="tags-container">
				{#each tags as tag, i}
					<div class="tag-container"><Badge>{tag}</Badge></div>
				{/each}
			</div>
		</div>
	</div>
</Card>

<style>
	p {
		margin-bottom: 0px;
	}

	.tags-container {
		display: flex;
		flex-direction: row;
	}

	.date-container {
		color: rgba(0, 0, 0, 0.5);
		font-size: 0.75em;
		white-space: nowrap;
	}

	.title-container {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 1.5em;
	}

	.list-item {
		display: flex;
		flex-direction: column;
	}

	.bit {
		display: flex;
		justify-content: space-between;
	}
	.bit > p,
	.bit > div {
		width: fit-content;
	}

	.list-item:nth-child(1) {
		flex: 2;
	}
	.list-item:nth-child(2) {
		flex: 1;
	}

	.icons {
		white-space: nowrap;
		margin-right: 2px;
	}
</style>
