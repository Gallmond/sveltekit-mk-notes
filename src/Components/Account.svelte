<script lang="ts">
	import FireBase from '../app/Firebase'
	import LightButton from './Bootstrap/LightButton.svelte'
	import type { User } from 'firebase/auth'
	import TextInput from './Bootstrap/TextInput.svelte'
	import PasswordInput from './Bootstrap/PasswordInput.svelte'
	import { FirebaseError } from 'firebase/app'

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

	const handleAuthErr = (error: Error) => {
		console.error('handleAuthErr', { e: error })
		let msg = 'Something went wrong trying to authenticate'

		if (error instanceof FirebaseError) {
			if (
				['auth/user-not-found', 'auth/wrong-password', 'auth/email-already-exists'].includes(
					error.code
				)
			) {
				msg = 'Invalid email or password'
			} else if (error.code === 'auth/invalid-email') {
				msg = 'Please enter a valid email'
			} else if (error.code === 'auth/weak-password') {
				msg = 'Password too weak'
			}
		}

		alert(msg)

		clearInputs()
	}

	const signUp = () => {
		fb.signUp(emailInput, passwordInput)
			.then(() => {
				updateCurrentUser()
				clearInputs()
			})
			.catch(handleAuthErr)
	}

	const signIn = () => {
		fb.signIn(emailInput, passwordInput)
			.then(() => {
				updateCurrentUser()
				clearInputs()
			})
			.catch(handleAuthErr)
	}

	const signOut = () => {
		fb.signOut()
			.then(() => {
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
