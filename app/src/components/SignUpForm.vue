<template>
  <h5 class="text-center mb-4">Sign Up</h5>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label
        for="display-name"
        class="form-label"
        >Display name</label>
      <input
        class="form-control"
        id="display-name"
        type="text"
        placeholder="display name"
        required
        v-model="displayName"
        >
    </div>
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
      Sign up
    </button>
  </form>
</template>
<script setup>
  import { ref } from "vue"
  import useSignUp from "@/composables/useSignUp"

  const { error, signUp } = useSignUp()

  const displayName = ref("")
  const email = ref("")
  const password = ref("")

  const emit = defineEmits(["signUp"])

  const handleSubmit = async () => {
    await signUp(email.value, password.value, displayName.value)

    if(!error.value) {
      emit("signUp")
    }
  }
</script>
