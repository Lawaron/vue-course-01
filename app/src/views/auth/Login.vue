<template>
  <FormCard>
    <h4 class="text-center mb-4">
      <i class="bi bi-fingerprint mr-2"></i>
      Login
    </h4>
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
      <ErrorAlert
        :error="error"/>
      <MyButton
        text="Login"
        variant="outline-info"
        :isPending="isPending"/>
    </form>
  </FormCard>
</template>
<script setup>
  import { ref } from "vue"
  import ErrorAlert from "@/components/ErrorAlert.vue"
  import FormCard from '@/components/FormCard.vue'
  import useLogin from "@/composables/useLogin"
import MyButton from "@/components/MyButton.vue"

  const email = ref("")
  const password = ref("")

  const { error, isPending, login } = useLogin()

  const emit = defineEmits(["login"])

  const handleSubmit = async () => {
    const res = await login(email.value, password.value)

    if(!error.value) {
      console.log('user logged in')
    }
  }
</script>
