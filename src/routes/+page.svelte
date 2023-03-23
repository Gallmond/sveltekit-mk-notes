<script lang="ts">
    import Left from "../Components/Left.svelte";
	import Right from "../Components/Right.svelte";
</script>

<div class="wrapper">
    <div class="left-container"><Left /></div>
    <div class="right-container"><Right /></div>
</div>

<style>
    .left-container{
        min-width: 350px;
        flex: 2;
    }
    .right-container{
        flex: 8;
    }

    .wrapper{
        display: flex;
        flex: 1;
        height: 100%;
    }
</style>

