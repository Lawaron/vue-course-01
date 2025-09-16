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
      <input class="form-control" type="file" id="input-cover" />
    </div>
    <ErrorAlert v-model:error="error" />
    <MyButton class="mt-3" text="Create" variant="outline-light" :isPending="false" />
  </form>
</template>
<script setup>
import MyButton from '@/components/Common/MyButton.vue'
import { ref } from 'vue'

const title = ref('')
const description = ref('')
const error = ''
const handleSubmit = () => {
  console.log(title.value, description.value)
}
</script>
