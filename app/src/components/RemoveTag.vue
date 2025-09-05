<script setup>
  import useBooks from "@/composables/useBooks"

  const { bookId, tag, disabled } = defineProps(["bookId", "tag", "disabled"])
  const emit = defineEmits(["success", "failure", "update:loading"])
  const { deleteTag, error } = useBooks(emit)

  const removeTag = async () => {
    await deleteTag(bookId, tag)

    if (error.value) {
      emit("failure", error.value)
      return
    }

    emit("success")
  }
</script>
<template>
  <button
    v-tooltip.html="`Click to remove tag<br>${tag}`"
    class="btn btn-outline-info btn-sm m-1"
    @click="removeTag"
    :disabled="disabled"
    >{{ tag }}</button>
</template>
