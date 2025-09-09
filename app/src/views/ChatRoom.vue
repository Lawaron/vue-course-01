<template>
  <Navbar />
  <div class="container">
    <ChatWindow />
    <NewChatform />
  </div>
</template>
<script setup>
  import ChatWindow from '@/components/ChatWindow.vue'
  import Navbar from '@/components/Navbar.vue'
  import NewChatform from '@/components/NewChatform.vue'
  import useOnAuthStateChanged from "@/composables/useOnAuthStateChanged"
  import { watch } from "vue"
  import { useRouter } from "vue-router"

  const { user } = useOnAuthStateChanged()
  const router = useRouter()

  watch(user, () => {
    if (!user.value) {
      router.push({ name: "Welcome" })
    }
  })

</script>
