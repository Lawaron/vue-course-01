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
    <div class="input-group mt-3">
      <label class="input-group-text" for="input-cover">
        <i class="bi bi-upload me-2"></i>
        Upload Cover
      </label>
      <input
        class="form-control"
        type="file"
        id="input-cover"
        @change="onFileChange"
        ref="fileInputRef"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="remove-cover"
        @click="clearFileInput"
        :disabled="imageData === null"
      >
        Cancel
      </button>
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
import useCollection from '@/composables/useCollection'
import useFileReader from '@/composables/useFileReader'
import useOnAuthStateChanged from '@/composables/useOnAuthStateChanged'
import { computed, ref } from 'vue'

const fileInputRef = ref(null)
const title = ref('')
const description = ref('')

const { error: collectionError, addDocument } = useCollection('movies')
const { error: fileReaderError, imageData, onFileChange } = useFileReader(['image/jpeg'], 4000)
const { user } = useOnAuthStateChanged()

const error = computed(() => collectionError.value || fileReaderError.value)

const handleSubmit = async () => {
  await addDocument({
    title: title.value,
    description: description.value,
    cover: imageData.value,
    createdBy: user.value.uid,
  })
}

const clearFileInput = () => {
  fileInputRef.value.value = ''
  imageData.value = null
}
</script>
