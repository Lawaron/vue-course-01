<template>
  <nav
    v-if="user"
    class="navbar navbar-expand-lg navbar-dark bg-dark"
    >
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">
        <span id="userName">Hi {{ user.displayName }}!</span>
        <small id="userEmail" class="badge ms-2">Logged in as {{ user.email }}</small>
      </span>
      <div class="ms-auto">
        <button
          id="logoutButton"
          class="btn btn-outline-info"
          @click="handleClick"
          >Logout</button>
      </div>
    </div>
  </nav>
</template>
<script setup>
  import useLogout from "@/composables/useLogout"
  import useOnAuthStateChanged from "@/composables/useOnAuthStateChanged"

  const { error, logout } = useLogout()
  const { user } = useOnAuthStateChanged()

  const handleClick = async () => {
    await logout()

    if (!error.value) {
      console.log("User logged out")
    }
  }
</script>
