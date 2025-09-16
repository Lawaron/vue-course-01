import { ref } from 'vue'
import { signOut } from 'firebase/auth'
import auth from '@/firebase/auth'

const useLogout = () => {
  const error = ref(null)
  const isPending = ref(false)

  const logout = async () => {
    isPending.value = true
    error.value = null
    try {
      await signOut(auth)
    } catch (err) {
      error.value = err.message
    } finally {
      isPending.value = false
    }
  }

  return { error, isPending, logout }
}

export default useLogout
