<template>
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
</template>
<script setup>
import { ref, watch } from 'vue'
import ErrorAlert from '../Common/ErrorAlert.vue'
import useFileReader from '@/composables/useFileReader'

defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])
const fileInputRef = ref(null)
const { error, imageData, onFileChange } = useFileReader(['image/jpeg'], 4000)

const clearFileInput = () => {
  imageData.value = null
}

watch(imageData, (newValue) => {
  console.log(newValue)
  if (newValue === null) {
    fileInputRef.value.value = ''
  }
  emit('update:modelValue', newValue || '')
})
</script>
