<template>
  <div class="form-floating mt-3">
    <textarea
      class="form-control"
      id="input-description"
      rows="3"
      placeholder="Enter description..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
    <label for="input-description" class="form-label">Description</label>
  </div>
</template>
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
