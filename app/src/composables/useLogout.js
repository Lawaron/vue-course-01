import { ref } from "vue"
import { signOut } from "firebase/auth"
import auth from "@/firebase/auth"

const error = ref(null)

const logout = async () => {
  try {
    await signOut(auth)
  } catch (err) {
    console.log(err)
    error.value = err.message
  }
}

const useLogout = () => {
  return { error, logout }
}

export default useLogout
