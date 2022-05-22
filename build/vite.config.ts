import path from 'path'
import { defineConfig } from 'vite'
// https://github.com/vitejs/vite/tree/main/packages/plugin-vue
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: path.resolve(__dirname, '..', 'src'),
  plugins: [
    vue(),
  ],
})
