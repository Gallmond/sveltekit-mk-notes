<script lang="ts">
	import ListItem from './ListItem.svelte'
	import Search from './Bootstrap/Search.svelte'
	import Select from './Bootstrap/Select.svelte'
	import LightButton from './Bootstrap/LightButton.svelte'
	import { user, notes } from '$stores/user'
	import FireBase, { UserNote } from '../app/Firebase'

	const fb = FireBase.make()

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
	let newNoteDisabled = false
	let allNotes: UserNote[] = []
	let displayNotes: UserNote[] = []
	user.subscribe((user) => {
		console.debug('Left.svelte, user writable changed', { user })
		newNoteDisabled = user === null
	})

	notes.subscribe((updatedNotes) => {
		/**
		 * //TODO this is firing but the notes on the page aren't updating for
		 * some reason
		 *
		 * Refactor this logic. Instead just watch for allNotes changes and
		 * displayNotes should just always take the current state of search and
		 * order options before being passed into the loop
		 */
		console.log('updatedNotes', { updatedNotes })
		allNotes = updatedNotes
		console.debug('allNotes set')
		displayNotes = updatedNotes
		console.debug('displayNotes set')
	})

	const createNewNote = async () => {
		if ($user === null) return
		await fb.createUserNote($user, 'New Note!')
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
		if (str === '') {
			displayNotes = allNotes.slice()
			return
		}

		displayNotes = allNotes.slice().filter((note) => {
			return note.title.toLowerCase().includes(str.toLowerCase())
		})
	}
</script>

<div class="wrapper">
	<div>
		<Search bind:input={searchValue} />
	</div>

	<div>
		<Select
			values={selectValues}
			bind:selected={selectDefault}
			on:change={(e) => {
				console.log('select changed', { e })
			}}
			label="order by"
		/>
	</div>

	<div>
		<LightButton disabled={newNoteDisabled} on:click={createNewNote}>Create note</LightButton>
	</div>

	<div class="list-container">
		{#each displayNotes as displayNote (displayNote)}
			<div>
				<ListItem note={displayNote} />
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
