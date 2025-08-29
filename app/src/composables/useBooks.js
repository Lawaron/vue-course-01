  import db from '@/firebase/config'
  import { collection, doc, getDoc, getDocs } from "firebase/firestore";
  import { ref } from 'vue'

  const useBooks = () => {
    const books = ref([])

    const getBooks = async () => {
      try {
        const booksRef = collection(db, 'books')
        const booksSnapshot = await getDocs(booksRef)

        books.value = booksSnapshot.docs
          .map(book => ({ id: book.id, ...book.data() }))
      } catch (err) {
        console.log(err)
      }
    }

    const getSingleBook = async id => {
      try {
        const bookRef = doc(db, 'books', id)
        const bookSnapshot = await getDoc(bookRef)

        if (bookSnapshot.exists()) {
          return { id: bookSnapshot.id, ... bookSnapshot.data() }
        }

        throw new Error(`${id} azonosítóval nem található könyv!`);
      } catch (err) {
        console.log(err)
      }
    }

    return { books, getBooks, getSingleBook }
  }

  export default useBooks
