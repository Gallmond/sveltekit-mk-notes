<script lang="ts">
	export let active = false
	export let disabled = false

	let type = 'bdn-primary'
	$: {
		type = active ? 'btn-primary' : 'btn-secondary'
	}
</script>

<button type="button" class="btn {type} btn-sm" on:click {disabled}>
	<slot />
</button>
