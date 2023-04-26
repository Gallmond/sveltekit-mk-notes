<script lang="ts">
	export let SAVE_DELAY_MS = 666
</script>

<div class="prompt">
	<p>Select a note to edit or preview</p>
	<p>Notes are saved automatically after {SAVE_DELAY_MS / 1000} seconds of inactivity</p>
	<p>Use the search bar to search by note title or tag</p>
	<p>Use tags to group together notes</p>
	<h2>Hotkeys</h2>
	<table class="table">
		<thead>
			<tr>
				<th>Key</th><th>Action</th>
			</tr>
		</thead>
		<tbody>
			<tr><td><kbd>Ctrl</kbd> + <kbd>e</kbd></td><td>Toggle edit pane</td></tr>
			<tr><td><kbd>Ctrl</kbd> + <kbd>r</kbd></td><td>Toggle read pane</td></tr>
			<tr><td><kbd>Ctrl</kbd> + <kbd>c</kbd></td><td>Create new note</td></tr>
		</tbody>
	</table>
</div>

<style>
	.prompt {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.prompt > p {
		text-align: center;
	}
</style>
