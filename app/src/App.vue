<template>
  <Navbar />
  <div class="container">
    <RouterView />
  </div>
  <MyFooter />
</template>
<script setup>
import MyFooter from './components/Messenger.vue'
import Navbar from './components/Navbar.vue'
</script>
