<script setup>
  import useBooks from "@/composables/useBooks"
  import { defineEmits, defineProps } from "vue"

  const props = defineProps(["id", "disabled"])
  const emit = defineEmits(["failure", "update:loading"])
  const { getSingleBook, error } = useBooks(emit)

  const showBook = async () => {
    const book = await getSingleBook(props.id);

    if (error.value) {
      emit("failure", error.value)
      return
    }

    alert(`Könyv adatai:\n${book.author} - ${book.title}\n(${book.tags}).`)
  }
</script>
<template>
  <button @click="showBook" :disabled="disabled">View Book</button>
</template>
