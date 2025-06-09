import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/',
  assetsInclude: ['**/*.md'],
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: 'build'
  }
})
