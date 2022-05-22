import Button from './Button'
import { App } from 'vue';

const list = [
  Button
]

const install = (app: App) => {
  list.forEach(item => {
    app.use(item)
  })
}

export default {
  install
}