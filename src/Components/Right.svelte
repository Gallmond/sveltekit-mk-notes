<script lang="ts">
	import { user, notes } from '$stores/user'
	import LightButton from './Bootstrap/LightButton.svelte'
	import { marked } from 'marked'
	import Tags from './Tags.svelte'
	import type { Tag } from '../app/types'
	import MarkdownEditor from './MarkdownEditor.svelte'
	import MarkdownPreview from './MarkdownPreview.svelte'
	import Settings from './Settings.svelte'
	import Account from './Account.svelte'
	import type { UserNote } from '../app/Firebase'
	import { createEventDispatcher, onMount } from 'svelte'
	import InstructionsPane from './InstructionsPane.svelte'
	import { debounce, getNoteTitle, getUserDisplayName, hasMasks, timeString } from '../app/utils'

	/**
	 * How long in milliseconds to wait until updating the note after user input
	 * has ceased
	 */
	const SAVE_DELAY_MS = 666

	const dispatchPinned = createEventDispatcher<{ notePinned: { note: UserNote } }>()
	const dispatchTagsChanged = createEventDispatcher<{ noteTagsChanged: { note: UserNote } }>()
	const dispatchContentChanged = createEventDispatcher<{ noteContentChanged: { note: UserNote } }>()
	const dispatchCreated = createEventDispatcher<{ noteCreated: { title: string } }>()

	const createNewNote = async () => {
		if ($user === null) return

		dispatchCreated('noteCreated', { title: `Note ${timeString()}` })
	}

	export let note: UserNote | null = null

	let inputText = ''
	let generatedMarkdown = ''
	let tags: Tag[] = []
	let notePinned = note?.pinned ?? false

	/**
	 * //TODO refactor this it smells of workaround
	 *
	 * Why can't we get the note pinned state from the passed in note at all times?
	 */
	notes.subscribe((updatedNotes) => {
		for (const updatedNote of updatedNotes) {
			if (updatedNote.uid === note?.uid) {
				notePinned = updatedNote.pinned
			}
		}
	})

	let parser: DOMParser | null = null
	const getParser = (): DOMParser => {
		if (parser === null) {
			throw new Error('DOMParser not initialised')
		}

		return parser
	}
	onMount(() => {
		parser = new DOMParser()
	})

	/**
	 * When the component's note changes, set the input text and generated
	 * markdown
	 */
	$: {
		setInitialNote(note)
		setTopButtonsDisabled()
	}
	const setInitialNote = (note: UserNote | null): void => {
		inputText = note?.content ?? ''
		generatedMarkdown = marked(inputText)
		tags = note?.tags ?? []

		// if there IS a note, but neither EDIT or PREVIEW is open, set to both
		if(
			note
			&& !(displayState & Display.PREVIEW)
			&& !(displayState & Display.EDITOR)
		){
			displayState = Display.PREVIEW + Display.EDITOR
		}

		// if this note is pinned, the pinned bar should be active
		notePinned = note?.pinned ?? false
	}

	/**
	 * when the input text changes (from user input) also update the markdown
	 * and trigger an update to save in x seconds of inactivity
	 */
	$: {
		generatedMarkdown = marked(inputText)
		initiateSave()
	}
	const initiateSave = () => {
		debounce(
			'save',
			() => {
				if (note === null) return

				note.content = inputText

				note.title = getNoteTitle(getParser(), note, generatedMarkdown)

				dispatchContentChanged('noteContentChanged', { note })
			},
			SAVE_DELAY_MS
		)
	}

	// === what to display =====================================================
	enum Display {
		ACCOUNT = 0b0001, // 1
		SETTINGS = 0b0010, // 2
		EDITOR = 0b0100, // 4
		PREVIEW = 0b1000 // 8
	}

	const clearNonNoteStates = () => {
		displayState &= ~Display.SETTINGS
		displayState &= ~Display.ACCOUNT
	}

	const togglePreview = () => {
		clearNonNoteStates()
		displayState = displayState ^ Display.PREVIEW
	}
	const toggleEditor = () => {
		clearNonNoteStates()
		displayState = displayState ^ Display.EDITOR
	}

	onMount(() => {
		document.addEventListener('keydown', (e) => {
			if (topButtonsDisabled) return

			if (e.ctrlKey && e.key === 'e') {
				e.preventDefault()
				toggleEditor()
			}

			if (e.ctrlKey && e.key === 'r') {
				e.preventDefault()
				togglePreview()
			}

			if (e.ctrlKey && e.key === 'c') {
				e.preventDefault()
				createNewNote()
			}
		})
	})

	/**
	 * signed-in: preview & editor
	 * signed-out: account
	 */
	let displayState: number = Display.ACCOUNT
	// =========================================================================

	let topButtonsDisabled = false
	const setTopButtonsDisabled = () => {
		// top buttons should be disabled if there is no note OR there is no user
		topButtonsDisabled = note === null || $user === null
	}

	let displayName = ''
	user.subscribe((user) => {
		console.log('Right.svelte user.subscribe', { user })

		displayName = getUserDisplayName(user)

		displayState = user === null ? Display.ACCOUNT : Display.EDITOR + Display.PREVIEW

		setTopButtonsDisabled()
	})

	const pinClicked = () => {
		if (note === null) return

		dispatchPinned('notePinned', { note })
	}

	let tagsActive = false
	const tagsChanged = (tags: Tag[]) => {
		if (note === null) return

		note.tags = tags

		dispatchTagsChanged('noteTagsChanged', { note })
	}

	$: {
		if (topButtonsDisabled === true && tagsActive === true) {
			tagsActive = false
		}
	}
</script>

<div class="wrapper">
	<div class="top-bar">
		<div class="buttons-bar">
			<div class="buttons-container">
				<LightButton
					disabled={topButtonsDisabled}
					active={hasMasks(displayState, Display.EDITOR)}
					on:click={() => {
						clearNonNoteStates()
						toggleEditor()
					}}>✏️</LightButton
				>
				<LightButton
					disabled={topButtonsDisabled}
					active={hasMasks(displayState, Display.PREVIEW)}
					on:click={() => {
						clearNonNoteStates()
						togglePreview()
					}}>👁️</LightButton
				>
				<LightButton
					disabled={topButtonsDisabled}
					active={tagsActive && !topButtonsDisabled}
					on:click={() => {
						tagsActive = !tagsActive
					}}>🏷️</LightButton
				>
				<LightButton disabled={topButtonsDisabled} active={notePinned} on:click={pinClicked}
					>📌</LightButton
				>
			</div>

			<div class="buttons-container">
				<small>{displayName}</small>
				<LightButton
					active={displayState === Display.SETTINGS}
					disabled={$user === null}
					on:click={() => {
						displayState = Display.SETTINGS
					}}>⚙️</LightButton
				>
				<LightButton
					active={displayState === Display.ACCOUNT}
					on:click={() => {
						displayState = Display.ACCOUNT
					}}>👤</LightButton
				>
			</div>
		</div>

		<div class="utility-bar">
			{#if tagsActive}
				<div class="tags-container mt-2">
					<Tags {tags} onChange={tagsChanged} />
				</div>
			{/if}
		</div>
	</div>

	<div class="content-container">
		{#if displayState === 0}
			<InstructionsPane {SAVE_DELAY_MS} />
		{/if}

		{#if displayState === Display.ACCOUNT}
			<Account />
		{/if}

		{#if displayState === Display.SETTINGS}
			<Settings />
		{/if}

		<!-- only show the editor or display panes if a note is selected -->
		{#if note !== null}
			{#if displayState & Display.EDITOR}
				<MarkdownEditor bind:value={inputText} />
			{/if}

			{#if displayState & Display.PREVIEW}
				<MarkdownPreview html={generatedMarkdown} />
			{/if}
		{/if}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.top-bar {
		padding: 4px;

		height: fit-content;

		border-bottom: 1px solid black;

		display: flex;
		flex-direction: column;
	}

	.buttons-bar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.content-container {
		flex: 1;

		min-height: 1px;

		display: flex;
		flex-direction: row;
	}

	.utility-bar {
		display: flex;
		flex-direction: row;
		justify-content: left;
	}
</style>
