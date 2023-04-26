<script lang="ts">
	import { onMount } from "svelte"
	import Card from "./Bootstrap/Card.svelte"
	import LightButton from "./Bootstrap/LightButton.svelte"
	import FireBase from "../app/Firebase"
	import { user } from "$stores/user"

	const fb = FireBase.make()

	let deleteAllNotes = () => {}
	let deleteAccount = () => {}

	const confirmPrompt = (msg: string, confirmText: string): boolean => {
		return confirmText === window.prompt(`${msg}.\r\n\r\nType "${confirmText}" to confirm\r\n\r\n`)
	}

	onMount(()=>{
		deleteAllNotes = () => {
			if(!confirmPrompt(
				"Are you sure you want to delete all your notes? This cannot be undone.",
				"delete my notes"
			)){
				return
			}

			if($user === null) return

			fb.deleteAllUserNotes($user)
				.then(() => {
					alert('Notes deleted')
				})
				.catch(console.error)
		}
		deleteAccount = () => {
			if(!confirmPrompt(
				"Are you sure you want to delete your account? This cannot be undone.",
				"delete my account"
			)){
				return
			}

			if($user === null) return

			fb.deleteUser($user)
				.then(() => {
					alert('account deleted!')
				})
				.catch(console.error)
		}
	})


</script>
<div class="settings-container">
	<Card styles={{'background-color' : '#e88e84'}}>
		<div class="buttons">
			<div class="button mb-3">
				<LightButton
					on:click={deleteAllNotes}
				>Delete All Notes</LightButton>
			</div>
			<div class="button mb-3">
				<LightButton
					on:click={deleteAccount}
				>Delete Account</LightButton>
			</div>
		</div>
	</Card>
</div>

<style>
	
	.button{
		display: flex;
	}

	.buttons{
		display: flex;
		margin: 50px;

		align-items: center;
		flex-direction: column;
	}


	.settings-container {
		padding: 4px;
		display: flex;
		flex: 1;

		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
