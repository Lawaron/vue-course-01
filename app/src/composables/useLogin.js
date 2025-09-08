import { ref } from "vue"
import { signInWithEmailAndPassword } from "firebase/auth"
import auth from "@/firebase/auth"

const useLogin = () => {
  const error = ref(null)

  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      return res
    } catch (err) {
      console.log(err)
      error.value = "Incorrect Login credentials"
    }
  }

  return { error, login }
}

export default useLogin
