<script lang="ts">
    export let label: string = ''
    export let values: Record<string, string> = {}
    export let selected: string = ''
</script>

<div class="input-group mb-3">
    {#if label !== ''}
        <label class="input-group-text" for="select">{label}</label>
    {/if}
    <select class="form-select" aria-label="Default select example" id="select-component">
        {#each Object.entries(values) as keyVal, i}
            {#if keyVal[0] === selected}
                <option value="{keyVal[0]}" selected>{keyVal[1]}</option>    
            {:else}
                <option value="{keyVal[0]}" >{keyVal[1]}</option>    
            {/if}
        {/each}
    </select>
</div>
  

