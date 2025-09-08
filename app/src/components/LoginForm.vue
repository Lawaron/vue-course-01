
<template>
  <h5 class="text-center mb-4">Login</h5>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label
        for="email"
        class="form-label"
        >Email</label>
      <input
        class="form-control"
        id="email"
        type="email"
        placeholder="email"
        required
        v-model="email"
        >
    </div>
    <div class="mb-3">
      <label
        for="password"
        class="form-label"
        >Email</label>
      <input
        class="form-control"
        id="password"
        type="password"
        placeholder="password"
        required
        v-model="password"
        >
    </div>
    <div
      v-if="error"
      class="alert alert-danger"
      role="alert"
      >
      {{ error }}
    </div>
    <button
      type="submit"
      class="btn btn-outline-info w-100 mt-3"
      >
      Login
    </button>
  </form>
</template>
<script setup>
  import { ref } from "vue"
  import useLogin from "@/composables/useLogin"

  const email = ref("")
  const password = ref("")

  const { error, login } = useLogin()

  const emit = defineEmits(["login"])

  const handleSubmit = async () => {
    await login(email.value, password.value)

    if(!error.value) {
      emit("login")
    }
  }
</script>
