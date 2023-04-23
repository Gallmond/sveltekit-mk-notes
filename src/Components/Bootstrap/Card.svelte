<script lang="ts">
	export let styles: Record<string, string> = {}

	let styleString = ''

	const setStyleString = () => {
		const init: string[] = []
		styleString = Object.entries(styles)
			.reduce((carry, keyVal) => {
				const [key, val] = keyVal
				carry.push(`${key}: ${val}`)

				return carry
			}, init)
			.join('; ')
	}

	$: {
		styles
		setStyleString()
	}
</script>

<div class="card" style={styleString}>
	<div class="card-body">
		<slot>Card body</slot>
	</div>
</div>

<style>
	.card-body {
		padding: 0.5rem;
	}
</style>
