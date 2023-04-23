<script lang="ts">
	import ListItem from './ListItem.svelte'
	import Search from './Bootstrap/Search.svelte'
	import Select from './Bootstrap/Select.svelte'
	import LightButton from './Bootstrap/LightButton.svelte'
	import { user } from '$stores/user'
	import { createEventDispatcher } from 'svelte'
	import type { UserNote } from '../app/Firebase'

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
		console.debug('Left.svelte, user writable changed', { user })
		controlsDisabled = user === null
	})

	$: {
		allNotes = notes
		displayNotes = notes
	}

	const createNewNote = async () => {
		if ($user === null) return

		const time = new Intl.DateTimeFormat('en-gb', {
			timeStyle: 'short'
		}).format(new Date()) // 05:30

		const n = notes.length

		const title = `Note ${n} (${time})`

		dispatchCreated('noteCreated', { title })
	}

	const sortDisplayNotes = (by: SelectEnum) => {
		displayNotes = allNotes.slice().sort((a, b) => {
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
		})
	}
	const filterDisplayNotes = (str: string) => {
		const strLs = str.toLowerCase()

		if (strLs === '') {
			displayNotes = allNotes.slice()
			return
		}

		displayNotes = allNotes.slice().filter((note) => {
			// string is in title
			if (note.title.toLowerCase().includes(strLs.toLowerCase())) {
				return true
			}

			// string is in a tag
			for (const tag of note.tags) {
				if (tag.toLowerCase().includes(strLs)) {
					return true
				}
			}

			return false
		})
	}
</script>

<div class="wrapper">
	<div>
		<Search disabled={controlsDisabled} bind:input={searchValue} />
	</div>

	<div>
		<Select
			disabled={controlsDisabled}
			values={selectValues}
			bind:selected={selectDefault}
			on:change={(e) => {
				console.log('select changed', { e })
			}}
			label="order by"
		/>
	</div>

	<div class="mb-3">
		<LightButton disabled={controlsDisabled} on:click={createNewNote}>Create note</LightButton>
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
