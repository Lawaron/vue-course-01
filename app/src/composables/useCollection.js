import { ref } from "vue"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import firestore from "@/firebase/firestore"

const useCollection = collectionName =>{
  const error = ref(null)

  const addDocument = async document => {
    error.value = null

    try {
      const collectionRef = collection(firestore, collectionName)
      await addDoc(collectionRef, {
        ...document,
        createdAt: Timestamp.now()
      })
    } catch (err) {
      console.error(err)
      error.value = "Could not send the message"
    }
  }

  return { error, addDocument }
}

export default useCollection
