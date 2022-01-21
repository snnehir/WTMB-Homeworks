import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"
import store from './store/store'
import axios from "axios"
const app = createApp(App)
app.use(router)
app.use(store)
app.config.globalProperties.$axios = axios
app.mount('#app')
