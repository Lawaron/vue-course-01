<script setup>
  import useOnSnapshot from '@/composables/useOnSnapshot'
  const { data: books, changes } = useOnSnapshot('books')
</script>
<template>
  <div class="oszlop">
    <h1>Real Time Store</h1>
    <p v-for="{ author, id, tags, title } in books" :key="id">
      {{ author }} - {{ title }}<br />({{ tags }})
    </p>
  </div>
  <div class="oszlop">
    <h1>Updates</h1>
    <p v-for="(change, index) in changes" :key="index">
      <strong>{{ change.action }}</strong> book {{ change.docId }}
    </p>
  </div>

</template>
