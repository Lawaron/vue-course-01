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
  <div class="col">
    <div class="d-flex justify-content-start align-items-center">
      <h1>Books</h1>
      <span class="spinner-border text-info m-2" role="status"  v-if="loading">
        <span class="visually-hidden">Loading...</span>
      </span>
    </div>
    <p>
      <create-book
        :disabled="loading"
        @success="handleBookCreated"
        @failure="message"
        ></create-book>
      <button
        class="btn btn-outline-secondary btn-sm m-1"
        @click="getBooks"
        :disabled="loading"
        >Reload Books</button>
    </p>
    <ol class="list-group">
      <li v-for="book in books" :key="book.id" class="list-group-item">
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
