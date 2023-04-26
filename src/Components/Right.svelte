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

		const time = new Intl.DateTimeFormat('en-gb', {
			timeStyle: 'short'
		}).format(new Date()) // 05:30

		dispatchCreated('noteCreated', { title: `Note ${time}` })
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

	/**
	 * When the component's note changes, set the input text and generated
	 * markdown
	 */
	$: {
		console.log('note changed', { note })
		setInitialNote(note)
		setTopButtonsDisabled()
	}
	const setInitialNote = (note: UserNote | null): void => {
		inputText = note?.content ?? ''
		generatedMarkdown = marked(inputText)
		tags = note?.tags ?? []

		// if neither EDIT or PREVIEW is open, set to both
		if (!(displayState & Display.PREVIEW) && !(displayState & Display.EDITOR)) {
			displayState = Display.PREVIEW + Display.EDITOR
		}

		// if this note is pinned, the pinned bar should be active
		notePinned = note?.pinned ?? false
	}

	/**
	 * when the input text changes (from user input) also update the markdown
	 * and trigger an update to save in 2 seconds of inactivity
	 */
	let pendingSave: NodeJS.Timeout | null = null // eslint-disable-line no-undef
	$: {
		generatedMarkdown = marked(inputText)
		initiateSave()
	}
	const initiateSave = () => {
		console.debug('initiateSave')
		if (pendingSave !== null) {
			clearTimeout(pendingSave)
		}

		const getNoteTitle = (note: UserNote, generatedHtml: string): string => {
			const maxLen = 255

			const parser = new DOMParser()
			const doc = parser.parseFromString(generatedHtml, 'text/html')

			// get first h1 tag
			const h1 = doc.querySelectorAll('h1')
			if (h1.length > 0) {
				return h1[0].innerText
			}

			// get first text content of any node
			const nodes = doc.childNodes
			if (nodes.length > 0 && nodes[0].textContent) {
				return nodes[0].textContent.substring(0, maxLen)
			}

			return note.title
		}

		pendingSave = setTimeout(() => {
			if (note === null) return

			note.content = inputText

			note.title = getNoteTitle(note, generatedMarkdown)

			dispatchContentChanged('noteContentChanged', { note })
		}, SAVE_DELAY_MS)
	}

	// === what to display =====================================================
	enum Display {
		ACCOUNT = 0b0001, // 1
		SETTINGS = 0b0010, // 2
		EDITOR = 0b0100, // 4
		PREVIEW = 0b1000 // 8
	}

	const containsMasks = (test: number, ...masks: Display[]): boolean => {
		let valid = 0
		for (const mask of masks) {
			if (test & mask) valid++
		}

		return valid === masks.length
	}

	const clearNonNoteStates = () => {
		displayState &= ~Display.SETTINGS
		displayState &= ~Display.ACCOUNT
	}

	const togglePreview = () => (displayState = displayState ^ Display.PREVIEW)
	const toggleEditor = () => (displayState = displayState ^ Display.EDITOR)

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

	let displayState = Display.PREVIEW + Display.EDITOR
	// =========================================================================

	let topButtonsDisabled = false
	const setTopButtonsDisabled = () => {
		// top buttons should be disabled if there is no note OR there is no user
		topButtonsDisabled = note === null || $user === null
	}

	let displayName = ''
	user.subscribe((user) => {
		setTopButtonsDisabled()

		displayName =
			user === null
				? ''
				: user.displayName === null
				? user.email ?? ''
				: `${user.displayName} <${user.email}>`

		if (user === null) {
			displayState = Display.ACCOUNT
		}
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

	$: {
		console.log('displayState', displayState)
	}
</script>

<div class="wrapper">
	<div class="top-bar">
		<div class="buttons-bar">
			<div class="buttons-container">
				<LightButton
					disabled={topButtonsDisabled}
					active={containsMasks(displayState, Display.EDITOR)}
					on:click={() => {
						clearNonNoteStates()
						toggleEditor()
					}}>✏️</LightButton
				>
				<LightButton
					disabled={topButtonsDisabled}
					active={containsMasks(displayState, Display.PREVIEW)}
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
				<Tags {tags} onChange={tagsChanged} />
			{/if}
		</div>
	</div>

	<div class="content-container">
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

			{#if !(displayState & Display.EDITOR) && !(displayState & Display.PREVIEW)}
				<InstructionsPane {SAVE_DELAY_MS} />
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
