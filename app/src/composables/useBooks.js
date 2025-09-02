  import { dateTimeformatter } from "@/utils/formatter"
  import db from "@/firebase/firestore"
  import { addDoc, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, updateDoc, Timestamp } from "firebase/firestore";
  import { ref } from "vue"

  const useBooks = () => {
    const books = ref([])
    const loading = ref(false)

    const mapBook = book => {
      const { author, createdAt, tags, title } = book.data()

      return {
        id: book.id,
        author,
        title,
        tags,
        createdAt: dateTimeformatter.format(createdAt.toDate())
      }
    }

    const getBooks = async () => {
      loading.value = true
      try {
        const booksCollection = collection(db, "books")
        // const q = query(booksCollection, orderBy("createdAt", "desc"))
        const q = query(booksCollection, orderBy("title", "asc"))
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
        const bookRef = doc(db, "books", id)
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
        const booksCollection = collection(db, "books")
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
        const bookRef = doc(db, "books", id)
        await deleteDoc(bookRef)
      } catch (err) {
        console.log(err)
      } finally {
        loading.value = false
      }
    }

    const addTag = async (id, tag) => {
      loading.value = true
      try {
        const bookRef = doc(db, "books", id)
        await updateDoc(bookRef, {
          tags: arrayUnion(tag)
        })
      } catch (err) {
        console.log(err)
      } finally {
        loading.value = false
      }
    }

    return { addBook, addTag, books, deleteBook, getBooks, getSingleBook, loading }
  }

  export default useBooks
