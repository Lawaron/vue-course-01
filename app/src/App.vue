<template>
  <Navbar />
  <RouterView />
  <MyFooter />
</template>
<script setup>
import MyFooter from './components/Messenger.vue'
import Navbar from './components/Navbar.vue'
</script>
