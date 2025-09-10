<template>
  <div v-if="documents" class="container" v-scroll>
    <Message
      v-for="document in documents"
      :key="document.id"
      v-bind="document"
      :currentUser="user"
    />
  </div>
  <div
    v-if="error"
    class="alert alert-danger"
    role="alert"
    >
    {{ error }}
  </div>
</template>
<script setup>
  import useOnSnapshot from "@/composables/useOnSnapshot"
  import useOnAuthStateChanged from "@/composables/useOnAuthStateChanged"
  import Message from "./Message.vue"
  import vScroll from "@/directives/scroll.js"

  const { user } = useOnAuthStateChanged()

  const { documents, error } = useOnSnapshot("messages")
</script>
