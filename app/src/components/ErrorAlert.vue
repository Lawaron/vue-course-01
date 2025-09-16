<template>
  <div v-if="error" class="alert alert-danger"role="alert">
    <i class="bi bi-exclamation-triangle mr-2"></i>
    {{ error }}
  </div>
</template>
<script setup>
  defineProps({
    error: String
  })
</script>
