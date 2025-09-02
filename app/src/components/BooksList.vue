<script setup>
  import useBooks from '@/composables/useBooks'

  const { addBook, addTag, books, deleteBook, getBooks, getSingleBook, loading } = useBooks()

  const showBook = async id => {
    const book = await getSingleBook(id);
    if (book) {
      alert(`Könyv adatai:\n${book.author} - ${book.title}\n(${book.tags}).`)
    }
  }

  const createBook = async () => {
    const bookId = await addBook({
      author: 'Frank Herbert',
      title: 'Dune',
      tags: [
        'science fiction'
      ],
    })
    alert(`${bookId} azonosítóval új könyv lett hozzáadva.`)
    await getBooks()
  }

  const removeBook = async id => {
    await deleteBook(id)
    await getBooks()
  }

  const handleNewTag = async (bookId, event) => {
    await addTag(bookId, event.target.value)
    event.target.value = ""
    await getBooks()
  }

  getBooks()
</script>
<template>
  <div class="oszlop">
    <h1>Books<span v-if="loading">|Loading...</span></h1>
    <p>
      <button @click="createBook">Add Book</button>
      <button @click="getBooks">Reload Books</button>
    </p>
    <ol>
      <li v-for="{ author, createdAt, id, tags, title } in books" :key="id">
        <h2>{{ title }}</h2>
        <h3>{{ author }}</h3>
        <h4>{{ tags }}</h4>
        <h5>{{ id }}</h5>
        <h5>{{ createdAt }}</h5>
        <h6>
          <button @click="showBook(id)">Megnéz</button>
          <button @click="removeBook(id)">Töröl</button>
          <input
            type="text"
            name="new_tag"
            id="new-tag"
            @keyup.enter.prevent="handleNewTag(id, $event)"
          />
        </h6>
      </li>
    </ol>
  </div>
</template>
