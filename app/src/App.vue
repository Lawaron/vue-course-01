<script setup>
  import BooksList from '@/components/BooksList.vue'
  import RealTimeBooks from './components/RealTimeBooks.vue';
</script>

<template>
  <div class="container">
    <div class="row align-items-start">
      <BooksList />
      <RealTimeBooks />
    </div>
</div>
</template>
