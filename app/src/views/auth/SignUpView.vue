<template>
  <FormCard>
    <h4 class="text-center mb-4">
      <i class="bi bi-person-add mr-2"></i>
      Sign Up
    </h4>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="display-name" class="form-label">Display name</label>
        <input
          class="form-control"
          id="display-name"
          type="text"
          placeholder="display name"
          required
          v-model="displayName"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          class="form-control"
          id="email"
          type="email"
          placeholder="email"
          required
          v-model="email"
        />
      </div>
      <div class="mb-5">
        <label for="password" class="form-label">Email</label>
        <input
          class="form-control"
          id="password"
          type="password"
          placeholder="password"
          required
          v-model="password"
        />
      </div>
      <ErrorAlert v-model:error="error" />
      <MyButton text="Sign Up" variant="outline-light" :isPending="isPending" />
    </form>
  </FormCard>
</template>
<script setup>
import { ref } from 'vue'
import ErrorAlert from '@/components/Common/ErrorAlert.vue'
import FormCard from '@/components/Common/FormCard.vue'
import MyButton from '@/components/Common/MyButton.vue'
import useSignUp from '@/composables/useSignUp'

const displayName = ref('')
const email = ref('')
const password = ref('')

const { error, isPending, signUp } = useSignUp()

const handleSubmit = async () => {
  await signUp(email.value, password.value, displayName.value)

  if (!error.value) {
    console.log('user signed up')
  }
}
</script>
