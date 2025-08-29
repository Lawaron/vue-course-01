<script setup>
  import getBooks from '@/composables/getBooks'

  const { books, load } = getBooks()

  load()
</script>
<template>
  <ol>
    <li v-for="{ id, author, title, tags } in books" :key="id">
      <h2>{{ title }}</h2>
      <h3>{{ author }}</h3>
      <h4>{{ tags }}</h4>
      <h5>{{ id }}</h5>
    </li>
  </ol>
</template>
