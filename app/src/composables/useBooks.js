import { dateTimeformatter } from "@/utils/formatter"
import { useFirestore } from "./useFirestore"
import { ref, watch } from "vue"
import db from "@/firebase/firestore"
import { collection, orderBy, query } from "firebase/firestore"

export const useBooks = (emit = null) => {
  const {
    loading,
    error,
    getCollection,
    getDocument,
    addDocument,
    deleteDocument,
    updateArrayUnion,
    updateArrayRemove,
  } = useFirestore("books")

  const books = ref([])

  const mapBook = book => {
    const { author, createdAt, tags, title } = book

    return {
      id: book.id,
      author,
      title,
      tags,
      createdAt: createdAt ? dateTimeformatter.format(createdAt.toDate()) : null,
    }
  }

  const getBooks = async () => {
    const q = query(collection(db, "books"), orderBy("title", "asc"))
    const fetchedBooks = await getCollection(q)
    if (fetchedBooks) {
      books.value = fetchedBooks.map(mapBook)
    }
  }

  const getSingleBook = async (id) => {
    const book = await getDocument(id)
    return book ? { id: book.id, ...book } : null
  }

  const addBook = async (book) => {
    return await addDocument(book)
  }

  const deleteBook = async (id) => {
    await deleteDocument(id)
  }

  const addTag = async (id, tag) => {
    await updateArrayUnion(id, "tags", tag)
  }

  const deleteTag = async (id, tag) => {
    await updateArrayRemove(id, "tags", tag)
  }

  if (emit) {
    watch(loading, newValue => {
      emit("update:loading", newValue)
    }, { immediate: true })
  }

  return {
    books,
    loading,
    error,
    getBooks,
    getSingleBook,
    addBook,
    deleteBook,
    addTag,
    deleteTag
  }
}

export default useBooks
