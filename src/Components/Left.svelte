<script lang="ts">
	import ListItem from './ListItem.svelte'
	import Search from './Bootstrap/Search.svelte'
	import Select from './Bootstrap/Select.svelte'
	import LightButton from './Bootstrap/LightButton.svelte'
	import { user } from '$stores/user'
	import { createEventDispatcher } from 'svelte'
	import type { UserNote } from '../app/Firebase'
	import { timeString } from '../app/utils'

	export let notes: UserNote[] = []
	export let selectedNote: UserNote | null = null

	const dispatchCreated = createEventDispatcher<{ noteCreated: { title: string } }>()

	type SelectEnum = 'title' | 'createdDesc' | 'createdAsc'

	const selectValues = {
		title: 'title',
		createdDesc: 'created (desc)',
		createdAsc: 'created (asc)'
	}
	let selectDefault: SelectEnum = 'title'
	$: {
		sortDisplayNotes(selectDefault)
	}

	let searchValue = ''
	$: {
		filterDisplayNotes(searchValue)
	}

	// ONLY CLEAN CODE BELOW!!!
	let controlsDisabled = false
	let allNotes: UserNote[] = []
	let displayNotes: UserNote[] = []
	user.subscribe((user) => {
		controlsDisabled = user === null
	})

	$: {
		allNotes = notes
		displayNotes = notes
	}

	const createNewNote = async () => {
		if ($user === null) return

		dispatchCreated('noteCreated', {
			title: `Note ${notes.length} (${timeString()})`
		})
	}

	const sortDisplayNotes = (by: SelectEnum) => {
		/**
		 * Separate our notes into pinned and unpinned groups
		 */
		const pinnedNotes: UserNote[] = []
		const unPinnedNotes: UserNote[] = []

		for (const note of allNotes) {
			note.pinned ? pinnedNotes.push(note) : unPinnedNotes.push(note)
		}

		// create a sorter
		const sorter = (a: UserNote, b: UserNote): number => {
			if (by === 'title') {
				if (a.title < b.title) return -1
				if (a.title > b.title) return 1
				return 0
			}

			if (by === 'createdDesc') {
				if (a.createdAt > b.createdAt) return -1
				if (a.createdAt < b.createdAt) return 1
				return 0
			}

			if (by === 'createdAsc') {
				if (a.createdAt > b.createdAt) return 1
				if (a.createdAt < b.createdAt) return -1
				return 0
			}

			return 0
		}

		// sort them both but make sure pins are first
		displayNotes = [...pinnedNotes.sort(sorter), ...unPinnedNotes.sort(sorter)]
	}
	const filterDisplayNotes = (str: string) => {
		const searchTerm = str.toLowerCase()

		if (searchTerm === '') {
			displayNotes = allNotes.slice()
			return
		}

		displayNotes = allNotes.slice().filter((note) => {
			// string is in title
			if (note.title.toLowerCase().includes(searchTerm.toLowerCase())) {
				return true
			}

			// string is in a tag
			for (const tag of note.tags) {
				if (tag.toLowerCase().includes(searchTerm)) {
					return true
				}
			}

			return false
		})
	}
</script>

<div class="wrapper">
	<div class="search-create-container">
		<div class="search-holder">
			<Search disabled={controlsDisabled} bind:input={searchValue} />
		</div>
		<div class="create-holder mb-3">
			<LightButton disabled={controlsDisabled} on:click={createNewNote}>Create note</LightButton>
		</div>
	</div>

	<div>
		<Select
			disabled={controlsDisabled}
			values={selectValues}
			bind:selected={selectDefault}
			label="order by"
		/>
	</div>

	<div class="list-container">
		{#each displayNotes as displayNote (displayNote)}
			<div>
				<ListItem
					selected={selectedNote ? selectedNote.uid === displayNote.uid : false}
					note={displayNote}
					on:noteDeleted
					on:noteSelected
					on:noteUnpinned
				/>
			</div>
		{/each}
	</div>
</div>

<style>
	.search-create-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.search-holder {
		margin-right: 3px;
		flex: 2;
	}
	.create-holder {
		display: flex;
		justify-content: end;
	}

	.list-container > div {
		margin-bottom: 0.75em;
	}

	.list-container {
		flex: 1;
		overflow-y: auto;
	}

	.wrapper {
		display: flex;
		flex: 1;
		flex-direction: column;
		height: 100%;

		border-right: 1px solid black;
		padding: 4px;
	}
</style>
