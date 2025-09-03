<script setup>
  import useBooks from "@/composables/useBooks"
  import { defineProps, defineEmits } from "vue"

  const props = defineProps(["bookId", "tag", "disabled"])
  const emit = defineEmits(["success", "failure", "update:loading"])
  const { deleteTag, error } = useBooks(emit)

  const removeTag = async () => {
    await deleteTag(props.bookId, props.tag)

    if (error.value) {
      emit("failure", error.value)
      return
    }

    emit("success")
  }
</script>
<template>
  <button
    class="btn btn-outline-info btn-sm m-1"
    @click="removeTag"
    :disabled="disabled"
    >{{ tag }}</button>
</template>
