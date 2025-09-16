import { ref } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '@/firebase/auth'

const useLogin = () => {
  const error = ref(null)
  const isPending = ref(false)

  const login = async (email, password) => {
    isPending.value = true
    error.value = null

    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      return res
    } catch (err) {
      error.value = 'Incorrect Login credentials'
    } finally {
      isPending.value = false
    }
  }
  return { error, isPending, login }
}

export default useLogin
