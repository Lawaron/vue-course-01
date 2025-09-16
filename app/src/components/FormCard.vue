<template>
  <div class="container min-vh-100 d-flex justify-content-center align-items-center">
    <div class="card shadow p-4 form-card">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
  .form-card {
    width: 100%;
    max-width: 400px
  }
</style>
