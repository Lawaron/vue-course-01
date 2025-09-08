import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/bootrstrap-imports'

import auth from "@/firebase/auth"
import { onAuthStateChanged } from "firebase/auth"

let app

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)
    .use(router)
    .mount('#app')
  }
})
