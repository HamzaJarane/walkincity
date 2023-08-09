import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createVueWait } from 'vue-wait'
import VueYtframe from "vue3-ytframe"
import './registerServiceWorker'
import './assets/css/style.css'
const VueWait = createVueWait()

createApp(App).use(VueWait).use(VueYtframe).use(VueAxios, axios).mount('#app')