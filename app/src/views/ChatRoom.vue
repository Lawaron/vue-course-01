<template>
  <div class="d-flex flex-column full-height">
    <Navbar />
      <div class="flex-grow-1 overflow-auto p-3">
        <ChatWindow />
      </div>
      <div class="p-3 mt-auto">
          <NewChatform />
      </div>
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
<style scoped>
  .full-height {
    height: 100vh;
  }
</style>
