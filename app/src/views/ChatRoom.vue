<template>
  <Navbar />
  <div class="container">
  </div>
</template>
<script setup>
  import Navbar from '@/components/Navbar.vue'
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
