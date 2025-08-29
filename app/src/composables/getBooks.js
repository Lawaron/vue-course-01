  import db from '@/firebase/config'
  import { collection, getDocs } from "firebase/firestore";
  import { ref } from 'vue'

  const getBooks = () => {
    const booksRef = collection(db, 'books')
    const books = ref([])

    const load = async () => {

      try {
        const querySnapshot = await getDocs(booksRef)
        books.value = querySnapshot.docs
          .map(book => ({ id: book.id, ...book.data() }))
      } catch (err) {
        console.log(err)
      }
    }

    return { books, load }
  }

  export default getBooks
