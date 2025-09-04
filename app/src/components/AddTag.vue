<script setup>
  import useBooks from "@/composables/useBooks"
  import { defineEmits } from "vue"

  const { id } = defineProps(["id"])
  const emit = defineEmits(["success", "failure", "update:loading"])
  const { addTag, error, loading } = useBooks(emit)

  const addNewTag = async event => {
    await addTag(id, event.target.value)

    if (error.value) {
      emit("failure", error.value)
      return
    }

    event.target.value = ""
    emit("success")
  }
  const info = "Add new tag and press Enter"
</script>
<template>
  <input
    v-tooltip.bottom.focus="info"
    :placeholder="info"
    class="form-control"
    type="text"
    name="new_tag"
    id="new-tag"
    @keyup.enter.prevent="addNewTag"
    :disabled="loading"
    />
</template>
