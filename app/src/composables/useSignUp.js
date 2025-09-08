import { ref } from "vue"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import auth from "@/firebase/auth"

const error = ref(null)

const signUp = async (email, password, displayName) => {
  error.value = null

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)

    if (!res) {
      throw new Error("Could not complete the SignUp")
    }

    await updateProfile(res.user, { displayName })

    error.value = null

    return res
  } catch (err) {
    console.log(err)
    error.value = err.message
  }
}

const useSignUp = () => {
  return { error, signUp }
}

export default useSignUp
