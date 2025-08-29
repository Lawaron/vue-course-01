<script setup>
  import useBooks from '@/composables/useBooks'

  const { books, getBooks, getSingleBook } = useBooks()

  const showBook = async id => {
    const book = await getSingleBook(id);
    if (book) {
      console.log(book);
    }
  }

  getBooks()
</script>
<template>
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
