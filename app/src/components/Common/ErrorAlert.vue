<template>
  <Teleport defer to="#messenger">
    <div v-if="error" class="alert alert-danger" role="alert">
      <i class="bi bi-exclamation-triangle mr-2"></i>
      {{ error }}
      <button type="button" class="btn-close" aria-label="Close" @click="close"></button>
    </div>
  </Teleport>
</template>
<script setup>
defineProps({
  error: String | null,
})

const emit = defineEmits(['update:error'])

const close = () => emit('update:error', null)
</script>
