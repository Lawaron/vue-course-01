<script setup>
  import { defineProps } from "vue"
  import ShowBook from './ShowBook.vue';
  import RemoveBook from './RemoveBook.vue';
  import AddTag from './AddTag.vue';
  import RemoveTag from "./RemoveTag.vue";

  const props = defineProps([
    "id",
    "title",
    "author",
    "tags",
    "createdAt",
    "loading"
  ])
</script>
<template>
  <h2>{{ title }}</h2>
  <h3>{{ author }}</h3>
  <h4>
    <remove-tag
      v-for="tag in tags" :key="`${id}-${tag}`"
      v-bind="$attrs"
      :bookId="id"
      :tag="tag"
      :disabled="loading"
      ></remove-tag>
  </h4>
  <h5>{{ id }}</h5>
  <h5>{{ createdAt }}</h5>
  <h6>
    <show-book
      v-bind="$attrs"
      :id="id"
      :disabled="loading"
      ></show-book>
    <remove-book
      v-bind="$attrs"
      :id="id"
      :disabled="loading"
      ></remove-book>
    <add-tag
      v-bind="$attrs"
      :id="id"
      :disabled="loading"
      ></add-tag>
  </h6>
</template>
