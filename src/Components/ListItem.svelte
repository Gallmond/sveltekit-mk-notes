<script lang="ts">
	import type { UserNote } from '../app/Firebase'
	import Badge from './Bootstrap/Badge.svelte'
	import Card from './Bootstrap/Card.svelte'
	import LightButton from './Bootstrap/LightButton.svelte'
	import { createEventDispatcher, onMount } from 'svelte'
	const dispatchDelete = createEventDispatcher<{ noteDeleted: { note: UserNote } }>()
	const dispatchSelected = createEventDispatcher<{ noteSelected: { note: UserNote } }>()
	const dispatchUnpinned = createEventDispatcher<{ noteUnpinned: { note: UserNote } }>()

	export let note: UserNote
	export let selected = false

	const formatDate = (date: Date): string => {
		const year = date.getFullYear()
		const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
		const day = date.getDate()

		const hh = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()

		const mm = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()

		return `${year}-${month}-${day} ${hh}:${mm}`
	}

	const title = note.title
	const date = formatDate(note.createdAt)
	const tags = note.tags
	const pinned = note.pinned

	type Func = () => void
	let deleteClicked: Func | null = null
	let noteClicked: Func | null = null
	let pinClicked: Func | null = null
	onMount(() => {
		deleteClicked = () => {
			if (!confirm('Are you sure you want to delete this note?')) {
				return
			}

			dispatchDelete('noteDeleted', { note })
		}

		noteClicked = () => {
			dispatchSelected('noteSelected', { note })
		}

		pinClicked = () => {
			if (!confirm('Are you sure you want to unpin this note?')) {
				return
			}

			dispatchUnpinned('noteUnpinned', { note })
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

	.tag-container {
		/* margin-left: 0.25em; */
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
