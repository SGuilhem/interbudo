import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { createHead } from '@vueuse/head'

const head = createHead()
app.use(head)

const app = createApp(App)
app.use(router)
app.mount('#app')
