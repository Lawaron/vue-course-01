import auth from "@/firebase/auth"

export const requireAuth = (to, from, next) => {
  let user = auth.currentUser

  if (!user) {
    next({ name: "Welcome" })
    return
  }

  next()
}
