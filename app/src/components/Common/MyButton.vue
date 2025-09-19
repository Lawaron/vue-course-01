<template>
  <button :disabled="isPending || disabled" type="submit" :class="`btn btn-${variant} w-100`">
    <span v-if="isPending" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span v-else>{{ text }}</span>
  </button>
</template>
<script setup>
defineProps({
  text: String,
  variant: String,
  isPending: Boolean,
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>
