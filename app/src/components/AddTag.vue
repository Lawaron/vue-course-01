<script setup>
  import useBooks from "@/composables/useBooks"
  import { defineEmits } from "vue"

  const props = defineProps(["id"])
  const emit = defineEmits(["success", "failure", "update:loading"])
  const { addTag, error, loading } = useBooks(emit)

  const addNewTag = async event => {
    await addTag(props.id, event.target.value)

    if (error.value) {
      emit("failure", error.value)
      return
    }

    event.target.value = ""
    emit("success")
  }
</script>
<template>
  <input
    type="text"
    name="new_tag"
    id="new-tag"
    @keyup.enter.prevent="addNewTag"
    :disabled="loading"
    />
</template>
