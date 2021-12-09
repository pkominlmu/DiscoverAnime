import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB4Qf_yIgZlg0DEQlfx2v4Mj9Hm5FUlSHU",
  authDomain: "webappfinal-efb92.firebaseapp.com",
  projectId: "webappfinal-efb92",
  storageBucket: "webappfinal-efb92.appspot.com",
  messagingSenderId: "1074176031466",
  appId: "1:1074176031466:web:a7b112b8a609e63a31f593"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

