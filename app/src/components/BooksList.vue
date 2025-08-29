<script setup>
  import useBooks from '@/composables/useBooks'

  const { addBook, books, getBooks, getSingleBook } = useBooks()

  const showBook = async id => {
    const book = await getSingleBook(id);
    if (book) {
      console.log(book);
    }
  }

  const createBook = async () => {
    const bookId = await addBook({ author: 'Frank Herbert', title: 'Dune', tags: ['scienceFiction'] })
    alert(`${bookId} azonosítóval új könyv lett hozzáadva.`)
  }

  getBooks()
</script>
<template>
  <div><button @click="createBook">Add Book</button></div>
  <ol>
    <li v-for="{ id, author, title, tags } in books" :key="id">
      <h2>{{ title }}</h2>
      <h3>{{ author }}</h3>
      <h4>{{ tags }}</h4>
      <h5>{{ id }}</h5>
      <h6><button @click="showBook(id)">Megnéz</button></h6>
    </li>
  </ol>
</template>
