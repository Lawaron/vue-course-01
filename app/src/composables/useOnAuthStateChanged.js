import { ref, watchEffect } from "vue"
import { onAuthStateChanged } from "firebase/auth"
import auth from "@/firebase/auth"

const useOnAuthStateChanged = () => {
  const user = ref(auth.currentUser)

  const unsubscribe = onAuthStateChanged(auth, _user => {
    user.value = _user
  })

  // watchEffect(onInvalidate => onInvalidate(() => unsubscribe()))

  return { user }
}

export default useOnAuthStateChanged
