import { ref } from "vue"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import auth from "@/firebase/auth"

const useSignUp = () => {
  const error = ref(null)

  const signUp = async (email, password, displayName) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      if (!res) {
        throw new Error("Could not complete the SignUp")
      }

      await updateProfile(res.user, { displayName })

      return res
    } catch (err) {
      console.log(err)
      error.value = err.message
    }
  }

  return { error, signUp }
}

export default useSignUp
