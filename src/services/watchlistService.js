import { db } from "../firebaseConfig"
import { collection, query, getDocs, addDoc, orderBy, limit } from "firebase/firestore"

export async function createWatchlistItem({ mal_id, score, rated, episodes, link_url, image_url, synopsis, title }) {
  const data = {mal_id, score, rated, episodes, link_url, image_url, synopsis, title }
  const docRef = await addDoc(collection(db, "watchlistItems"), data)
  return { id: docRef.id, ...data }
}

export async function fetchWatchlistItems() {
  const snapshot = await getDocs(
    query(collection(db, "watchlistItems"), orderBy("date", "desc"), limit(10))
  )
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}