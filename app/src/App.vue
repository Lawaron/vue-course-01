<script setup>
  import BooksList from '@/components/BooksList.vue'
  import RealTimeBooks from './components/RealTimeBooks.vue';
</script>

<template>
  <div class="container">
    <BooksList />
    <RealTimeBooks />
</div>
</template>
<style>
  .container {
    display: flex;
    gap: 10px;
  }

  .oszlop {
    flex: 1;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
</style>
