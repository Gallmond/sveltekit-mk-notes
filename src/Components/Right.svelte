<script lang="ts">
	import LightButton from "./Bootstrap/LightButton.svelte"
    import SmallInput from "./Bootstrap/SmallInput.svelte"
    import {marked} from 'marked'
    import { onMount } from "svelte";
	import Badge from "./Bootstrap/Badge.svelte";

    let contentContainerState = 0

    // const TEMP = new Array(30).fill('This is some text').join('<br><br>\r\n')

    let inputText = ''
    let generatedMarkdown = ''

    $: generatedMarkdown = marked(inputText)

    let textAreaElement: HTMLTextAreaElement

    /**
     * when focused in the text area, tabs should add four spaces instead
     * of iterating to the next input element
    */
    onMount(() => {

        textAreaElement.addEventListener('keydown', (e) => {
            if(e.key !== 'Tab') return

            e.preventDefault()
            
            const start = textAreaElement.selectionStart
            const end = textAreaElement.selectionEnd

            const prefix = textAreaElement.value.substring(0, start)
            const suffix = textAreaElement.value.substring(end)

            textAreaElement.value = `${prefix}    ${suffix}`

            textAreaElement.selectionStart = textAreaElement.selectionEnd = start + 1
        })
    })


    let newTagInput = ''
    let tagsActive = false
    let tags = [ 'birthday', 'recipe', 'note']
    const addTag = (tag:string) => {
        tags = [...tags, tag]
    }
    const deleteTag = (tag: string) => {
        const index = tags.indexOf(tag)
        
        if(index === -1) return

        tags.splice(index, 1)
        tags = tags
    }


</script>

<div class="wrapper">

    <div class="top-bar">
        <div class="top-left">
            <div class="buttons-container">
                <LightButton on:click={() => {
                    contentContainerState = (contentContainerState + 1) % 3
                }}>✏️/👁️</LightButton>  
                <LightButton on:click={() => {tagsActive = !tagsActive}}>🏷️</LightButton>  
                <LightButton>📌</LightButton>  
                <LightButton>🗑️</LightButton> 
            </div>

            {#if tagsActive}
            <div>

                <SmallInput 
                    label={'add'}
                    bind:value={newTagInput}
                    on:click={() => {
                        if(newTagInput === '') return
                        addTag( newTagInput )
                        newTagInput = ''
                    }}    
                />

                {#each tags as tag, i}
                    <Badge on:click={()=>{ deleteTag(tag) }}>{tag}</Badge>    
                {/each}

            </div>
            {/if}

        </div>
        
        <div class="top-right">
            <LightButton>⚙️</LightButton>  
            <LightButton>👤</LightButton>  
        </div>
    </div>

    <div class="content-container">

        {#if [0,1].includes(contentContainerState) }
            <div class="markdown-editor">
                <textarea class="text-input" bind:this={textAreaElement} bind:value={inputText} placeholder="text here"></textarea>
            </div>
        {/if}

        {#if [0,2].includes(contentContainerState) }
            <div class="markdown-preview">
                <div class="markdown-output">
                    {@html generatedMarkdown}
                </div>
            </div>
        {/if}
    </div>
</div>

<style>

    .wrapper{
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .top-bar{
        padding: 4px;

        height: fit-content;

        border-bottom: 1px solid black;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .content-container{
        flex: 1;

        min-height: 1px;

        display: flex;
        flex-direction: row;
    }

    .markdown-editor{
        flex: 1;
        background-color: rgb(197, 197, 197);

        display: flex;
    }

    .markdown-preview{
        flex: 1;

        display: flex;
    }

    .markdown-output{
        flex: 1;

        overflow-y: scroll;
        padding: 1em;
    }

    .text-input{
        flex: 1;

        padding: 1em;
        border: 0px;
        resize: none;
        background-color: transparent;
        font-family: 'Courier New', Courier, monospace;
    }



</style>