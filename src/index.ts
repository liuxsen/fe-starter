import { createApp } from 'vue'
import router from './routes/index'
import UI from './components/index'
import Main from './app.vue'

const app = createApp(Main)
app.use(router)
app.use(UI)
app.mount('#app')
