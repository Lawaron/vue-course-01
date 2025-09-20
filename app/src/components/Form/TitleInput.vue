<template>
  <div class="form-floating mt-3">
    <input
      type="text"
      class="form-control"
      id="input-title"
      placeholder="Enter title..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label for="input-title" class="form-label">Title</label>
  </div>
</template>
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
