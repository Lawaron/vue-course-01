<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-secondary">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <i class="bi bi-film"></i>
        Lawaron Movies
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div v-if="!user" class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'SignUp' }">Sign Up</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Login' }">Login</router-link>
          </li>
        </ul>
      </div>
      <form v-else class="d-flex" @submit.prevent><Logout /></form>
    </div>
  </nav>
</template>
<script setup>
import Logout from '@/components/Logout.vue'
import useOnAuthStateChanged from '@/composables/useOnAuthStateChanged'

const { user } = useOnAuthStateChanged()
</script>
