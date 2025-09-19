<template>
  <form class="mt-5" @submit.prevent="handleSubmit">
    <h4>Create New Movie</h4>
    <div class="form-floating mt-3">
      <input
        type="text"
        class="form-control"
        id="input-title"
        placeholder="Enter title..."
        v-model="title"
      />
      <label for="input-title" class="form-label">Title</label>
    </div>
    <div class="form-floating mt-3">
      <textarea
        class="form-control"
        id="input-description"
        rows="3"
        placeholder="Enter description..."
        v-model="description"
      ></textarea>
      <label for="input-description" class="form-label">Description</label>
    </div>
    <div class="mt-3">
      <label for="input-cover" class="form-label">Cover</label>
      <input class="form-control" type="file" id="input-cover" @change="onFileChange" />
    </div>
    <ErrorAlert v-model:error="error" />
    <MyButton
      class="mt-3"
      text="Create"
      variant="outline-light"
      :isPending="false"
      :disabled="imageData === null"
    />
  </form>
</template>
<script setup>
import ErrorAlert from '@/components/Common/ErrorAlert.vue'
import MyButton from '@/components/Common/MyButton.vue'
import useFileReader from '@/composables/useFileReader'
import { ref } from 'vue'

const title = ref('')
const description = ref('')
const error = ''
const { imageData, onFileChange } = useFileReader(['image/jpeg'])

const handleSubmit = () => {
  console.log(imageData.value)
}
</script>
