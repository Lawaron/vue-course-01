<script setup>
  import useBooks from "@/composables/useBooks"
  import { defineEmits } from "vue"

  const props = defineProps(["disabled"])
  const emit = defineEmits(["success", "failure", "update:loading"])
  const { addBook, error } = useBooks(emit)

  const createBook = async () => {
    const bookId = await addBook({
      author: 'Frank Herbert',
      title: 'Dune',
      tags: [
        'science fiction'
      ],
    })

    if (error.value) {
      emit("failure", error.value)
      return
    }

    emit("success", `${bookId} azonosítóval új könyv lett hozzáadva.`)
  }
</script>
<template>
  <button
    type="button"
    class="btn btn-outline-primary btn-sm"
    @click="createBook"
    :disabled="disabled"
    >Add Book</button>
</template>
