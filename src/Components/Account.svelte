<script lang="ts">
	import FireBase from '../app/Firebase'
	import LightButton from './Bootstrap/LightButton.svelte'
	import type { User } from 'firebase/auth'
	import TextInput from './Bootstrap/TextInput.svelte'
	import PasswordInput from './Bootstrap/PasswordInput.svelte'

	const debugCreateNote = () => {
		const currentUser = fb.getCurrentUser()

		fb.createUserNote(currentUser, 'test note', '<h1>test note content</h1>', ['foo', 'bar'])
			.then(() => {
				console.log('note created check emulator')

				fb.getUserNotes(currentUser).then((notes) => {
					console.log('gotUserNotes', notes)
				})
			})
			.catch()
	}

	const fb = FireBase.make()

	let emailInput = ''
	let passwordInput = ''

	let currentUser: User | null = fb.currentUser
	const updateCurrentUser = () => {
		currentUser = fb.currentUser
	}

	const clearInputs = () => {
		emailInput = ''
		passwordInput = ''
	}

	const signUp = () => {
		if (passwordInput.length < 12) console.log('short password')

		fb.signUp(emailInput, passwordInput)
			.then((user) => {
				console.log('user has signed up', { user })
				updateCurrentUser()
				clearInputs()

				debugCreateNote()
			})
			.catch(console.error)
	}

	const signIn = () => {
		console.log('signIn', { emailInput, passwordInput })

		fb.signIn(emailInput, passwordInput)
			.then((user) => {
				console.log('user has signed in', { user })
				updateCurrentUser()
				clearInputs()
			})
			.catch(console.error)
	}

	const signOut = () => {
		fb.signOut()
			.then(() => {
				console.log('user has signed out')
				updateCurrentUser()
			})
			.catch(console.error)
	}
</script>

<div class="account-container">
	{#if currentUser === null}
		<TextInput bind:value={emailInput} label="email" placeholder="email" />
		<PasswordInput bind:value={passwordInput} label="password" placeholder="password" />
	{/if}

	<div class="row">
		<div class="col buttons-container">
			<!-- only show if no current user -->
			{#if currentUser === null}
				<LightButton on:click={signIn}>Sign in</LightButton>
				<LightButton on:click={signUp}>Sign up</LightButton>
			{:else}
				<!-- current user should only be able to log out -->
				<LightButton on:click={signOut}>Sign out</LightButton>
			{/if}
		</div>
	</div>
</div>

<style>
	.buttons-container {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.account-container {
		padding: 4px;
		display: flex;
		flex: 1;

		flex-direction: column;
		align-content: center;
		max-width: 400px;

		align-self: center;
		justify-self: center;
		margin: 0px auto;
	}
</style>
