<script setup>
  import useBooks from '@/composables/useBooks'
  import CreateBook from './CreateBook.vue';
  import BookCard from "./BookCard.vue";

  const { books, getBooks, loading } = useBooks()

  const handleBookCreated = async msg => {
    message(msg)
    await getBooks()
  }

  const message = msg => alert(msg)

  getBooks()
</script>
<template>
  <div class="oszlop">
    <h1>Books<span v-if="loading">|Loading...</span></h1>
    <p>
      <create-book
        :disabled="loading"
        @success="handleBookCreated"
        @failure="message"
        ></create-book>
      <button
        @click="getBooks"
        :disabled="loading"
        >Reload Books</button>
    </p>
    <ol>
      <li v-for="book in books" :key="book.id">
        <book-card
          v-model:loading="loading"
          v-bind="book"
          @success="getBooks"
          @failure="message"
          ></book-card>
      </li>
    </ol>
  </div>
</template>
