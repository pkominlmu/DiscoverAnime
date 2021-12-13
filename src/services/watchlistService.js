import { db } from "../firebaseConfig"
import { collection, query, getDocs, addDoc, orderBy, limit } from "firebase/firestore"

export async function createWatchlistItem({ title, postedBy }) {
  const data = { title, postedBy }
  const docRef = await addDoc(collection(db, "watchlistItems"), data)
  return { id: docRef.id, ...data }
}

export async function fetchWatchlistItems() {
  const snapshot = await getDocs(
    query(collection(db, "watchlistItems"), orderBy("title", "desc"), limit(10))
  )
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}