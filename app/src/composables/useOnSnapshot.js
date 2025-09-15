import { ref, watchEffect } from "vue"
import { collection, orderBy, query, onSnapshot } from "firebase/firestore"
import firestore from "@/firebase/firestore"

const useOnSnapshot = (collectionName, order = "createdAt") => {
  const documents = ref(null)
  const error = ref(null)

  const collectionRef = query(
    collection(firestore, collectionName),
    orderBy(order)
  )

  const unsubscribe = onSnapshot(collectionRef, snapShot => {
    documents.value = snapShot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))
  }, err => {
      console.error(err)
      documents.value = null
      error.value = "Could not fetch data"
  })

  watchEffect(onInvalidate => onInvalidate(() => unsubscribe()))

  return { documents, error }
}

export default useOnSnapshot
