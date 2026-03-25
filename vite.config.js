import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Deploy na raiz do domínio (https://www.seday.com.br/)
  // Deve estar alinhado com canonical e og:url no SEO.jsx e index.html.
  base: '/',

  plugins: [react()],
  publicDir: 'public',

  build: {
    // Desabilita sourcemaps em produção para reduzir tamanho do bundle
    sourcemap: false,

    rollupOptions: {
      output: {
        /**
         * Vendor Splitting — melhora o cache do browser.
         * O browser reutiliza estes chunks entre deploys enquanto
         * as dependências não mudarem, mesmo que o código da app mude.
         */
        manualChunks(id) {
          // Chunk separado para React core (muda raramente)
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-helmet-async') || id.includes('node_modules/scheduler')) {
            return 'vendor-react'
          }
          // Chunk separado para AOS (animações — muda raramente)
          if (id.includes('node_modules/aos')) {
            return 'vendor-aos'
          }
        },
      },
    },
  },
})
