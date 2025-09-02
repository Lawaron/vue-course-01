  import db from '@/firebase/config'
  import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, onSnapshot, query, Timestamp } from "firebase/firestore";
  import { ref } from 'vue'

  const useBooks = () => {
    const books = ref([])
    const loading = ref(false)

    const mapBook = book => {
      const { author, createdAt, tags, title } = book.data()
      const formatter = new Intl.DateTimeFormat('hu-HU',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })

      return {
        id: book.id,
        author,
        title,
        tags,
        createdAt: formatter.format(createdAt.toDate())
      }
    }

    const getBooks = async () => {
      loading.value = true
      try {
        const booksCollection = collection(db, 'books')
        // const q = query(booksCollection, orderBy('createdAt', 'desc'))
        const q = query(booksCollection, orderBy('title', 'asc'))
        const booksSnap = await getDocs(q)
        books.value = booksSnap.docs.map(mapBook)
      } catch (err) {
        console.log(err)
      } finally {
        loading.value = false
      }
    }

    const getSingleBook = async id => {
      loading.value = true
      try {
        const bookRef = doc(db, 'books', id)
        const bookSnap = await getDoc(bookRef)

        if (bookSnap.exists()) {
          return { id: bookSnap.id, ... bookSnap.data() }
        }

        throw new Error(`${id} azonosítóval nem található könyv!`);
      } catch (err) {
        console.log(err)
      } finally {
        loading.value = false
      }
    }

    const addBook = async book => {
      loading.value = true
      try {
        const booksCollection = collection(db, 'books')
        const bookRef = await addDoc(booksCollection, {
          ...book,
          createdAt: Timestamp.now()
        })
        return bookRef.id
      } catch (err) {
        console.log(err)
      } finally {
        loading.value = false
      }
    }

    const deleteBook = async id => {
      try {
        const bookRef = doc(db, 'books', id)
        await deleteDoc(bookRef)
      } catch (err) {
        console.log(err)
      } finally {
        loading.value = false
      }
    }

    return { addBook, books, deleteBook, getBooks, getSingleBook, loading }
  }

  export default useBooks
