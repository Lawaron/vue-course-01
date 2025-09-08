import { ref } from "vue"
import { signInWithEmailAndPassword } from "firebase/auth"
import auth from "@/firebase/auth"

const error = ref(null)

const logIn = async (email, password) => {
  error.value = null

  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    error.value = null
    return res
  } catch (err) {
    console.log(err)
    error.value = "Incorrect login credentials"
  }
}

const useLogIn = () => {
  return { error, logIn }
}

export default useLogIn
