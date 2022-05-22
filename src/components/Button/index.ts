import { App } from 'vue'
import Button from './index.vue'

export const install = (app: App) => {
  app.component('Button', Button)
}
export default {
  install
}