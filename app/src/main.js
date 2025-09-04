import { createApp } from 'vue'
import App from './App.vue'
import vTooltip from './directives/tooltip'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.directive('tooltip', vTooltip)
app.mount('#app')
