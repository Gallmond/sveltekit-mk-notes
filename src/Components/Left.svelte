<script lang="ts">
  import ListItem from './ListItem.svelte';

    import Search from "./Bootstrap/Search.svelte";
    import Select from "./Bootstrap/Select.svelte";
	import Faker from '../app/faker';

    const selectValues = {
        'title' : 'title',
        'createdDesc' : 'created (desc)',
        'createdAsc' : 'created (asc)',
    }
    const selectDefault = 'title'

    let searchValue: string
    $: {
        console.log('searchValue changed', searchValue)
    }

    interface ListItemData{
        title: string,
        date: string,
        tags: string[]
    }
    const listItems: ListItemData[] = [];
    for(let i=0, l=5; i<l; i++){
        listItems.push({
            title: Faker.title(),
            date: Faker.date(),
            tags: Faker.tags(4)
        })
    }

</script>

<div class="wrapper">
    
    <div>
        <Search bind:input={searchValue} />
    </div>

    <div>
        <Select values={selectValues} selected={selectDefault} label='order by'/>
    </div>

    <div class="list-container">
        {#each listItems as listItem, i}
            <div><ListItem 
                date={listItem.date}
                title={listItem.title}
                tags={listItem.tags}
            /></div>    
        {/each}
    </div>


</div>

<style>

    .list-container>div{
        margin-bottom: 0.75em;
    }

    .list-container{
        flex: 1;
        overflow-y: auto;
    }

    .wrapper{
        display: flex;
        flex: 1;
        flex-direction: column;
        height: 100%;

        border-right: 1px solid black;
        padding: 4px;
    }
</style>