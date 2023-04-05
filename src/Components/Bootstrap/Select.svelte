<script lang="ts">
	import { onMount } from "svelte";

    export let label: string = ''
    export let values: Record<string, string> = {}
    export let selected: string = ''

    let selectElement: HTMLSelectElement
    onMount(() => {
        if(selectElement === null) return

        selectElement.onchange = (e) => {
            const target= e.target as HTMLSelectElement | null
            if(!target) return

            selected = target.value
        }
    })

</script>

<div class="input-group mb-3">
    {#if label !== ''}
        <label class="input-group-text" for="select">{label}</label>
    {/if}
    <select bind:this={selectElement} class="form-select" aria-label="Default select example" id="select-component">
        {#each Object.entries(values) as keyVal, i}
            {#if keyVal[0] === selected}
                <option value="{keyVal[0]}" selected>{keyVal[1]}</option>    
            {:else}
                <option value="{keyVal[0]}" >{keyVal[1]}</option>    
            {/if}
        {/each}
    </select>
</div>
  

