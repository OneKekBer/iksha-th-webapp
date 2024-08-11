// firebase-config.ts (note the change from .js to .ts)

import { initializeApp } from 'firebase/app'
import { getDatabase, Database } from 'firebase/database'
import { getStorage, FirebaseStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
	databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL as string,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
	messagingSenderId: import.meta.env
		.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
	appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db: Database = getDatabase(app)
export const storage: FirebaseStorage = getStorage(app)
