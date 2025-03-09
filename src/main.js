import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import InlineSvg from 'vue-inline-svg'
import VueTheMask from 'vue-the-mask'

const app = createApp(App)
app.component('inline-svg', InlineSvg)
app.use(VueTheMask)

app.mount('#app')
