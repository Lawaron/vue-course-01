<script setup>
  import useOnSnapshot from '@/composables/useOnSnapshot'
  import Change from './Change.vue'

  const { data: books, changes } = useOnSnapshot('books')
  const emit = defineEmits(['closeChange'])
</script>
<template>
  <div class="col">
    <h1 class="mb-5">Real Time Store</h1>
    <ul class="list-group">
      <li
        class="list-group-item" v-for="{ author, id, tags, title } in books"
        :key="id"
        >
        <p>{{ author }} - {{ title }}</p>
        <p>
          <span
            v-for="tag in tags" :key="`${id}-${tag}`"
            class="badge text-bg-secondary m-1"
            > {{ tag }}</span>
        </p>
      </li>
    </ul>
  </div>
  <div class="col">
    <h1 class="mb-5">Updates</h1>
    <change
      v-for="(change, index) in changes"
      v-bind="change"
      :key="index"
      @closeChange="changes.splice(index, 1)"
    ></change>
  </div>
</template>
