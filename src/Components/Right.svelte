<script lang="ts">
	import LightButton from "./Bootstrap/LightButton.svelte";
    import {marked} from 'marked'
    import { onMount } from "svelte";

    let contentContainerState = 0

    let markedOutputDiv: HTMLDivElement

    const TEMP = new Array(30).fill('This is some text').join('<br><br>\r\n')

    let inputText = TEMP

    $:{
        markedOutputDiv && (markedOutputDiv.innerHTML = marked(inputText))
    }

    let textAreaElement: HTMLTextAreaElement

    /**
     * when focused in the text area, tabs should add a tab character instead
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
                <textarea bind:this={textAreaElement} bind:value={inputText} placeholder="text here"></textarea>
            </div>
        {/if}

        {#if [0,2].includes(contentContainerState) }
            <div class="markdown-preview">
                <!-- TODO scrollbar not working here -->
                <div class="markdown-output" bind:this={markedOutputDiv}></div>
            </div>
        {/if}
    </div>
</div>

<style>

    .markdown-output{
        flex: 1;
        overflow-y: scroll;
    }

    .markdown-editor > textarea{
        flex: 1;
        border: 0px;
        resize: none;
        background-color: transparent;
        font-family: 'Courier New', Courier, monospace;
    }

    .markdown-editor{
        display: flex;
        padding: 1em;
        background-color: #e9ecef;
    }

    .markdown-preview{
        padding: 1em;
        display: flex;
    }

    .markdown-editor, .markdown-preview{
        flex: 1;
    }

    .content-container{
        display: flex;
        flex-direction: row;
        flex: 1;
    }

    .top-bar{
        padding: 4px;
        border-bottom: 1px solid black;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .wrapper{
        display: flex;
        flex: 1;
        flex-direction: column;
    }
</style>