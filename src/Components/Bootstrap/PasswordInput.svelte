<script lang="ts">
	export let value: string
	export let label = 'label'
	export let placeholder = 'placeholder'
</script>

<div class="input-group mb-3">
	<span class="input-group-text" id="basic-password">{label}</span>
	<input
		bind:value
		type="password"
		class="form-control"
		{placeholder}
		aria-label="password"
		aria-describedby="basic-password"
	/>
</div>
