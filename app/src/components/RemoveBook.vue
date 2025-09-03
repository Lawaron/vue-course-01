<script setup>
  import useBooks from "@/composables/useBooks"
  import { defineEmits, defineProps } from "vue"

  const props = defineProps(["id", "disabled"])
  const emit = defineEmits(["failure", "success", "update:loading"])
  const { deleteBook, error } = useBooks(emit)

  const removeBook = async () => {
    await deleteBook(props.id)

    if (error.value) {
      emit("failure", error.value)
      return
    }

    emit("success")
  }
</script>
<template>
  <button @click="removeBook" :disabled="disabled">Delete</button>
</template>
