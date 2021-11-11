import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCo6nZTYFtJit0CPqJfcnLuiFvW9jJB0eQ",
  authDomain: "blog-6134e.firebaseapp.com",
  projectId: "blog-6134e",
  storageBucket: "blog-6134e.appspot.com",
  messagingSenderId: "913333234640",
  appId: "1:913333234640:web:eac6db45b74ea419d9a7d5"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)