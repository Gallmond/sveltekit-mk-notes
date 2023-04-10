<script lang="ts">
	export let value: string
	export let label = 'label'
	export let placeholder = 'placeholder'
</script>

<div class="input-group mb-3">
	<span class="input-group-text" id="basic-text">{label}</span>
	<input
		bind:value
		type="text"
		class="form-control"
		{placeholder}
		aria-label="email"
		aria-describedby="basic-text"
	/>
</div>
