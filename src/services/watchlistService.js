import { db } from "../firebaseConfig"
import { collection, query, getDocs, addDoc, orderBy, limit } from "firebase/firestore"

export async function createWatchlistItem({ title, mal_id, postedBy }) {
  const data = { title, mal_id, postedBy }
  const docRef = await addDoc(collection(db, "watchlistItems"), data)
  return { id: docRef.id, ...data }
}

export async function fetchWatchlistItems() {
  const snapshot = await getDocs(
    query(collection(db, "watchlistItems"), orderBy("title", "asc"), limit(10))
  )
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}