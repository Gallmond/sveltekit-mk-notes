<script lang="ts">
    import Search from "./Bootstrap/Search.svelte";
    import Select from "./Bootstrap/Select.svelte";

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

</script>

<div class="wrapper">
    
    <div>
        <Search bind:input={searchValue} />
    </div>

    <div>
        <Select values={selectValues} selected={selectDefault} label='order by'/>
    </div>

    <div>
        This is the list of items
    </div>


</div>

<style>
    .flex-1{
        display: flex;
        flex: 1;
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