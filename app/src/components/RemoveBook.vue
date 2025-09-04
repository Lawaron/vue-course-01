<script setup>
  import useBooks from "@/composables/useBooks"

  const { id, disabled } = defineProps(["id", "disabled"])
  const emit = defineEmits(["failure", "success", "update:loading"])
  const { deleteBook, error } = useBooks(emit)

  const removeBook = async () => {
    await deleteBook(id)

    if (error.value) {
      emit("failure", error.value)
      return
    }

    emit("success")
  }

  const tooltip = {
    text: "Remove Book",
    placement: "bottom",
    trigger: "hover"
  }
</script>
<template>
  <button
    v-tooltip="tooltip"
    class="btn btn-outline-danger btn-sm m-1"
    @click="removeBook"
    :disabled="disabled"
    ><i class="bi bi-trash"></i></button>
</template>
