import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/site-seday/',
  plugins: [react()],
  publicDir: 'public',
})
