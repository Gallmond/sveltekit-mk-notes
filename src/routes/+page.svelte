<script lang="ts">
	import { user, notes } from '$stores/user'
	import Left from '../Components/Left.svelte'
	import Right from '../Components/Right.svelte'
	import type { UserNote } from '../app/Firebase'
	import FireBase from '../app/Firebase'

	const fb = FireBase.make()

	let selectedNote: UserNote | null = null

	const noteSelected = (event: CustomEvent<{ note: UserNote }>) => {
		// only update the note if it's a different one to the currently selected one
		if (selectedNote && selectedNote.uid === event.detail.note.uid) {
			return
		}

		selectedNote = event.detail.note
	}

	const noteDeleted = (event: CustomEvent<{ note: UserNote }>) => {
		if ($user === null) return

		fb.deleteUserNote($user, event.detail.note)
			.then(() => (selectedNote = null))
			.catch(console.error)
	}

	const notePinned = (event: CustomEvent<{ note: UserNote }>) => {
		if ($user === null) return

		const note = event.detail.note

		note.pinned = true

		fb.updateUserNote($user, note).catch(console.error)
	}

	const noteUnpinned = (event: CustomEvent<{ note: UserNote }>) => {
		if ($user === null) return

		const note = event.detail.note

		note.pinned = false

		fb.updateUserNote($user, note)
	}

	const noteCreated = (event: CustomEvent<{ title: string }>) => {
		if ($user === null) return

		const title = event.detail.title
		const content = [`# ${title}`, '## Subheader', 'Some regular text!'].join('\r\n\r\n')

		fb.createUserNote($user, title, content).catch(console.error)
	}

	const noteChanged = (event: CustomEvent<{ note: UserNote }>) => {
		if ($user === null) return

		fb.updateUserNote($user, event.detail.note).catch(console.error)
	}

	let allNotes: UserNote[] = []
	notes.subscribe((updatedNotes) => {
		allNotes = updatedNotes
	})
</script>

<div class="wrapper">
	<div class="left-container">
		<Left
			notes={allNotes}
			{selectedNote}
			on:noteDeleted={noteDeleted}
			on:noteSelected={noteSelected}
			on:noteUnpinned={noteUnpinned}
			on:noteCreated={noteCreated}
		/>
	</div>
	<div class="right-container">
		<Right
			note={selectedNote}
			on:notePinned={notePinned}
			on:noteTagsChanged={noteChanged}
			on:noteContentChanged={noteChanged}
			on:noteCreated={noteCreated}
		/>
	</div>
</div>

<style>
	.left-container {
		min-width: 350px;
		flex: 2;
	}
	.right-container {
		flex: 8;
		display: flex;
	}

	.wrapper {
		display: flex;
		flex: 1;
		height: 100%;
	}
</style>
