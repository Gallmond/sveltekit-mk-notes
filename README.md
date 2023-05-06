# SvelteKit Markdown Notes

A simple static web app for editing / reading notes in markdown.

Live version <a href="https://svelte-notes-44166.web.app/" target="_blank">here</a>

nb: registered email address and note text are not encrypted. Don't put anything
sensitive in this project.

# About

Notes are rendered in realtime and with toggle-able edit / read panels.

Mostly for practice with Sveltekit and Firebase.

# Technology

Written in Typescript in the SvelteKit framework.

Markdown parser through the `marked` npm package.

Authentication, Hosting, and document storage through Google `firebase`.

# Usage

- <kbd>Create note</kbd> Create new note
- <kbd>✏️</kbd> Toggle edit pane
- <kbd>👁️</kbd> Toggle read pane
- <kbd>🏷️</kbd> Toggle tags input (click tag itself to remove)
- <kbd>📌</kbd> Pin current note (top bar) / Unpin note (note in list)
- <kbd>⚙️</kbd> Show settings pane
- <kbd>👤</kbd> Show account pane

Search bar will filter all notes to include those where the title or tags contain the searched string*.

Order By drop down will order notes based on the given selection*.

\* Same filter is applied to pinned notes, but they are always kept at the top.
