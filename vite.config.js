import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(async ({ command }) => {
  const plugins = [vue(), vueDevTools(), tailwindcss()]

  if (command === 'build') {
    const { default: prerender } = await import('vite-plugin-prerender')
    plugins.push(
      prerender({
        staticDir: 'dist',
        routes: [
          '/',
          '/cours',
          '/staff',
          '/dojos-horaires',
          '/tarifs',
          '/inscriptions',
          '/photos',
          '/articles',
          '/documents',
          '/partenaires',
        ],
      }),
    )
  }

  return {
    plugins,
    base: process.env.DEPLOY_TARGET === 'ovh' ? '/' : '/interbudo/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
