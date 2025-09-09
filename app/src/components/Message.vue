<template>
  <div :class="wrapperClasses">
    <div class="card w-50 mt-2" :class="cardClasses">
      <div class="card-header" :class="{ 'border-info': isCurrentUser, 'text-info': isCurrentUser }">
        {{ displayName }}
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{{ message }}</p>
        </blockquote>
      </div>
      <div class="card-footer text-muted">
        {{ createdAt }}
      </div>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps([
    "id",
    "name",
    "message",
    "createdAt",
    "currentUser"
  ])

  const isCurrentUser = props.currentUser.displayName === props.name

  const displayName = props.name
    + (isCurrentUser ? " (you)" : "")

  const wrapperClasses = {
    "d-flex": true,
    "justify-content-end": isCurrentUser
  }

  const cardClasses = {
    "border-info": isCurrentUser
  }

  const headerClasses = {
    "border-info": isCurrentUser,
    "text-info": isCurrentUser
  }

</script>
