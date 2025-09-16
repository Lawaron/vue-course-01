import { ref } from 'vue'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import auth from '@/firebase/auth'

const useSignUp = () => {
  const error = ref(null)
  const isPending = ref(false)

  const signUp = async (email, password, displayName) => {
    isPending.value = true
    error.value = null
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      if (!res) {
        throw new Error('Could not complete the SignUp')
      }
      await updateProfile(res.user, { displayName })
      return res
    } catch (err) {
      error.value = err.message
    } finally {
      isPending.value = false
    }
  }
  return { error, isPending, signUp }
}

export default useSignUp
