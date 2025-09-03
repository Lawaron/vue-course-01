import db from "@/firebase/firestore"
import { ref } from "vue"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  Timestamp,
} from "firebase/firestore"

export const useFirestore = (collectionName) => {
  const loading = ref(false)
  const error = ref(null)

  const getCollection = async (q) => {
    loading.value = true
    error.value = null
    try {
      const colRef = collection(db, collectionName)
      const snapshot = await getDocs(q || colRef)
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (err) {
      console.error(err)
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const getDocument = async (id) => {
    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, collectionName, id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
      }
      throw new Error(`Dokumentum nem található az alábbi azonosítóval: ${id}`)
    } catch (err) {
      console.error(err)
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const addDocument = async (data) => {
    loading.value = true
    error.value = null
    try {
      const colRef = collection(db, collectionName)
      const docRef = await addDoc(colRef, {
        ...data,
        createdAt: Timestamp.now(),
      })
      return docRef.id
    } catch (err) {
      console.error(err)
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const deleteDocument = async (id) => {
    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, collectionName, id)
      await deleteDoc(docRef)
    } catch (err) {
      console.error(err)
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const updateDocument = async (id, data) => {
    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, collectionName, id)
      await updateDoc(docRef, data)
    } catch (err) {
      console.error(err)
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const updateArrayUnion = async (id, field, value) => {
    return updateDocument(id, { [field]: arrayUnion(value) })
  }

  const updateArrayRemove = async (id, field, value) => {
    return updateDocument(id, { [field]: arrayRemove(value) })
  }

  return {
    loading,
    error,
    getCollection,
    getDocument,
    addDocument,
    deleteDocument,
    updateDocument,
    updateArrayUnion,
    updateArrayRemove
  }
}

export default useFirestore
