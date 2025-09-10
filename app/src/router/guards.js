import auth from "@/firebase/auth"
import { onAuthStateChanged } from "firebase/auth"

async function getUser() {
  await new Promise(resolve => onAuthStateChanged(auth, resolve))

  const { currentUser } = auth

  return currentUser
}

export const requireAuth = async (to, from, next) => {
  const user = await getUser()

  user ? next() : next({ name: "Welcome" })
}

export const requireNoAuth = async (to, from, next) => {
  const user = await getUser()

  user ? next({ name: "ChatRoom" }) : next()
}
