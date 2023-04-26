import { initializeApp, type FirebaseApp } from 'firebase/app'
import {
	getAuth,
	connectAuthEmulator,
	signInWithEmailAndPassword,
	type Auth,
	type User,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword
} from 'firebase/auth'
import {
	getFirestore,
	connectFirestoreEmulator,
	Firestore,
	doc,
	collection,
	setDoc,
	type FirestoreDataConverter,
	Timestamp,
	DocumentReference,
	getDocs,
	addDoc,
	CollectionReference,
	QueryDocumentSnapshot,
	onSnapshot,
	type Unsubscribe,
	deleteDoc,
	writeBatch
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA3_psCtBNu52k8UzwPwpqpsb1BYjUC6bI',
	authDomain: 'svelte-notes-44166.firebaseapp.com',
	projectId: 'svelte-notes-44166',
	storageBucket: 'svelte-notes-44166.appspot.com',
	messagingSenderId: '179800492317',
	appId: '1:179800492317:web:b00f948be30d1bc04179f4'
}

const EMULATOR_AUTH_URL = 'http://localhost'
const EMULATOR_AUTH_PORT = 9099
const EMULATOR_FIRESTORE_URL = 'localhost'
const EMULATOR_FIRESTORE_PORT = 8080

abstract class BaseFirestoreEntity {
	public uid: string | null = null

	getFirestoreUid(): string {
		if (!this.uid) throw new Error('Entity has no uid')

		return this.uid
	}

	setFirestoreUid(val: string): this {
		this.uid = val

		return this
	}
}

export class UserNote extends BaseFirestoreEntity {
	constructor(
		public title: string,
		public content: string = '',
		public tags: string[] = [],
		public pinned = false,
		public createdAt: Date = new Date(),
		public updatedAt: Date = new Date()
	) {
		super()
	}

	static converter: FirestoreDataConverter<UserNote> = {
		toFirestore(userNote: UserNote) {
			return {
				title: userNote.title,
				content: userNote.content,
				pinned: userNote.pinned,
				tags: userNote.tags,
				createdAt: Timestamp.fromDate(userNote.createdAt),
				updatedAt: Timestamp.fromDate(userNote.createdAt)
			}
		},
		fromFirestore(snapshot: QueryDocumentSnapshot, options) {
			const data = snapshot.data(options)

			const { title, content, tags, pinned, createdAt, updatedAt } = data

			const userNote = new UserNote(
				title,
				content,
				tags,
				pinned,
				createdAt.toDate(),
				updatedAt.toDate()
			)

			return userNote.setFirestoreUid(snapshot.id)
		}
	}
}

type AuthStateChangedCallback = (user: User | null) => void

class FireBase {
	static instance: FireBase | null = null
	app: FirebaseApp
	auth: Auth
	store: Firestore
	currentUser: User | null = null
	authStateChangedCallbacks: AuthStateChangedCallback[] = []

	notesListenerUnsubscribe: Unsubscribe | null = null

	localEnvironments = ['local', 'development']

	static make(newInstance = false): FireBase {
		if (newInstance || FireBase.instance === null) {
			FireBase.instance = new FireBase()
		}

		return FireBase.instance
	}

	constructor() {
		console.debug('Firebase.constructor()')

		this.app = initializeApp(firebaseConfig)

		this.auth = getAuth(this.app)
		this.store = getFirestore(this.app)

		if (this.localEnvironments.includes(process.env.NODE_ENV ?? '')) this.localMode()

		this.attachListeners()
	}

	private localMode() {
		console.debug('Firebase class entering local mode')
		this.attachEmulators()
	}

	private attachEmulators() {
		connectAuthEmulator(this.auth, `${EMULATOR_AUTH_URL}:${EMULATOR_AUTH_PORT}`)
		connectFirestoreEmulator(this.store, EMULATOR_FIRESTORE_URL, EMULATOR_FIRESTORE_PORT)
	}

	private attachListeners() {
		onAuthStateChanged(this.auth, (user: User | null) => {
			this.currentUser = user

			this.authStateChangedCallbacks.forEach((handler) => {
				handler(user)
			})
		})
	}

	public addOnAuthChangeHandler(handler: (user: User | null) => void) {
		this.authStateChangedCallbacks.push(handler)
	}

	public getCurrentUser(): User {
		if (this.currentUser === null) {
			throw new Error('No current user')
		}

		return this.currentUser
	}

	private notesRef(user: User): CollectionReference<UserNote> {
		return collection(this.store, 'users', user.uid, 'notes').withConverter(UserNote.converter)
	}

	private noteRef(user: User, note: UserNote): DocumentReference<UserNote> {
		return doc(this.store, 'users', user.uid, 'notes', note.getFirestoreUid()).withConverter(
			UserNote.converter
		)
	}

	public async updateUserNote(user: User, note: UserNote): Promise<void> {
		note.updatedAt = new Date()

		await setDoc(this.noteRef(user, note), note, { merge: true })
	}

	public async getUserNotes(user: User): Promise<UserNote[]> {
		console.debug('Firebase.getUserNotes')

		const querySnapshot = await getDocs(this.notesRef(user))
		const userNotes: UserNote[] = []
		querySnapshot.forEach((thisDoc) => {
			userNotes.push(thisDoc.data())
		})

		console.debug(`got ${userNotes.length} notes`, { userNotes })

		return userNotes
	}

	public clearOnUserNotesChanged(): void {
		this.notesListenerUnsubscribe && this.notesListenerUnsubscribe()
	}

	public onUserNotesChanged(user: User, callback: (notes: UserNote[]) => void): void {
		this.notesListenerUnsubscribe = onSnapshot(this.notesRef(user), (querySnapshot) => {
			const notes: UserNote[] = []
			querySnapshot.forEach((doc) => {
				notes.push(doc.data())
			})
			callback(notes)
		})
	}

	public async deleteUser(user: User): Promise<void> {
		// delete user's notes
		await this.deleteAllUserNotes(user)

		// delete user doc
		await deleteDoc(doc(this.store, 'users', user.uid))

		// delete auth user
		return user.delete()
	}

	public async deleteAllUserNotes(user: User): Promise<void> {
		const batch = writeBatch(this.store)

		const notes = await this.getUserNotes( user )

		for(const note of notes){
			batch.delete(this.noteRef(user, note))
		}

		return batch.commit()
	}

	public async deleteUserNote(user: User, note: UserNote): Promise<void> {
		return deleteDoc(this.noteRef(user, note))
	}

	public async createUserNote(
		user: User,
		title: string,
		content = '',
		tags: string[] = []
	): Promise<UserNote> {
		const userNote = new UserNote(title, content, tags)

		const collectionRef = collection(this.store, 'users', user.uid, 'notes').withConverter(
			UserNote.converter
		)

		await addDoc(collectionRef, userNote)

		return userNote
	}

	public async signUp(email: string, password: string): Promise<User> {
		const userCred = await createUserWithEmailAndPassword(this.auth, email, password)

		// this user now needs a base document to store their notes
		const docRef = await doc(this.store, 'users', userCred.user.uid)
		await setDoc(docRef, {
			email: email,
			createdAt: Timestamp.fromDate(new Date())
		})

		const user = userCred.user

		return user
	}

	public async signIn(email: string, password: string): Promise<User | null> {
		const userCred = await signInWithEmailAndPassword(this.auth, email, password)

		return userCred.user ?? null
	}

	public async signOut(): Promise<void> {
		await signOut(this.auth)
	}
}

FireBase.make()

export default FireBase
