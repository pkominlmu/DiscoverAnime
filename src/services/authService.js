import { useState, useEffect } from "react"
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { auth } from "../firebaseConfig"

export function SignIn() {
  return (
    <nav>
      <div className="Welcome"> Welcome! </div>
      <button onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>Sign In</button>
    </nav>
    );
}

export function SignOut() {
  return (
    <nav>
      <div className="Greeting">
        Hello, {auth.currentUser.displayName}! &nbsp;
      </div>
      <div className="SignOutButton">
        <button onClick={() => signOut(auth)}>Sign Out</button>
      </div>
    </nav>
  );
}

export function useAuthentication() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null)
    })
  }, [])
  return user
}