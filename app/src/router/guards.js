import auth from "@/firebase/auth"
import { onAuthStateChanged } from 'firebase/auth'

export const requireAuth = async (to, from, next) => {
  await new Promise(resolve => onAuthStateChanged(auth, resolve))

  const { currentUser } = auth

  currentUser ? next() : next({ name: 'Welcome' })
}
