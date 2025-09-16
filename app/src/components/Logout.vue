<template>
  <MyButton text="Logout" variant="outline-dark" :isPending="isPending" @click="handleClick" />
  <ErrorAlert v-model:error="error" />
</template>
<script setup>
import MyButton from './Common/MyButton.vue'
import useLogout from '@/composables/useLogout'
import { useRouter } from 'vue-router'
import ErrorAlert from './Common/ErrorAlert.vue'

const { error, isPending, logout } = useLogout()
const router = useRouter()

const handleClick = async () => {
  await logout()

  if (!error.value) {
    console.log('User logged out')
    router.push({ name: 'Login' })
  }
}
</script>
