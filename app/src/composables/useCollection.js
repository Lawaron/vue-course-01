import { ref } from 'vue'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import firestore from '@/firebase/firestore'

const useCollection = (collectionName) => {
  const error = ref(null)
  const isPending = ref(false)

  const addDocument = async (document) => {
    error.value = null
    isPending.value = true

    try {
      const collectionRef = collection(firestore, collectionName)
      await addDoc(collectionRef, {
        ...document,
        createdAt: Timestamp.now(),
      })
    } catch (err) {
      error.value = 'Could not send the message'
    } finally {
      isPending.value = false
    }
  }

  return { error, isPending, addDocument }
}

export default useCollection
