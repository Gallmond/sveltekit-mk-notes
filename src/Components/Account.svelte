<script lang="ts">
	import Page from '../routes/+page.svelte';

	let emailInput = '';
	let passwordInput = '';

	const signIn = () => {
		console.log({
			emailInput,
			passwordInput
		});

		if (passwordInput.length < 12) console.log('short password');

		emailInput = '';
		passwordInput = '';
	};

	const signOut = () => {
		console.log('signOut');
	};
</script>

<div class="account-container">
	<h1>Sign in</h1>
	<label for="emailInput">Email</label>
	<input bind:value={emailInput} type="email" id="emailInput" />

	<label for="passwordInput">password</label>
	<input bind:value={passwordInput} type="password" id="passwordInput" />

	<button on:click={signIn}>Sign in</button>

	<hr />

	<button on:click={signOut}>Sign out</button>
</div>

<style>
	.account-container {
		padding: 4px;
		display: flex;
		flex: 1;

		flex-direction: column;
		align-content: center;
	}
</style>
