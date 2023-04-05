<script lang="ts">
	import LightButton from "./Bootstrap/LightButton.svelte"
    import {marked} from 'marked'
	import Tags from "./Tags.svelte";
	import MarkdownEditor from "./MarkdownEditor.svelte";
	import MarkdownPreview from "./MarkdownPreview.svelte";
	import Settings from "./Settings.svelte";
	import Account from "./Account.svelte";

    let contentContainerState = 0
    
    let inputText = ''
    let generatedMarkdown = ''

    $:{
        generatedMarkdown = marked(inputText)
        inputTextChanged(inputText)
    } 

    const togglePin = () => console.log('togglePin')
    const sendToTrash = () => console.log('sendToTrash')

    const inputTextChanged = (text: string) => {
        console.log('inputTextChanged', {text})
    }

    let tagsActive = false
    let tags = [ 'birthday', 'recipe', 'note']
    const tagsChanged = (tags: Tag[]) => {
        console.log('tags have changed', {tags})
    }

    let showSettings = false // TEMP
    const toggleSettings = () => {
        showAccount = false
        showSettings = !showSettings
    }

    let showAccount = true
    const toggleAccount = () => {
        showSettings = false
        showAccount = !showAccount
    }

</script>

<div class="wrapper">

    <div class="top-bar">
        
        <div class="buttons-bar">
            <div class="buttons-container">
                <LightButton on:click={() => {
                    contentContainerState = (contentContainerState + 1) % 3
                }}>✏️/👁️</LightButton>  
                <LightButton active={tagsActive} on:click={() => {tagsActive = !tagsActive}}>🏷️</LightButton>  
                <LightButton on:click={togglePin}>📌</LightButton>  
                <LightButton on:click={sendToTrash}>🗑️</LightButton> 
            </div>
        
            <div class="buttons-container">
                <LightButton active={showSettings} on:click={toggleSettings}>⚙️</LightButton>  
                <LightButton active={showAccount} on:click={toggleAccount}>👤</LightButton>  
            </div>
        </div>


        <div class="utility-bar">
            {#if tagsActive}
                <Tags tags={tags} onChange={tagsChanged} />
            {/if}
        </div>
        
    </div>

    <div class="content-container">

        {#if showAccount && !showSettings}
            <Account />
        {/if}

        {#if !showAccount && showSettings}
            <Settings />
        {/if}

        {#if !showAccount && !showSettings && [0,1].includes(contentContainerState) }
            <MarkdownEditor bind:value={inputText}/>
        {/if}

        {#if !showAccount && !showSettings && [0,2].includes(contentContainerState) }
            <MarkdownPreview html={generatedMarkdown} />
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
        flex-direction: column;
    }

    .buttons-bar{
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

    .utility-bar{
        display: flex;
        flex-direction: row;
        justify-content: left;
    }

</style>