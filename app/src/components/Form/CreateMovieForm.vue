<template>
  <form class="mt-5" @submit.prevent="handleSubmit">
    <TitleInput v-model="document.title" />
    <DescriptionInput v-model="document.description" />
    <CoverInput v-model="document.cover" />
    <ErrorAlert v-model:error="error" />
    <MyButton
      class="mt-3"
      text="Create"
      variant="outline-light"
      :isPending="isPending"
      :disabled="!document.cover"
    />
  </form>
</template>
<script setup>
import CoverInput from './CoverInput.vue'
import DescriptionInput from './DescriptionInput.vue'
import TitleInput from './TitleInput.vue'
import ErrorAlert from '@/components/Common/ErrorAlert.vue'
import MyButton from '@/components/Common/MyButton.vue'
import useCollection from '@/composables/useCollection'
import useOnAuthStateChanged from '@/composables/useOnAuthStateChanged'
import { reactive } from 'vue'

const { error, isPending, addDocument } = useCollection('movies')
const { user } = useOnAuthStateChanged()

const document = reactive({
  title: '',
  description: '',
  cover: '',
  createdBy: '',
})

const handleSubmit = async () => {
  await addDocument({ ...document, createdBy: user.value.uid })
}
</script>
