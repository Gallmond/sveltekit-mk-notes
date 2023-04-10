import type { User } from 'firebase/auth'
import { writable } from 'svelte/store'
import FireBase from '../app/Firebase'

const user = writable<User | null>(null)

FireBase.make().addOnAuthChangeHandler((changedUser) => {
	user.set(changedUser)
})

//TODO how to subscribe to note collection changes

export default user
