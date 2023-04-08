import { initializeApp, type FirebaseApp } from 'firebase/app';
import {
	getAuth,
	connectAuthEmulator,
	signInWithEmailAndPassword,
	type Auth,
	type User,
	signOut,
	onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator, Firestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA3_psCtBNu52k8UzwPwpqpsb1BYjUC6bI',
	authDomain: 'svelte-notes-44166.firebaseapp.com',
	projectId: 'svelte-notes-44166',
	storageBucket: 'svelte-notes-44166.appspot.com',
	messagingSenderId: '179800492317',
	appId: '1:179800492317:web:b00f948be30d1bc04179f4'
};

const EMULATOR_AUTH_URL = 'http://localhost';
const EMULATOR_AUTH_PORT = 9099;
const EMULATOR_FIRESTORE_URL = 'localhost';
const EMULATOR_FIRESTORE_PORT = 8080;

class FireBase {
	static instance: FireBase | null = null;
	app: FirebaseApp;
	auth: Auth;
	store: Firestore;
	currentUser: User | null = null;

	static make(): FireBase {
		if (FireBase.instance === null) {
			FireBase.instance = new FireBase();
		}

		return FireBase.instance;
	}

	constructor() {
		console.debug('Firebase.constructor()');

		this.app = initializeApp(firebaseConfig);

		this.auth = getAuth(this.app);
		this.store = getFirestore(this.app);

		if (process.env.NODE_ENV === 'local') {
			this.attachEmulators();
		}

		this.attachListeners();
	}

	private attachEmulators() {
		connectAuthEmulator(this.auth, `${EMULATOR_AUTH_URL}:${EMULATOR_AUTH_PORT}`);
		connectFirestoreEmulator(this.store, EMULATOR_FIRESTORE_URL, EMULATOR_FIRESTORE_PORT);
	}

	private attachListeners() {
		onAuthStateChanged(this.auth, (user: User | null) => {
			this.currentUser = user;
		});
	}

	public async signIn(email: string, password: string): Promise<User | null> {
		const user = await signInWithEmailAndPassword(this.auth, email, password);

		return user.user ?? null;
	}

	public async signOut(): Promise<void> {
		await signOut(this.auth);
	}
}

FireBase.make();

export default FireBase;
