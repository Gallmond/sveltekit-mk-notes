<script lang="ts">
	import ListItem from './ListItem.svelte'

	import Search from './Bootstrap/Search.svelte'
	import Select from './Bootstrap/Select.svelte'
	import Faker from '../app/faker'

	type SelectEnum = 'title' | 'createdDesc' | 'createdAsc'

	const selectValues = {
		title: 'title',
		createdDesc: 'created (desc)',
		createdAsc: 'created (asc)'
	}
	let selectDefault: SelectEnum = 'title'
	$: {
		sortListItems(selectDefault)
	}

	let searchValue: string
	$: {
		console.log('searchValue changed', searchValue)
		filterListItems(searchValue)
	}

	interface ListItemData {
		title: string
		date: string
		tags: string[]
	}
	const listItems: ListItemData[] = []
	for (let i = 0, l = 5; i < l; i++) {
		listItems.push({
			title: Faker.title(),
			date: Faker.date(),
			tags: Faker.tags(4)
		})
	}

	let listItemsDisplay: ListItemData[] = listItems
	const sortListItems = (sortBy: SelectEnum) => {
		listItemsDisplay = listItemsDisplay.sort((a, b) => {
			if (sortBy === 'title') {
				return a.title < b.title ? -1 : 1
			}

			if (sortBy === 'createdAsc') {
				return a.date.valueOf() < b.date.valueOf() ? -1 : 1
			}

			if (sortBy === 'createdDesc') {
				return a.date.valueOf() > b.date.valueOf() ? -1 : 1
			}

			return 0
		})
	}

	const filterListItems = (filterStr: string) => {
		if (filterStr === '' || filterStr === undefined) {
			listItemsDisplay = listItems
			return
		}

		const filterLower = filterStr.toLowerCase()
		const temp = listItems.reduce<ListItemData[]>((carry, current) => {
			if (current.title.toLowerCase().includes(filterLower)) {
				carry.push(current)
			}

			return carry
		}, [])

		listItemsDisplay = temp
	}
</script>

<div class="wrapper">
	<div>
		<Search bind:input={searchValue} />
	</div>

	<div>
		<Select
			values={selectValues}
			bind:selected={selectDefault}
			on:change={(e) => {
				console.log('select changed', { e })
			}}
			label="order by"
		/>
	</div>

	<div class="list-container">
		{#each listItemsDisplay as listItem, i}
			<div><ListItem date={listItem.date} title={listItem.title} tags={listItem.tags} /></div>
		{/each}
	</div>
</div>

<style>
	.list-container > div {
		margin-bottom: 0.75em;
	}

	.list-container {
		flex: 1;
		overflow-y: auto;
	}

	.wrapper {
		display: flex;
		flex: 1;
		flex-direction: column;
		height: 100%;

		border-right: 1px solid black;
		padding: 4px;
	}
</style>
