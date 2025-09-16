<template>
  <button
    :disabled="isPending"
    type="submit"
    :class="`btn btn-${variant} w-100 mt-3`"
    >
    <span
      v-if="isPending"
      class="spinner-border spinner-border-sm"
      aria-hidden="true"
      ></span>
    <span v-else>{{ text }}</span>
  </button>
</template>
<script setup>
  defineProps({
    text: String,
    variant: String,
    isPending: Boolean
  })
</script>
