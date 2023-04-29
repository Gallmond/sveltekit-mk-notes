import type { User } from 'firebase/auth'
import { writable } from 'svelte/store'
import FireBase, { type UserNote } from '../app/Firebase'

const user = writable<User | null>(null)

const notes = writable<UserNote[]>([])

const fb = FireBase.make()

fb.addOnAuthChangeHandler(async (changedUser) => {
	user.set(changedUser)

	if (changedUser === null) {
		notes.set([])
		fb.clearOnUserNotesChanged()
	} else {
		notes.set(await fb.getUserNotes(changedUser))
		fb.onUserNotesChanged(changedUser, (changedNotes) => {
			notes.set(changedNotes)
		})
	}
})

export { user, notes }
