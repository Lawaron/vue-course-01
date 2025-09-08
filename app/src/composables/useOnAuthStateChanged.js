import { ref } from "vue"
import { onAuthStateChanged } from "firebase/auth"
import auth from "@/firebase/auth"

const useOnAuthStateChanged = () => {
  const user = ref(auth.currentUser)

  onAuthStateChanged(auth, _user => {
    console.log("User state change. Current user is:", _user)
    user.value = _user
  })

  return { user }
}

export default useOnAuthStateChanged
