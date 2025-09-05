
<template>
  <h5 class="text-center mb-4">Log In</h5>
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
    <button
      type="submit"
      class="btn btn-outline-info w-100 mt-3"
      >
      Log in
    </button>
  </form>
</template>
<script setup>
  import { ref } from "vue"

  const email = ref("")
  const password = ref("")

  const handleSubmit = () => {
    console.log(email.value, password.value)
  }
</script>
