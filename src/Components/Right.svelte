<script lang="ts">
	import LightButton from "./Bootstrap/LightButton.svelte";
    import {marked} from 'marked'
    import { onMount } from "svelte";

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

</script>

<div class="wrapper">

    <div class="top-bar">
        <div class="top-left">
            <LightButton on:click={() => {
                contentContainerState = (contentContainerState + 1) % 3
            }}>✏️/👁️</LightButton>  
            <LightButton>🏷️</LightButton>  
            <LightButton>📌</LightButton>  
            <LightButton>🗑️</LightButton> 
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