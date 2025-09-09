<template>
  <div
    v-if="error"
    class="alert alert-danger"
    role="alert"
    >
    {{ error }}
  </div>
  <div v-if="documents">
    <Message
      v-for="document in documents"
      :key="document.id"
      v-bind="document"
      :currentUser="user"
    />
  </div>
</template>
<script setup>
  import useOnSnapshot from "@/composables/useOnSnapshot"
  import useOnAuthStateChanged from "@/composables/useOnAuthStateChanged"
  import Message from "./Message.vue";

  const { user } = useOnAuthStateChanged()

  const { documents, error } = useOnSnapshot("messages")
</script>
