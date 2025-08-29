  import db from '@/firebase/config'
  import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
  import { ref } from 'vue'

  const useBooks = () => {
    const books = ref([])
    const booksCollection = collection(db, 'books')

    const getBooks = async () => {
      try {
        const booksSnap = await getDocs(booksCollection)
        books.value = booksSnap.docs
          .map(book => ({ id: book.id, ...book.data() }))
      } catch (err) {
        console.log(err)
      }
    }

    const getSingleBook = async id => {
      try {
        const bookRef = doc(db, 'books', id)
        const bookSnap = await getDoc(bookRef)

        if (bookSnap.exists()) {
          return { id: bookSnap.id, ... bookSnap.data() }
        }

        throw new Error(`${id} azonosítóval nem található könyv!`);
      } catch (err) {
        console.log(err)
      }
    }

    const addBook = async (book) => {
      try {
        const bookRef = await addDoc(booksCollection, book)
        await getBooks()
        return bookRef.id
      } catch (err) {
        console.log(err)
      }
    }

    return { addBook, books, getBooks, getSingleBook }
  }

  export default useBooks
