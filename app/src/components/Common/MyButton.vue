<template>
  <button :disabled="isPending" type="submit" :class="`btn btn-${variant} w-100`">
    <span v-if="isPending" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span v-else>{{ text }}</span>
  </button>
</template>
<script setup>
import { Alert } from 'bootstrap'

defineProps({
  text: String,
  variant: String,
  isPending: Boolean,
})
</script>
