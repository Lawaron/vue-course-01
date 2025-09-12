<template>
  <div
    v-if="error"
    class="alert alert-danger mt-3"
    role="alert"
    >
    {{ error }}
  </div>
  <form class="mt-2">
    <textarea
      placeholder="Type a message and hit enter to send..."
      class="form-control"
      rows="3"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
  </form>
</template>
<script setup>
  import { ref } from "vue"
  import useCollection from "@/composables/useCollection"
  import useOnAuthStateChanged from "@/composables/useOnAuthStateChanged"

  const { user } = useOnAuthStateChanged()
  const { addDocument, error } = useCollection("messages")
  const message = ref("")

  const handleSubmit = async () => {
    const chat = {
      name: user.value.displayName,
      message: message.value
    }

    await addDocument(chat)

    if (!error.value) {
      message.value = ""
    }
  }
</script>
