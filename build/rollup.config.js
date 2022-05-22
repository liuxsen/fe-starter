import path from 'path'
import { defineConfig } from 'rollup'
import PluginJson from '@rollup/plugin-json'
import vue from '@vitejs/plugin-vue'
import less from 'rollup-plugin-less'
import Plugints from '@rollup/plugin-typescript'
const entryPath = path.resolve(__dirname, '..', 'src/index.ts')
const config = defineConfig(
  [
    {
      input: entryPath,
      output: [
        {
          file: 'dist/bundle.cjs',
          format: 'cjs',
        },
        {
          file: 'dist/bundle.js',
          format: 'esm',
        },
      ],
      plugins: [
        PluginJson(),
        vue({
          isProduction: true,
        }),
        less({
          output: 'dist/bundle.css',
        }),
        Plugints(),
      ],
    },
  ],
)

export default config
