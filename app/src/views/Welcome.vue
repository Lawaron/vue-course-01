<template>
  <div class="container min-vh-100 d-flex justify-content-center align-items-center">
    <div v-if="showLogin" class="card shadow p-4 form-card">
      <LoginForm @login="enterChat" />
      <p class="mt-3 text-muted">
        No account yet?
        <span
          class="badge rounded-pill bg-info"
          @click="showLogin = false"
          >Sign Up</span> instead.</p>
    </div>
    <div v-else  class="card shadow p-4 form-card">
      <SignUpForm @signUp="enterChat" />
      <p class="mt-3 text-muted">
        Already registered?
        <span
          class="badge rounded-pill bg-info"
          @click="showLogin = true"
          >Login</span> instead.</p>
    </div>
  </div>
</template>
<script setup>
  import SignUpForm from '@/components/SignUpForm.vue'
  import LoginForm from '@/components/LoginForm.vue'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const showLogin = ref(true)
  const router = useRouter()

  const enterChat = () => {
    router.push({ name: "ChatRoom" })
  }
</script>
<style scoped>
  .form-card {
    width: 100%;
    max-width: 400px
  }
  .badge.rounded-pill {
    cursor: pointer
  }
</style>
