<script lang="ts">
	import { user } from '$stores/user'
	import LightButton from './Bootstrap/LightButton.svelte'
	import { marked } from 'marked'
	import Tags from './Tags.svelte'
	import type { Tag } from '../app/types'
	import MarkdownEditor from './MarkdownEditor.svelte'
	import MarkdownPreview from './MarkdownPreview.svelte'
	import Settings from './Settings.svelte'
	import Account from './Account.svelte'
	import type { UserNote } from '../app/Firebase'
	import { createEventDispatcher } from 'svelte'

	const dispatchPinned = createEventDispatcher<{ notePinned: { note: UserNote } }>()
	const dispatchTagsChanged = createEventDispatcher<{ noteTagsChanged: { note: UserNote } }>()
	const dispatchContentChanged = createEventDispatcher<{ noteContentChanged: { note: UserNote } }>()

	export let note: UserNote | null = null

	let inputText = ''
	let generatedMarkdown = ''
	let tags: Tag[] = []

	/**
	 * When the component's note changes, set the input text and generated
	 * markdown
	 */
	$: {
		console.log('note changed', { note })
		setInitialNote(note)
	}
	const setInitialNote = (note: UserNote | null): void => {
		inputText = note?.content ?? ''
		generatedMarkdown = marked(inputText)
		tags = note?.tags ?? []
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

		pendingSave = setTimeout(() => {
			if (note === null) return

			note.content = inputText

			dispatchContentChanged('noteContentChanged', { note })
		}, 3000)
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

	let displayState = Display.PREVIEW + Display.EDITOR
	// =========================================================================

	let displayName = ''
	user.subscribe((user) => {
		console.log('user updated on Right.svelte', { user })

		if (user === null) {
			displayName = ''
			return
		}

		displayName =
			user.displayName === null ? user.email ?? '' : `${user.displayName} <${user.email}>`
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
		console.log('displayState', displayState)
	}
</script>

<div class="wrapper">
	<div class="top-bar">
		<div class="buttons-bar">
			<div class="buttons-container">
				<LightButton
					active={containsMasks(displayState, Display.EDITOR)}
					on:click={() => {
						clearNonNoteStates()
						toggleEditor()
					}}>✏️</LightButton
				>
				<LightButton
					active={containsMasks(displayState, Display.PREVIEW)}
					on:click={() => {
						clearNonNoteStates()
						togglePreview()
					}}>👁️</LightButton
				>
				<LightButton
					active={tagsActive}
					on:click={() => {
						tagsActive = !tagsActive
					}}>🏷️</LightButton
				>
				<LightButton on:click={pinClicked}>📌</LightButton>
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

		{#if displayState & Display.EDITOR}
			<MarkdownEditor bind:value={inputText} />
		{/if}

		{#if displayState & Display.PREVIEW}
			<MarkdownPreview html={generatedMarkdown} />
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
