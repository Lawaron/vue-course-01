<script setup>
  import { computed, defineProps } from "vue"

  const { action, docId} = defineProps(["action", "docId"])
  const emit = defineEmits(["closeChange"])
  const alertClasses = computed(() => ({
    "alert": true,
    "alert-primary": action === "added",
    "alert-warning": action === "modified",
    "alert-danger": action === "removed",
    "alert-dismissible": true
  }))

</script>
<template>
    <p :class="alertClasses" role="alert">
      <strong>{{ action }} book</strong> {{ docId }}
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="$emit('closeChange')"
        ></button>
    </p>
</template>
