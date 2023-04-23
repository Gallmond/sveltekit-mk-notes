<script lang="ts">
	export let input: string

	export let disabled = false
</script>

<div class="input-group mb-3">
	<span class="input-group-text" id="search-bar-input">🔎</span>
	<input
		bind:value={input}
		type="text"
		class="form-control"
		placeholder="search"
		aria-label="search"
		aria-describedby="search-bar-input"
		{disabled}
	/>
</div>
