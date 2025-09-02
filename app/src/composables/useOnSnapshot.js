import db from '@/firebase/config'
import { collection, onSnapshot } from 'firebase/firestore';
import { onMounted, onUnmounted, ref } from 'vue';

const useOnSnapshot = collectionName => {
    const data = ref([])
    const changes = ref([])
    let unsubscribe;

    onMounted(() => {
        const collectionRef = collection(db, collectionName)
        unsubscribe = onSnapshot(collectionRef, snap => {
          data.value = snap.docs.map(doc => ({
            ...doc.data(),
             id: doc.id
          }))

          changes.value = snap.docChanges().map(change =>({
            action: change.type,
            docId: change.doc.id
          }))
        })
    })

    onUnmounted(() => {
      if (unsubscribe) {
        unsubscribe()
      }
    })

    return { data, changes }
}


export default useOnSnapshot
