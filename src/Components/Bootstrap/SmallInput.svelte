<script lang="ts">
    import LightButton from './LightButton.svelte'

    export let label = 'button'
    export let value = ''
</script>

<div class="input-group input-group-sm mb-3">
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" 
        bind:value={value}
    >
    <LightButton on:click >{label}</LightButton>
</div>

<style>
    input{
        max-width: 150px;
    }
</style>