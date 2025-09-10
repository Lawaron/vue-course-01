<template>
  <div :class="wrapperClasses">
    <div class="card w-50 mt-2" :class="cardClasses">
      <div class="card-header">
        {{ displayName }}
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{{ message }}</p>
        </blockquote>
      </div>
      <div class="card-footer text-muted">
        {{ time }} ago
      </div>
    </div>
  </div>
</template>
<script setup>
  import { computed } from "vue"
  import { formatDistanceToNow } from "date-fns"

  const { id, name, message, createdAt, currentUser } = defineProps([
    "id",
    "name",
    "message",
    "createdAt",
    "currentUser"
  ])

  const time = computed(() => formatDistanceToNow(createdAt.toDate()))

  const isCurrentUser = currentUser.displayName === name

  const displayName = name + (isCurrentUser ? " (you)" : "")

  const wrapperClasses = {
    "d-flex": true,
    "justify-content-end": isCurrentUser
  }

  const cardClasses = {
    "border-info": isCurrentUser,
    "text-info": isCurrentUser
  }

</script>
