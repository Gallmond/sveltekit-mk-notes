<script lang="ts">
	import Badge from "./Bootstrap/Badge.svelte";
    import Card from "./Bootstrap/Card.svelte";

    export let title = 'This is the title'
    export let date = 'this is the date'
    export let tags = ['tag']


</script>

<Card>
    <div class="list-item">
        <div class="bit">
            <p class="title-container">{title}</p>
            <p class="date-container">{date}</p>
        </div>
    
        <div class="bit">
            <p>📌</p>
            <div class="tags-container">
                {#each tags as tag, i}
                    <div class="tag-container"><Badge>{tag}</Badge></div>
                {/each}
            </div>
        </div>
    </div>
</Card>

<style>
    p{
        margin-bottom: 0px;
    }

    .tags-container{
        display: flex;
        flex-direction: row;
    }

    .tag-container{
        margin-left: 0.25em;
    }

    .date-container{
        color: rgba(0, 0, 0, 0.5);
        font-size: 0.75em;
        white-space: nowrap;
    }

    .title-container{
        font-size: 2em;
    }

    .list-item{
        display: flex;
        flex-direction: column;
    }

    .bit{
        display: flex;
        justify-content: space-between;
    }
    .bit>p, .bit>div{
        width: fit-content;
    }

    .list-item:nth-child(1){
        flex:2
    }
    .list-item:nth-child(2){
        flex:1
    }

</style>

